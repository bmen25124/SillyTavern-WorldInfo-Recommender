import { FC, useState, useEffect, useRef, useCallback } from 'react';
import {
  STButton,
  STTextarea,
  Popup,
  STConnectionProfileSelect,
  STInput,
} from 'sillytavern-utils-lib/components/react';
import {
  ReviseMessage,
  ReviseSession,
  ReviseState,
  EntryRevisionResponse,
  EntryRevisionResponseSchema,
  GlobalRevisionResponse,
  GlobalRevisionResponseSchema,
  REVISE_SCHEMA_NAME,
  CHAT_HISTORY_PLACEHOLDER_ID,
} from '../revise-types.js';
import { makePlainRequest, makeStructuredRequest } from '../request.js';
import { settingsManager, PromptEngineeringMode } from '../settings.js';
import { st_echo, st_createWorldInfoEntry, selected_group, this_chid } from 'sillytavern-utils-lib/config';
import { CompareStatePopup } from './CompareStatePopup.js';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { CurrentStatePopup } from './CurrentStatePopup.js';
import { BuildPromptOptions, buildPrompt } from 'sillytavern-utils-lib';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { GlobalStatePopup } from './GlobalStatePopup.js';
import * as Handlebars from 'handlebars';

const globalContext = SillyTavern.getContext();

const calculateNewState = (prevState: WIEntry, response: EntryRevisionResponse): WIEntry => {
  const newState = structuredClone(prevState);
  newState.comment = response.name;
  newState.key = response.triggers;
  newState.content = response.content;
  return newState;
};

const calculateNewGlobalState = (
  prevState: Record<string, WIEntry[]>,
  response: GlobalRevisionResponse,
): Record<string, WIEntry[]> => {
  const newState = structuredClone(prevState);

  // Process removals
  if (response.remove) {
    for (const op of response.remove) {
      const { worldName, name } = op;
      if (newState[worldName]) {
        newState[worldName] = newState[worldName].filter((e) => e.comment !== name);
      }
    }
  }

  // Process changes
  if (response.change) {
    for (const op of response.change) {
      const { worldName, originalName } = op;
      const entryToChange = newState[worldName]?.find((e) => e.comment === originalName);
      if (entryToChange) {
        if (op.newName !== undefined) entryToChange.comment = op.newName;
        if (op.triggers !== undefined) entryToChange.key = op.triggers;
        if (op.content !== undefined) entryToChange.content = op.content;
      } else {
        console.warn(`[WREC] Could not find entry to change: "${originalName}" in world "${worldName}"`);
        st_echo('warning', `Could not find entry to change: "${originalName}" in world "${worldName}"`);
      }
    }
  }

  // Process additions
  if (response.add) {
    for (const op of response.add) {
      const { worldName, name, triggers, content } = op;
      if (!newState[worldName]) {
        newState[worldName] = [];
      }
      const stFormat = { entries: Object.fromEntries(newState[worldName].map((e) => [e.uid, e])) };
      const newEntry = st_createWorldInfoEntry(worldName, stFormat);
      if (newEntry) {
        newEntry.comment = name;
        newEntry.key = triggers;
        newEntry.content = content;
        newState[worldName].push(newEntry);
      }
    }
  }

  return newState;
};

// A local component for manually editing the state of a single WIEntry.
// Kept here to avoid creating a new file for a component only used in this context.
const EditStatePopup: FC<{
  initialState: WIEntry;
  onSave: (newState: WIEntry) => void;
  onClose: () => void;
}> = ({ initialState, onSave, onClose }) => {
  const [name, setName] = useState(initialState.comment);
  const [triggers, setTriggers] = useState(initialState.key.join(', '));
  const [content, setContent] = useState(initialState.content);

  const handleSave = () => {
    const newState: WIEntry = {
      ...structuredClone(initialState),
      comment: name,
      key: triggers
        .split(',')
        .map((k) => k.trim())
        .filter(Boolean),
      content: content,
    };
    onSave(newState);
  };

  return (
    <div className="current-state-popup">
      <div className="popup_header">
        <h3>Editing Entry State</h3>
        <div className="popup_header_buttons">
          <STButton onClick={handleSave}>
            <i className="fa-solid fa-check"></i> Save Changes
          </STButton>
          <STButton onClick={onClose} className="danger_button">
            <i className="fa-solid fa-times"></i> Cancel
          </STButton>
        </div>
      </div>
      <div className="current-state-content">
        <div className="state-field">
          <label>Name</label>
          <STInput type="text" value={name} onInput={(e) => setName(e.currentTarget.value)} />
        </div>
        <div className="state-field">
          <label>Triggers (comma-separated)</label>
          <STTextarea value={triggers} onChange={(e) => setTriggers(e.target.value)} rows={2} />
        </div>
        <div className="state-field">
          <label>Content</label>
          <STTextarea value={content} onChange={(e) => setContent(e.target.value)} rows={8} />
        </div>
      </div>
    </div>
  );
};

