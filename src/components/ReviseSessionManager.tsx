import { FC, useState, useEffect, useMemo } from 'react';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { ReviseSession, ReviseState } from '../revise-types.js';
import { STButton } from 'sillytavern-utils-lib/components/react';
import { ReviseSessionChat } from './ReviseSessionChat.js';
import { ExtensionSettings, settingsManager } from '../settings.js';
import { buildInitialReviseMessages } from '../revise-prompt-builder.js';
import { st_echo, selected_group, this_chid } from 'sillytavern-utils-lib/config';
import { BuildPromptOptions } from 'sillytavern-utils-lib';
import { Session } from '../generate.js';

const globalContext = SillyTavern.getContext();
const REVISE_SESSIONS_KEY = 'worldInfoRecommender_reviseSessions';

interface ReviseSessionManagerProps {
  target: { type: 'global' } | { type: 'entry'; worldName: string; entry: WIEntry };
  initialState: ReviseState;
  onClose: () => void;
  onApply:
    | ((newState: Record<string, WIEntry[]>) => void)
    | ((args: { worldName: string; originalEntry: WIEntry; updatedEntry: WIEntry }) => void);
  sessionForContext: Session;
  allEntries: Record<string, WIEntry[]>;
  contextToSend: ExtensionSettings['contextToSend'];
}

