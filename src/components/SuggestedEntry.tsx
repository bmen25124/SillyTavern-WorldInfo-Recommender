import { FC, useState, useMemo, useRef } from 'react';
import showdown from 'showdown';
import { STButton, Popup, STTextarea } from 'sillytavern-utils-lib/components';
import { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { CompareEntryPopup } from './CompareEntryPopup.js';
import { EditEntryPopup, EditEntryPopupRef } from './EditEntryPopup.js';
import { ExtendedWIEntry, POSITION_OPTIONS, ROLE_AT_DEPTH } from '../types.js';

const converter = new showdown.Converter();

const getPositionLabel = (pos?: number) =>
  POSITION_OPTIONS.find((p) => p.value === pos)?.label ?? 'N/A';

const getRoleLabel = (role?: number | null) =>
  ROLE_AT_DEPTH.find((r) => r.value === role)?.label ?? 'N/A';

export interface SuggestedEntryProps {
  initialWorldName: string;
  entry: ExtendedWIEntry;
  allWorldNames: string[];
  existingEntry?: ExtendedWIEntry;
  sessionRegexIds: Record<string, Partial<RegexScriptData>>;
  entriesGroupByWorldName: Record<string, ExtendedWIEntry[]>;
  onAdd: (entry: ExtendedWIEntry, initialWorldName: string, selectedTargetWorld: string) => void;
  onRemove: (entry: ExtendedWIEntry, initialWorldName: string, isBlacklist: boolean) => void;
  onContinue: (continueFrom: {
    worldName: string;
    entry: ExtendedWIEntry;
    prompt: string;
    mode: 'continue' | 'revise';
  }) => void;
  onUpdate: (
    worldName: string,
    originalEntry: ExtendedWIEntry,
    updatedEntry: ExtendedWIEntry,
    updatedRegexIds: Record<string, Partial<RegexScriptData>>,
  ) => void;
}

/**
 * A component that displays a single suggested World Info entry and provides actions
 * like adding, editing, comparing, or removing it.
 */
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
  const [updatePrompt, setUpdatePrompt] = useState('');

  // Create a ref to get access to the EditEntryPopup's imperative methods.
  const editPopupRef = useRef<EditEntryPopupRef>(null);

  const isUpdate = useMemo(
    () =>
      !!entriesGroupByWorldName[selectedWorld]?.some(
        (e) =>
          e.uid === entry.uid ||
          e.comment === entry.comment ||
          e.key?.join('\u0000') === entry.key?.join('\u0000') ||
          e.content === entry.content,
      ),
    [
      selectedWorld,
      entriesGroupByWorldName,
      entry.uid,
      entry.comment,
      entry.key,
      entry.content,
    ],
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
        <div className="metadata" style={{ fontSize: '0.9em', color: '#666' }}>
          {entry.position !== undefined && (
            <div>Position: {getPositionLabel(entry.position)}</div>
          )}
          {entry.depth !== undefined && entry.depth !== null && (
            <div>Depth: {entry.depth}</div>
          )}
          {entry.roleAtDepth !== undefined && entry.roleAtDepth !== null && (
            <div>Role: {getRoleLabel(entry.roleAtDepth)}</div>
          )}
        </div>
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

      {/* Conditionally render the Edit Popup */}
      {isEditing && (
        <Popup
          type={POPUP_TYPE.CONFIRM}
          content={<EditEntryPopup ref={editPopupRef} entry={entry} initialRegexIds={sessionRegexIds} />}
          onComplete={(confirmed) => {
            // This callback runs when the user clicks "OK" or "Cancel".
            if (confirmed && editPopupRef.current) {
              // If confirmed, use the ref to call the child's exposed function.
              const { updatedEntry, updatedRegexIds } = editPopupRef.current.getFormData();
              // Pass the retrieved data up to the MainPopup component.
              onUpdate(initialWorldName, entry, updatedEntry, updatedRegexIds);
            }
            // Always close the popup, regardless of the action.
            setIsEditing(false);
          }}
        />
      )}

      {/* Conditionally render the Compare Popup */}
      {isComparing && existingEntry && (
        <Popup
          type={POPUP_TYPE.DISPLAY}
          content={<CompareEntryPopup originalEntry={existingEntry} newEntry={entry} />}
          onComplete={() => setIsComparing(false)}
        />
      )}
    </>
  );
};