interface ReviseSessionChatProps {
  session: ReviseSession;
  onBack: () => void;
  onApply: (newState: ReviseState) => void;
  onSessionUpdate: (updatedSession: ReviseSession) => void;
  initialState: ReviseState;
  chatContextOptions: BuildPromptOptions;
}

export const ReviseSessionChat: FC<ReviseSessionChatProps> = ({
  session,
  onBack,
  onApply,
  onSessionUpdate,
  initialState,
  chatContextOptions,
}) => {
  const [messages, setMessages] = useState<ReviseMessage[]>(session.messages);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [diffData, setDiffData] = useState<{ before: ReviseState; after: ReviseState } | null>(null);
  const [isCurrentStateOpen, setIsCurrentStateOpen] = useState(false);
  const [isEditingState, setIsEditingState] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingContent, setEditingContent] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const createAndAddStateUpdateMessage = useCallback(
    (currentMessages: ReviseMessage[], newState: ReviseState, lastState: ReviseState): ReviseMessage[] => {
      if (JSON.stringify(lastState) === JSON.stringify(newState)) {
        return currentMessages;
      }

      const settings = settingsManager.getSettings();
      let content = '';

      if (session.type === 'global') {
        const wrapperTemplate = settings.prompts.reviseGlobalStateUpdate?.content;
        const addedModifiedTemplate = settings.prompts.reviseGlobalStateUpdateAddedModified?.content;
        const removedTemplate = settings.prompts.reviseGlobalStateUpdateRemoved?.content;
        if (!wrapperTemplate || !addedModifiedTemplate || !removedTemplate) return currentMessages;

        const oldState = (lastState as Record<string, WIEntry[]>) || {};
        const newStateData = (newState as Record<string, WIEntry[]>) || {};

        const oldEntriesMap = new Map<string, WIEntry>();
        Object.entries(oldState).forEach(([worldName, entries]) => {
          entries.forEach((entry) => {
            oldEntriesMap.set(`${worldName}::${entry.uid}`, entry);
          });
        });

        const newEntriesMap = new Map<string, WIEntry>();
        Object.entries(newStateData).forEach(([worldName, entries]) => {
          entries.forEach((entry) => {
            newEntriesMap.set(`${worldName}::${entry.uid}`, entry);
          });
        });

        const changedLorebooks: Record<string, WIEntry[]> = {}; // For added/modified
        const removedEntries: { worldName: string; comment: string }[] = [];

        // Find added and modified entries
        newEntriesMap.forEach((newEntry, key) => {
          const [worldName] = key.split('::');
          const oldEntry = oldEntriesMap.get(key);

          let isChanged = false;
          if (!oldEntry) {
            isChanged = true; // Added
          } else {
            const contentChanged = (newEntry.content || '') !== (oldEntry.content || '');
            const commentChanged = (newEntry.comment || '') !== (oldEntry.comment || '');
            const keysChanged = (newEntry.key || []).sort().join(',') !== (oldEntry.key || []).sort().join(',');
            if (contentChanged || commentChanged || keysChanged) {
              isChanged = true; // Modified
            }
          }

          if (isChanged) {
            if (!changedLorebooks[worldName]) changedLorebooks[worldName] = [];
            changedLorebooks[worldName].push(newEntry);
          }
        });

        // Find removed entries
        oldEntriesMap.forEach((oldEntry, key) => {
          if (!newEntriesMap.has(key)) {
            const [worldName] = key.split('::');
            removedEntries.push({ worldName, comment: oldEntry.comment });
          }
        });

        if (Object.keys(changedLorebooks).length === 0 && removedEntries.length === 0) {
          return currentMessages; // No actual changes found
        }

        const addedModifiedContent = Handlebars.compile(addedModifiedTemplate, { noEscape: true })({
          changedLorebooks,
        });
        const removedContent = Handlebars.compile(removedTemplate, { noEscape: true })({ removedEntries });

        content = Handlebars.compile(wrapperTemplate, { noEscape: true })({
          addedModifiedContent,
          removedContent,
        });
      } else {
        // 'entry' type
        const entry = newState as WIEntry;
        content = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.\n\n## WORLD NAME: ${session.worldName}\n### (NAME: ${entry.comment})\nTriggers: ${(entry.key || []).join(', ')}\nContent: ${entry.content}`;
      }

      content = globalContext.substituteParams(content.trim());

      if (content) {
        const stateUpdateMessage: ReviseMessage = {
          id: `msg-${Date.now()}-state`,
          role: 'system',
          content: content,
          isStateUpdate: true,
        };
        return [...currentMessages, stateUpdateMessage];
      }

      return currentMessages;
    },
    [session.type, session.worldName],
  );

  const sendRequest = useCallback(
    async (
      messagesToSend: ReviseMessage[],
      isRegeneration: boolean,
      optimisticUpdate: () => void,
      revertUpdate: () => void,
    ) => {
      const settings = settingsManager.getSettings();
      if (!session.profileId) {
        st_echo('warning', 'Please select a connection profile for this session.');
        return;
      }
      abortControllerRef.current = new AbortController();

      optimisticUpdate();
      setIsLoading(true);

      try {
        const finalMessagesForRequest: ReviseMessage[] = [];
        const profile = globalContext.extensionSettings.connectionManager?.profiles?.find(
          (p: any) => p.id === session.profileId,
        );
        const selectedApi = profile?.api ? globalContext.CONNECT_API_MAP[profile.api].selected : undefined;
        if (!selectedApi) {
          st_echo('warning', 'No API selected for this session.');
          return;
        }

        for (const message of messagesToSend) {
          if (message.id === CHAT_HISTORY_PLACEHOLDER_ID) {
            if (this_chid === undefined && !selected_group) continue;
            const prompt = await buildPrompt(selectedApi, chatContextOptions);
            if (prompt.warnings?.length) prompt.warnings.forEach((w) => st_echo('warning', w));
            finalMessagesForRequest.push(...(prompt.result as ReviseMessage[]));
          } else {
            finalMessagesForRequest.push(message);
          }
        }

        const lastState =
          messagesToSend
            .slice(0, messagesToSend.length - (isRegeneration ? 0 : 1))
            .reverse()
            .find((m) => m.stateSnapshot)?.stateSnapshot ?? initialState;

        let stateContent = '';
        if (session.type === 'global') {
          const template = settings.prompts.currentLorebooks?.content;
          if (template) {
            const templateData = { currentLorebooks: lastState };
            stateContent = Handlebars.compile(template, { noEscape: true })(templateData);
          }
        } else {
          // 'entry'
          const entry = lastState as WIEntry;
          stateContent = `The following is the current state of the single lorebook entry you are editing. Base your response on this current state.\n\n## WORLD NAME: ${session.worldName}\n### (NAME: ${entry.comment})\nTriggers: ${(entry.key || []).join(', ')}\nContent: ${entry.content}`;
        }

        stateContent = globalContext.substituteParams(stateContent.trim());

        if (stateContent) {
          const stateMessage: ReviseMessage = {
            id: `temp-state-${Date.now()}`,
            role: 'system',
            content: stateContent,
          };

          const lastMessage = finalMessagesForRequest.pop();
          finalMessagesForRequest.push(stateMessage);
          if (lastMessage) {
            finalMessagesForRequest.push(lastMessage);
          }
        }

        if (session.isReadonly) {
          const responseContent = await makePlainRequest(
            session.profileId,
            finalMessagesForRequest,
            settings.maxResponseToken,
            abortControllerRef.current.signal,
          );

          const assistantMessage: ReviseMessage = {
            id: `msg-${Date.now()}-ai`,
            role: 'assistant',
            content: responseContent,
          };

          const finalMessages = [...messagesToSend, assistantMessage];
          setMessages(finalMessages);
          onSessionUpdate({ ...session, messages: finalMessages });
        } else {
          let newSnapshot: ReviseState;
          let justification: string;

          if (session.type === 'entry') {
            const response = await makeStructuredRequest(
              session.profileId,
              finalMessagesForRequest,
              EntryRevisionResponseSchema,
              REVISE_SCHEMA_NAME.ENTRY,
              session.promptEngineeringMode,
              settings.maxResponseToken,
              abortControllerRef.current.signal,
            );
            newSnapshot = calculateNewState(lastState as WIEntry, response);
            justification = response.justification;
          } else {
            // 'global'
            const response = await makeStructuredRequest(
              session.profileId,
              finalMessagesForRequest,
              GlobalRevisionResponseSchema,
              REVISE_SCHEMA_NAME.GLOBAL,
              session.promptEngineeringMode,
              settings.maxResponseToken,
              abortControllerRef.current.signal,
            );
            newSnapshot = calculateNewGlobalState(lastState as Record<string, WIEntry[]>, response);
            justification = response.justification;
          }

          const assistantMessage: ReviseMessage = {
            id: `msg-${Date.now()}-ai`,
            role: 'assistant',
            content: justification,
            stateSnapshot: newSnapshot,
          };

          let finalMessages = [...messagesToSend, assistantMessage];
          finalMessages = createAndAddStateUpdateMessage(finalMessages, newSnapshot, lastState);

          setMessages(finalMessages);
          onSessionUpdate({ ...session, messages: finalMessages });
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          st_echo('info', 'Request was cancelled.');
        } else {
          console.error('Revise request failed:', error);
          st_echo('error', `Request failed: ${error.message}`);
        }
        revertUpdate();
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [session, onSessionUpdate, initialState, chatContextOptions, createAndAddStateUpdateMessage],
  );

  const handleSendMessage = useCallback(async () => {
    if (!userInput.trim() || isLoading) return;
    const userMessage: ReviseMessage = { id: `msg-${Date.now()}`, role: 'user', content: userInput.trim() };
    const previousMessages = messages;

    await sendRequest(
      [...messages, userMessage],
      false,
      () => {
        setMessages([...messages, userMessage]);
        setUserInput('');
      },
      () => setMessages(previousMessages),
    );
  }, [userInput, isLoading, messages, sendRequest]);

  const handleRegenerate = useCallback(async () => {
    if (isLoading || messages.length === 0) return;

    const previousMessages = messages;
    let messagesForRequest = [...messages];

    // Find the last message that is visible to the user.
    const lastVisibleMessageIndex = messages.findLastIndex((m) => !m.isStateUpdate);

    if (lastVisibleMessageIndex > -1) {
      const lastVisibleMessage = messages[lastVisibleMessageIndex];

      // If the last visible message is from the assistant, we are regenerating it.
      // We need to remove it and any hidden state updates that came after it.
      if (lastVisibleMessage.role === 'assistant') {
        messagesForRequest = messages.slice(0, lastVisibleMessageIndex);
      }
    }
    await sendRequest(
      messagesForRequest,
      true,
      () => setMessages(messagesForRequest),
      () => setMessages(previousMessages),
    );
  }, [isLoading, messages, sendRequest]);

  const handleApply = () => {
    const lastState =
      messages
        .slice()
        .reverse()
        .find((m) => m.stateSnapshot)?.stateSnapshot ?? initialState;
    onApply(lastState);
    onBack();
  };

  const handleShowDiff = (messageId: string) => {
    const msgIndex = messages.findIndex((m) => m.id === messageId);
    if (msgIndex < 0 || !messages[msgIndex].stateSnapshot) return;

    const after = messages[msgIndex].stateSnapshot!;
    let before = initialState;
    for (let i = msgIndex - 1; i >= 0; i--) {
      if (messages[i].stateSnapshot) {
        before = messages[i].stateSnapshot!;
        break;
      }
    }
    setDiffData({ before, after });
  };

  const handleStartEdit = (msg: ReviseMessage) => {
    setEditingMessageId(msg.id);
    setEditingContent(msg.content);
  };

  const handleCancelEdit = () => {
    setEditingMessageId(null);
    setEditingContent('');
  };

  const handleSaveEdit = async () => {
    if (!editingMessageId) return;

    const messageIndex = messages.findIndex((m) => m.id === editingMessageId);
    if (messageIndex === -1) return;

    const confirm = await globalContext.Popup.show.confirm(
      'Edit Message',
      'This will fork the conversation from this point, removing all subsequent messages. Continue?',
    );
    if (!confirm) return;

    const previousMessages = messages;
    const truncatedMessages = messages.slice(0, messageIndex);
    const editedMessage = { ...messages[messageIndex], content: editingContent };
    const messagesForRequest = [...truncatedMessages, editedMessage];

    handleCancelEdit();

    await sendRequest(
      messagesForRequest,
      false,
      () => setMessages(messagesForRequest),
      () => setMessages(previousMessages),
    );
  };

  const handleDeleteMessage = async (messageId: string) => {
    const messageIndex = messages.findIndex((m) => m.id === messageId);
    if (messageIndex === -1) return;

    const isInitial = !!messages[messageIndex].isInitial;

    const confirm = await globalContext.Popup.show.confirm(
      'Delete Message',
      isInitial
        ? 'Deleting part of the initial context will clear the entire chat history. Are you sure?'
        : 'This will delete this message and all subsequent messages. Are you sure?',
    );
    if (!confirm) return;

    const newMessages = isInitial
      ? messages.filter((m) => m.isInitial && m.id !== messageId)
      : messages.slice(0, messageIndex);

    setMessages(newMessages);
    onSessionUpdate({ ...session, messages: newMessages });
    st_echo('info', 'Message history has been updated.');
  };

  const handleSaveStateEdit = (newState: ReviseState) => {
    const lastState =
      messages
        .slice()
        .reverse()
        .find((m) => m.stateSnapshot)?.stateSnapshot ?? initialState;

    const userEditMessage: ReviseMessage = {
      id: `msg-${Date.now()}-user-edit`,
      role: 'user',
      content: 'I made a change manually.',
      stateSnapshot: newState,
    };

    let finalMessages = [...messages, userEditMessage];
    finalMessages = createAndAddStateUpdateMessage(finalMessages, newState, lastState);

    setMessages(finalMessages);
    onSessionUpdate({ ...session, messages: finalMessages });
    setIsEditingState(false);
  };

  const currentState =
    messages
      .slice()
      .reverse()
      .find((m) => m.stateSnapshot)?.stateSnapshot ?? initialState;

  const visibleMessages = messages.filter((m) => !m.isStateUpdate);
  const initialMsgs = visibleMessages.filter((m) => m.isInitial);
  const chatMsgs = visibleMessages.filter((m) => !m.isInitial);

  return (
    <div className="revise-session-chat">
      <div className="popup_header">
        <h2>{session.name}</h2>
        <div className="popup_header_buttons">
          <label className="checkbox_label">
            <input
              type="checkbox"
              checked={session.isReadonly ?? false}
              onChange={(e) => onSessionUpdate({ ...session, isReadonly: e.target.checked })}
            />
            Readonly Mode
          </label>
          <div style={{ maxWidth: '200px' }}>
            <STConnectionProfileSelect
              initialSelectedProfileId={session.profileId}
              onChange={(p) => onSessionUpdate({ ...session, profileId: p?.id ?? '' })}
            />
          </div>
          <select
            className="text_pole"
            value={session.promptEngineeringMode}
            onChange={(e) =>
              onSessionUpdate({ ...session, promptEngineeringMode: e.target.value as PromptEngineeringMode })
            }
            title="Prompt Engineering Mode"
            disabled={session.isReadonly}
            style={{ minWidth: 'fit-content', width: 'unset' }}
          >
            <option value="native">Native</option>
            <option value="json">JSON</option>
            <option value="xml">XML</option>
          </select>
          <STButton onClick={() => setIsCurrentStateOpen(true)} title="View current state">
            View State
          </STButton>
          {session.type === 'entry' && (
            <STButton onClick={() => setIsEditingState(true)} title="Manually edit the current state">
              Edit State
            </STButton>
          )}
          <STButton onClick={onBack} title="Back to sessions">
            <i className="fa-solid fa-arrow-left"></i>
          </STButton>
          <STButton onClick={handleApply} title="Apply Changes and Close">
            <i className="fa-solid fa-check"></i> Apply
          </STButton>
        </div>
      </div>
      <div className="chat-messages">
        {initialMsgs.length > 0 && (
          <details className="initial-messages-container">
            <summary>View Initial Context</summary>
            <div className="initial-messages-content">
              {initialMsgs.map((msg) =>
                editingMessageId === msg.id ? (
                  <div key={msg.id} className="message-editor">
                    <STTextarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} rows={5} />
                    <div className="editor-buttons">
                      <STButton onClick={handleSaveEdit}>
                        <i className="fa-solid fa-check"></i> Save & Fork
                      </STButton>
                      <STButton onClick={handleCancelEdit}>
                        <i className="fa-solid fa-times"></i> Cancel
                      </STButton>
                    </div>
                  </div>
                ) : (
                  <div key={msg.id} className={`message-bubble-wrapper initial-context ${msg.role}`}>
                    <div className={`message-bubble ${msg.role} initial`}>
                      <div className="message-content">{msg.content}</div>
                    </div>
                    {!isLoading && msg.id !== CHAT_HISTORY_PLACEHOLDER_ID && (
                      <div className="message-actions">
                        <STButton
                          className="message-action-button"
                          onClick={() => handleStartEdit(msg)}
                          title="Edit Context"
                        >
                          <i className="fa-solid fa-pencil"></i>
                        </STButton>
                        <STButton
                          className="message-action-button danger_button"
                          onClick={() => handleDeleteMessage(msg.id)}
                          title="Delete Context"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </STButton>
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
          </details>
        )}
        {chatMsgs.map((msg) =>
          editingMessageId === msg.id ? (
            <div key={msg.id} className="message-editor">
              <STTextarea value={editingContent} onChange={(e) => setEditingContent(e.target.value)} rows={3} />
              <div className="editor-buttons">
                <STButton onClick={handleSaveEdit}>
                  <i className="fa-solid fa-check"></i> Save & Fork
                </STButton>
                <STButton onClick={handleCancelEdit}>
                  <i className="fa-solid fa-times"></i> Cancel
                </STButton>
              </div>
            </div>
          ) : (
            <div key={msg.id} className={`message-bubble-wrapper ${msg.role}`}>
              <div className="message-actions">
                {msg.role === 'user' && !msg.stateSnapshot && !isLoading && (
                  <STButton
                    className="message-action-button"
                    onClick={() => handleStartEdit(msg)}
                    title="Edit and Fork"
                  >
                    <i className="fa-solid fa-pencil"></i>
                  </STButton>
                )}
                {msg.stateSnapshot && !isLoading && (
                  <STButton
                    className="message-action-button"
                    onClick={() => handleShowDiff(msg.id)}
                    title="Compare changes"
                  >
                    <i className="fa-solid fa-code-compare"></i>
                  </STButton>
                )}
                {!isLoading && (
                  <STButton
                    className="message-action-button danger_button"
                    onClick={() => handleDeleteMessage(msg.id)}
                    title="Delete Message"
                  >
                    <i className="fa-solid fa-trash-can"></i>
                  </STButton>
                )}
              </div>
              <div className={`message-bubble ${msg.role}`}>
                <div className="message-content">{msg.content}</div>
              </div>
            </div>
          ),
        )}
        {chatMsgs.length > 0 && !isLoading && (
          <div className="regenerate-button-wrapper">
            <STButton onClick={handleRegenerate} title="Regenerate response">
              <i className="fa-solid fa-rotate-right"></i> Regenerate
            </STButton>
          </div>
        )}
        {isLoading && (
          <div className="message-bubble-wrapper assistant">
            <div className="message-bubble assistant loading">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
            <STButton
              onClick={() => abortControllerRef.current?.abort()}
              className="danger_button"
              title="Cancel Request"
            >
              <i className="fa-solid fa-stop"></i>
            </STButton>
          </div>
        )}
        <div ref={chatEndRef}></div>
      </div>
      <div className="chat-input-area">
        <STTextarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your revision instructions..."
          rows={3}
          disabled={isLoading || !!editingMessageId}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <STButton onClick={handleSendMessage} disabled={isLoading || !userInput.trim() || !!editingMessageId}>
          <i className="fa-solid fa-paper-plane"></i>
        </STButton>
      </div>

      {diffData && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={<CompareStatePopup sessionType={session.type} before={diffData.before} after={diffData.after} />}
          onComplete={() => setDiffData(null)}
          options={{ wide: true, large: true }}
        />
      )}
      {isCurrentStateOpen && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            session.type === 'entry' ? (
              <CurrentStatePopup currentState={currentState as WIEntry} initialState={initialState as WIEntry} />
            ) : (
              <GlobalStatePopup
                currentState={currentState as Record<string, WIEntry[]>}
                initialState={initialState as Record<string, WIEntry[]>}
              />
            )
          }
          onComplete={() => setIsCurrentStateOpen(false)}
          options={{ wide: true, large: true }}
        />
      )}
      {isEditingState && session.type === 'entry' && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <EditStatePopup
              initialState={currentState as WIEntry}
              onSave={(newState) => {
                handleSaveStateEdit(newState);
                setIsEditingState(false);
              }}
              onClose={() => setIsEditingState(false)}
            />
          }
          onComplete={() => setIsEditingState(false)}
          options={{ wide: true, large: true }}
        />
      )}
    </div>
  );
};