export const ReviseSessionManager: FC<ReviseSessionManagerProps> = ({
  target,
  initialState,
  onClose,
  onApply,
  sessionForContext,
  allEntries,
  contextToSend,
}) => {
  const [allSessions, setAllSessions] = useState<ReviseSession[]>([]);
  const [activeSession, setActiveSession] = useState<ReviseSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const targetIdentifier = useMemo(() => {
    if (target.type === 'entry') {
      return `${target.worldName}::${target.entry.uid}::${target.entry.comment}`;
    }
    return 'global';
  }, [target]);

  useEffect(() => {
    const sessionsFromStorage: ReviseSession[] = JSON.parse(localStorage.getItem(REVISE_SESSIONS_KEY) || '[]');
    setAllSessions(sessionsFromStorage);
    setIsLoading(false);
  }, []);

  const filteredSessions = useMemo(() => {
    if (target.type === 'entry') {
      return allSessions
        .filter((s) => s.type === 'entry' && s.targetEntryIdentifier === targetIdentifier)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    return allSessions
      .filter((s) => s.type === 'global')
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [allSessions, target.type, targetIdentifier]);

  const saveAllSessions = (updatedSessions: ReviseSession[]) => {
    localStorage.setItem(REVISE_SESSIONS_KEY, JSON.stringify(updatedSessions));
    setAllSessions(updatedSessions);
  };

  const handleCreateNewSession = async () => {
    const name = await globalContext.Popup.show.input(
      'New Session Name',
      target.type === 'entry'
        ? `Revise "${target.entry.comment}" - ${new Date().toLocaleDateString()}`
        : `Global Revise - ${new Date().toLocaleDateString()}`,
    );
    if (!name) return;

    try {
      const currentSettings = settingsManager.getSettings();
      if (!currentSettings.profileId) {
        st_echo('warning', 'Please select a connection profile in the main popup first.');
        return;
      }

      const initialMsgs = await buildInitialReviseMessages(
        initialState,
        target.type,
        target.type === 'entry' ? target.worldName : undefined,
        currentSettings.mainContextTemplatePreset,
        contextToSend,
        sessionForContext,
        allEntries,
      );

      const newSession: ReviseSession = {
        id: `rs-${Date.now()}`,
        name,
        type: target.type,
        targetEntryIdentifier: target.type === 'entry' ? targetIdentifier : undefined,
        worldName: target.type === 'entry' ? target.worldName : undefined,
        createdAt: new Date().toISOString(),
        messages: initialMsgs,
        context: { mainContextTemplatePreset: currentSettings.mainContextTemplatePreset },
        profileId: currentSettings.profileId,
        promptEngineeringMode: currentSettings.defaultPromptEngineeringMode,
      };

      setActiveSession(newSession);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.error('Failed to create session:', error);
      st_echo('error', `Failed to create session: ${message}`);
    }
  };

  const handleSelectSession = (session: ReviseSession) => {
    setActiveSession(session);
  };

  const handleDeleteSession = async (sessionId: string) => {
    const confirm = await globalContext.Popup.show.confirm('Delete Session', 'Are you sure? This cannot be undone.');
    if (confirm) {
      const updatedSessions = allSessions.filter((s) => s.id !== sessionId);
      saveAllSessions(updatedSessions);
    }
  };

  const handleSessionUpdate = (updatedSession: ReviseSession) => {
    const index = allSessions.findIndex((s) => s.id === updatedSession.id);
    const newAllSessions = [...allSessions];
    if (index !== -1) {
      newAllSessions[index] = updatedSession;
    } else {
      newAllSessions.push(updatedSession);
    }
    saveAllSessions(newAllSessions);
    setActiveSession(updatedSession);
  };

  const handleApplyAndClose = (newState: ReviseState) => {
    if (target.type === 'entry') {
      (onApply as (args: { worldName: string; originalEntry: WIEntry; updatedEntry: WIEntry }) => void)({
        worldName: target.worldName,
        originalEntry: initialState as WIEntry,
        updatedEntry: newState as WIEntry,
      });
    } else {
      (onApply as (newState: Record<string, WIEntry[]>) => void)(newState as Record<string, WIEntry[]>);
    }
    onClose();
  };

  if (activeSession) {
    const profile = globalContext.extensionSettings.connectionManager?.profiles?.find(
      (p) => p.id === activeSession.profileId,
    );
    const msgContext = contextToSend.messages;
    const chatContextOptions: BuildPromptOptions = {
      targetCharacterId: this_chid,
      ignoreCharacterFields: !contextToSend.charCard,
      ignoreWorldInfo: true,
      ignoreAuthorNote: !contextToSend.authorNote,
      includeNames: !!selected_group,
      presetName: profile?.preset,
      contextName: profile?.context,
      instructName: profile?.instruct,
    };

    if (!this_chid && !selected_group) {
      chatContextOptions.messageIndexesBetween = { start: -1, end: -1 };
    } else {
      switch (msgContext.type) {
        case 'none':
          chatContextOptions.messageIndexesBetween = { start: -1, end: -1 };
          break;
        case 'first':
          chatContextOptions.messageIndexesBetween = { start: 0, end: msgContext.first ?? 10 };
          break;
        case 'last': {
          const chatLength = globalContext.chat?.length ?? 0;
          const lastCount = msgContext.last ?? 10;
          chatContextOptions.messageIndexesBetween = {
            end: Math.max(0, chatLength - 1),
            start: Math.max(0, chatLength - lastCount),
          };
          break;
        }
        case 'range':
          if (msgContext.range) {
            chatContextOptions.messageIndexesBetween = {
              start: msgContext.range.start,
              end: msgContext.range.end,
            };
          }
          break;
        case 'all':
        default:
          break;
      }
    }

    return (
      <ReviseSessionChat
        session={activeSession}
        onBack={() => setActiveSession(null)}
        onApply={handleApplyAndClose}
        onSessionUpdate={handleSessionUpdate}
        initialState={initialState}
        chatContextOptions={chatContextOptions}
      />
    );
  }

  const title = target.type === 'entry' ? `Revise Sessions for "${target.entry.comment}"` : 'Global Revise Sessions';

  return (
    <div className="revise-session-manager">
      <div className="popup_header">
        <h2>{title}</h2>
      </div>
      <div className="session-list">
        {isLoading ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            Loading sessions...
          </p>
        ) : filteredSessions.length === 0 ? (
          <p className="subtle" style={{ textAlign: 'center' }}>
            No sessions found. Create one to get started.
          </p>
        ) : (
          filteredSessions.map((session) => (
            <div key={session.id} className="session-item">
              <div className="session-info" onClick={() => handleSelectSession(session)}>
                <span className="session-name">{session.name}</span>
                <span className="session-date">{new Date(session.createdAt).toLocaleString()}</span>
              </div>
              <STButton className="danger_button" onClick={() => handleDeleteSession(session.id)}>
                <i className="fa-solid fa-trash-can"></i>
              </STButton>
            </div>
          ))
        )}
      </div>
      <div className="session-actions">
        <STButton onClick={handleCreateNewSession} className="menu_button">
          <i className="fa-solid fa-plus"></i> New Session
        </STButton>
      </div>
    </div>
  );
};
