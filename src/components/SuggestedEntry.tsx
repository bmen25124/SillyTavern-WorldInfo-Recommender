import { FC, useState, useMemo, useRef } from 'react';
import showdown from 'showdown';
import { STButton, Popup, STTextarea } from 'sillytavern-utils-lib/components';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { CompareEntryPopup } from './CompareEntryPopup.js';
import { EditEntryPopup, EditEntryPopupRef } from './EditEntryPopup.js';
import { t } from '../i18n.js';

const converter = new showdown.Converter();

export interface SuggestedEntryProps {
  initialWorldName: string;
  entry: WIEntry;
  allWorldNames: string[];
  existingEntry?: WIEntry;
  sessionRegexIds: Record<string, Partial<RegexScriptData>>;
  entriesGroupByWorldName: Record<string, WIEntry[]>;
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
            {isUpdate ? t('update') : t('add')}
          </STButton>
          <STButton
            onClick={handleContinueClick}
            disabled={isActing}
            className="menu_button interactable continue"
            title={t('continueTitle')}
          >
            {isContinuing ? '...' : t('continue')}
          </STButton>
          <STButton
            onClick={handleReviseClick}
            disabled={isActing}
            className="menu_button interactable revise"
            title={t('reviseTitle')}
          >
            {isRevising ? '...' : t('revise')}
          </STButton>
          <STButton onClick={() => setIsEditing(true)} disabled={isActing} className="menu_button interactable edit">
            {t('edit')}
          </STButton>
          {isUpdate && (
            <STButton
              onClick={() => setIsComparing(true)}
              disabled={isActing}
              className="menu_button interactable compare"
            >
              {t('compare')}
            </STButton>
          )}
          <STButton
            onClick={() => onRemove(entry, initialWorldName, true)}
            disabled={isActing}
            className="menu_button interactable blacklist"
          >
            {t('blacklist')}
          </STButton>
          <STButton
            onClick={() => onRemove(entry, initialWorldName, false)}
            disabled={isActing}
            className="menu_button interactable remove"
          >
            {t('remove')}
          </STButton>
        </div>
        <h4 className="comment">{entry.comment}</h4>
        <div className="key">{entry.key.join(', ')}</div>
        <p className="content" dangerouslySetInnerHTML={{ __html: converter.makeHtml(entry.content ?? '') }}></p>
        <div className="continue-prompt-section" style={{ marginTop: '10px' }}>
          <STTextarea
            value={updatePrompt}
            onChange={(e) => setUpdatePrompt(e.target.value)}
            placeholder={t('continuePlaceholder')}
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
