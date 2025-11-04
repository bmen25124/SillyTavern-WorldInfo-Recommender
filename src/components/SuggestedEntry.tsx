import { FC, useState, useMemo, useRef } from 'react';
import showdown from 'showdown';
import { STButton, Popup, STTextarea } from 'sillytavern-utils-lib/components/react';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { CompareEntryPopup } from './CompareEntryPopup.js';
import { EditEntryPopup, EditEntryPopupRef } from './EditEntryPopup.js';
import { ReviseSessionManager } from './ReviseSessionManager.js';
import { Session } from '../generate.js';
import { ExtensionSettings } from '../settings.js';
import { ReviseState } from '../revise-types.js';

const converter = new showdown.Converter();

export interface SuggestedEntryProps {
  initialWorldName: string;
  entry: WIEntry;
  allWorldNames: string[];
  existingEntry?: WIEntry;
  sessionRegexIds: Record<string, Partial<RegexScriptData>>;
  entriesGroupByWorldName: Record<string, WIEntry[]>;
  sessionForContext: Session;
  contextToSend: ExtensionSettings['contextToSend'];
  onAdd: (entry: WIEntry, initialWorldName: string, selectedTargetWorld: string) => void;
  onRemove: (entry: WIEntry, initialWorldName: string, isBlacklist: boolean) => void;
  onContinue: (continueFrom: {
    worldName: string;
    entry: WIEntry;
    prompt: string;
    mode: 'continue' | 'revise';
  }) => void;
  onUpdate: (
    worldName: string,
    originalEntry: WIEntry,
    updatedEntry: WIEntry,
    updatedRegexIds: Record<string, Partial<RegexScriptData>>,
  ) => void;
}

export const SuggestedEntry: FC<SuggestedEntryProps> = ({
  initialWorldName,
  entry,
  allWorldNames,
  existingEntry,
  sessionRegexIds,
  onAdd,
  onRemove,
  onContinue,
  onUpdate,
  entriesGroupByWorldName,
  sessionForContext,
  contextToSend,
}) => {
  const [selectedWorld, setSelectedWorld] = useState(() => {
    const initial = allWorldNames.find((w) => w === initialWorldName);
    return initial ?? allWorldNames[0] ?? '';
  });
  const [isAdding, setIsAdding] = useState(false);
  const [isContinuing, setIsContinuing] = useState(false);
  const [isRevising, setIsRevising] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isComparing, setIsComparing] = useState(false);
  const [isReviseSessionManagerOpen, setIsReviseSessionManagerOpen] = useState(false);
  const [updatePrompt, setUpdatePrompt] = useState('');

  const editPopupRef = useRef<EditEntryPopupRef>(null);

  const isUpdate = useMemo(
    () => !!entriesGroupByWorldName[selectedWorld]?.find((e) => e.uid === entry.uid && e.comment === entry.comment),
    [selectedWorld, entry.uid, entry.comment, entriesGroupByWorldName],
  );

  const isActing = isContinuing || isRevising;

  const handleAddClick = async () => {
    setIsAdding(true);
    await onAdd(entry, initialWorldName, selectedWorld);
  };

  const handleContinueClick = async () => {
    setIsContinuing(true);
    await onContinue({ worldName: initialWorldName, entry, prompt: updatePrompt, mode: 'continue' });
    setIsContinuing(false);
  };

  const handleReviseClick = async () => {
    setIsRevising(true);
    await onContinue({ worldName: initialWorldName, entry, prompt: updatePrompt, mode: 'revise' });
    setIsRevising(false);
  };

  const handleApplyReviseSession = (newState: ReviseState) => {
    // In an 'entry' session, newState is a WIEntry.
    onUpdate(initialWorldName, entry, newState as WIEntry, sessionRegexIds);
  };

  return (
    <>
      <div className="entry">
        <div className="menu">
          <select
            className="world-select text_pole"
            value={selectedWorld}
            onChange={(e) => setSelectedWorld(e.target.value)}
          >
            {allWorldNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <STButton onClick={handleAddClick} disabled={isAdding || isActing} className="menu_button interactable add">
            {isUpdate ? 'Update' : 'Add'}
          </STButton>
          <STButton
            onClick={() => setIsReviseSessionManagerOpen(true)}
            disabled={isActing}
            className="menu_button interactable"
            title="Revise this entry with a chat-based AI session."
          >
            <i className="fa-solid fa-comments"></i> Revise
          </STButton>
          <STButton
            onClick={handleContinueClick}
            disabled={isActing}
            className="menu_button interactable continue"
            title="Continue writing this entry. You can provide instructions in the textbox below."
          >
            {isContinuing ? '...' : 'Continue'}
          </STButton>
          <STButton
            onClick={handleReviseClick}
            disabled={isActing}
            className="menu_button interactable revise"
            title="Request changes to this entry. Provide instructions in the textbox below."
          >
            {isRevising ? '...' : 'Revise'}
          </STButton>
          <STButton onClick={() => setIsEditing(true)} disabled={isActing} className="menu_button interactable edit">
            Edit
          </STButton>
          {isUpdate && (
            <STButton
              onClick={() => setIsComparing(true)}
              disabled={isActing}
              className="menu_button interactable compare"
            >
              Compare
            </STButton>
          )}
          <STButton
            onClick={() => onRemove(entry, initialWorldName, true)}
            disabled={isActing}
            className="menu_button interactable blacklist"
          >
            Blacklist
          </STButton>
          <STButton
            onClick={() => onRemove(entry, initialWorldName, false)}
            disabled={isActing}
            className="menu_button interactable remove"
          >
            Remove
          </STButton>
        </div>
        <h4 className="comment">{entry.comment}</h4>
        <div className="key">{entry.key.join(', ')}</div>
        <p className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(entry.content ?? '') }}></p>
        <div className="continue-prompt-section" style={{ marginTop: '10px' }}>
          <STTextarea
            value={updatePrompt}
            onChange={(e) => setUpdatePrompt(e.target.value)}
            placeholder="Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'."
            rows={2}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      {isEditing && (
        <Popup
          type={POPUP_TYPE.CONFIRM}
          content={<EditEntryPopup ref={editPopupRef} entry={entry} initialRegexIds={sessionRegexIds} />}
          onComplete={(confirmed) => {
            if (confirmed && editPopupRef.current) {
              const { updatedEntry, updatedRegexIds } = editPopupRef.current.getFormData();
              onUpdate(initialWorldName, entry, updatedEntry, updatedRegexIds);
            }
            setIsEditing(false);
          }}
        />
      )}

      {isComparing && existingEntry && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={<CompareEntryPopup originalEntry={existingEntry} newEntry={entry} />}
          onComplete={() => setIsComparing(false)}
        />
      )}

      {isReviseSessionManagerOpen && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={
            <ReviseSessionManager
              target={{ type: 'entry', worldName: initialWorldName, entry: entry }}
              initialState={entry}
              onClose={() => setIsReviseSessionManagerOpen(false)}
              onApply={handleApplyReviseSession}
              sessionForContext={sessionForContext}
              allEntries={entriesGroupByWorldName}
              contextToSend={contextToSend}
            />
          }
          onComplete={() => setIsReviseSessionManagerOpen(false)}
          options={{ wide: true, large: true }}
        />
      )}
    </>
  );
};
