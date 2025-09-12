import { FC, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import {
  STButton,
  STConnectionProfileSelect,
  STFancyDropdown,
  STPresetSelect,
  STTextarea,
  PresetItem,
  DropdownItem as FancyDropdownItem,
  Popup,
} from 'sillytavern-utils-lib/components';
import { BuildPromptOptions, getActiveWorldInfo } from 'sillytavern-utils-lib';
import {
  groups,
  selected_group,
  st_createWorldInfoEntry,
  st_echo,
  st_getCharaFilename,
  this_chid,
  world_names,
} from 'sillytavern-utils-lib/config';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

import { runWorldInfoRecommendation, Session } from '../generate.js';
import { ExtensionSettings, settingsManager } from '../settings.js';
import { Character } from 'sillytavern-utils-lib/types';
import { RegexScriptData } from 'sillytavern-utils-lib/types/regex';
import { SuggestedEntry } from './SuggestedEntry.js';
// @ts-ignore
import { Handlebars } from '../../../../../lib.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';
import { SelectEntriesPopup, SelectEntriesPopupRef } from './SelectEntriesPopup.js';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { t } from '../i18n.js';

if (!Handlebars.helpers['join']) {
  Handlebars.registerHelper('join', function (array: any, separator: any) {
    return array.join(separator);
  });
}

const globalContext = SillyTavern.getContext();

// Helper to get current character/group avatar filename
const getAvatar = () => (this_chid ? st_getCharaFilename(this_chid) : selected_group);

/**
 * A React component for the main World Info Recommender popup UI.
 * This component replaces the vanilla TS popup script.
 */
export const MainPopup: FC = () => {
  // --- State Management ---
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  const [session, setSession] = useState<Session>({
    suggestedEntries: {},
    blackListedEntries: [],
    selectedWorldNames: [],
    selectedEntryUids: {},
    regexIds: {},
  });
  const [allWorldNames, setAllWorldNames] = useState<string[]>([]);
  const [entriesGroupByWorldName, setEntriesGroupByWorldName] = useState<Record<string, WIEntry[]>>({});
  const [groupMembers, setGroupMembers] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSelectingEntries, setIsSelectingEntries] = useState(false);

  const selectEntriesPopupRef = useRef<SelectEntriesPopupRef>(null);

  const avatarKey = useMemo(() => getAvatar() ?? '_global', [this_chid, selected_group]);

  // --- Data Loading Effect ---
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      setEntriesGroupByWorldName({});
      setAllWorldNames([]);
      setGroupMembers([]);

      const avatar = getAvatar();
      const key = `worldInfoRecommend_${avatarKey}`;

      // Load session from localStorage
      const savedSession: Partial<Session> = JSON.parse(localStorage.getItem(key) ?? '{}');
      const initialSession: Session = {
        suggestedEntries: savedSession.suggestedEntries ?? {},
        blackListedEntries: savedSession.blackListedEntries ?? [],
        selectedWorldNames: savedSession.selectedWorldNames ?? [],
        selectedEntryUids: savedSession.selectedEntryUids ?? {},
        regexIds: savedSession.regexIds ?? {},
      };

      // Load World Info
      let loadedEntries: Record<string, WIEntry[]> = {};
      if (avatar) {
        if (selected_group) {
          const groupWorldInfo = await getActiveWorldInfo(['chat', 'persona', 'global']);
          if (groupWorldInfo) loadedEntries = groupWorldInfo;

          const group = groups.find((g: any) => g.id === selected_group);
          if (group) {
            for (const member of group.members) {
              const index = globalContext.characters.findIndex((c: Character) => c.avatar === member);
              if (index !== -1) {
                const worldInfo = await getActiveWorldInfo(['character'], index);
                if (worldInfo) loadedEntries = { ...loadedEntries, ...worldInfo };
              }
            }
          }
        } else {
          loadedEntries = await getActiveWorldInfo(['all'], this_chid);
        }
      } else {
        for (const worldName of world_names) {
          const worldInfo = await globalContext.loadWorldInfo(worldName);
          if (worldInfo) loadedEntries[worldName] = Object.values(worldInfo.entries);
        }
      }
      setEntriesGroupByWorldName(loadedEntries);
      const loadedWorldNames = Object.keys(loadedEntries);
      setAllWorldNames(loadedWorldNames);

      // Sync session's selected worlds with available worlds
      if (initialSession.selectedWorldNames.length === 0 && avatarKey !== '_global') {
        initialSession.selectedWorldNames = [...loadedWorldNames];
      } else {
        initialSession.selectedWorldNames = initialSession.selectedWorldNames.filter((name) =>
          loadedWorldNames.includes(name),
        );
      }

      // Sync session's selected entry UIDs with available entries
      const validEntryUids: Record<string, number[]> = {};
      if (initialSession.selectedEntryUids) {
        for (const [worldName, uids] of Object.entries(initialSession.selectedEntryUids)) {
          if (loadedEntries[worldName]) {
            const worldEntryUids = new Set(loadedEntries[worldName].map((e) => e.uid));
            const validUids = uids.filter((uid) => worldEntryUids.has(uid));
            if (validUids.length > 0) {
              validEntryUids[worldName] = validUids;
            }
          }
        }
      }
      initialSession.selectedEntryUids = validEntryUids;
      setSession(initialSession); // Set the fully loaded and synced session

      // Load group members for char card selection if in group chat
      if (selected_group) {
        const group = groups.find((g: any) => g.id === selected_group);
        if (group?.generation_mode === 0) {
          const members = group.members
            .map((memberAvatar: string) => globalContext.characters.find((c: Character) => c.avatar === memberAvatar))
            .filter((c?: Character): c is Character => !!c);
          setGroupMembers(members);
        }
      }

      setIsLoading(false);
    };

    loadData();
  }, [avatarKey]);

  // --- Session Saving Effect ---
  useEffect(() => {
    if (isLoading) return;
    const key = `worldInfoRecommend_${avatarKey}`;
    localStorage.setItem(key, JSON.stringify(session));
  }, [session, avatarKey, isLoading]);

  // --- Generic Handlers ---
  const updateSetting = <K extends keyof ExtensionSettings>(key: K, value: ExtensionSettings[K]) => {
    // Direct mutation + force update
    settingsManager.getSettings()[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };

  const updateContextToSend = <K extends keyof ExtensionSettings['contextToSend']>(
    key: K,
    value: ExtensionSettings['contextToSend'][K],
  ) => {
    // Direct mutation + force update
    settingsManager.getSettings().contextToSend[key] = value;
    settingsManager.saveSettings();
    forceUpdate();
  };

  // --- Memoized Derived Data for UI ---
  const promptPresetItems = useMemo(
    (): PresetItem[] => Object.keys(settings.promptPresets).map((key) => ({ value: key, label: key })),
    [settings.promptPresets],
  );

  const worldInfoDropdownItems = useMemo(
    (): FancyDropdownItem[] => allWorldNames.map((name) => ({ value: name, label: name })),
    [allWorldNames],
  );

  const totalSelectedEntries = useMemo(
    () => Object.values(session.selectedEntryUids).reduce((sum, uids) => sum + uids.length, 0),
    [session.selectedEntryUids],
  );

  // --- Core Logic Callbacks ---
  const addEntry = useCallback(
    async (entry: WIEntry, selectedWorldName: string, skipSave: boolean = false): Promise<'added' | 'updated'> => {
      const worldInfoCopy = structuredClone(entriesGroupByWorldName);
      if (!worldInfoCopy[selectedWorldName]) {
        worldInfoCopy[selectedWorldName] = [];
      }

      const existingEntry = worldInfoCopy[selectedWorldName].find((e) => e.uid === entry.uid);
      const isUpdate = !!existingEntry;
      let targetEntry: WIEntry;

      if (isUpdate) {
        targetEntry = existingEntry!;
      } else {
        const stFormat = { entries: Object.fromEntries(worldInfoCopy[selectedWorldName].map((e) => [e.uid, e])) };
        const newEntry = st_createWorldInfoEntry(selectedWorldName, stFormat);
        if (!newEntry) throw new Error('Failed to create new World Info entry.');
        targetEntry = newEntry;
        worldInfoCopy[selectedWorldName].push(targetEntry);
      }

      Object.assign(targetEntry, { key: entry.key, content: entry.content, comment: entry.comment });
      setEntriesGroupByWorldName(worldInfoCopy);

      if (!skipSave) {
        const finalFormat = { entries: Object.fromEntries(worldInfoCopy[selectedWorldName].map((e) => [e.uid, e])) };
        await globalContext.saveWorldInfo(selectedWorldName, finalFormat);
        globalContext.reloadWorldInfoEditor(selectedWorldName, true);
      }

      return isUpdate ? 'updated' : 'added';
    },
    [entriesGroupByWorldName],
  );

  const handleGeneration = useCallback(
    async (continueFrom?: { worldName: string; entry: WIEntry; prompt: string; mode: 'continue' | 'revise' }) => {
      if (!settings.profileId) return st_echo('warning', t('pleaseSelectProfile'));

      // Determine the prompt: use the specific one from the entry if provided, otherwise use the global one.
      const userPrompt = continueFrom?.prompt ?? settings.promptPresets[settings.promptPreset].content;

      // For a global generation, the prompt must not be empty. For entry-specific actions, it can be.
      if (!continueFrom && !userPrompt) {
        return st_echo('warning', t('pleaseEnterPrompt'));
      }

      setIsGenerating(true);
      try {
        const profile = globalContext.extensionSettings.connectionManager?.profiles?.find(
          (p) => p.id === settings.profileId,
        );
        if (!profile) throw new Error('Connection profile not found.');

        const avatar = getAvatar();
        const buildPromptOptions: BuildPromptOptions = {
          presetName: profile.preset,
          contextName: profile.context,
          instructName: profile.instruct,
          syspromptName: profile.sysprompt,
          ignoreCharacterFields: !settings.contextToSend.charCard,
          ignoreWorldInfo: true,
          ignoreAuthorNote: !settings.contextToSend.authorNote,
          maxContext:
            settings.maxContextType === 'custom'
              ? settings.maxContextValue
              : settings.maxContextType === 'profile'
                ? 'preset'
                : 'active',
          includeNames: !!selected_group,
        };

        if (!avatar) {
          buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
        } else {
          switch (settings.contextToSend.messages.type) {
            case 'none':
              buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case 'first':
              buildPromptOptions.messageIndexesBetween = { start: 0, end: settings.contextToSend.messages.first ?? 10 };
              break;
            case 'last': {
              const lastCount = settings.contextToSend.messages.last ?? 10;
              const chatLength = globalContext.chat?.length ?? 0;
              buildPromptOptions.messageIndexesBetween = {
                end: Math.max(0, chatLength - 1),
                start: Math.max(0, chatLength - lastCount),
              };
              break;
            }
            case 'range':
              if (settings.contextToSend.messages.range)
                buildPromptOptions.messageIndexesBetween = settings.contextToSend.messages.range;
              break;
          }
        }

        const promptSettings = structuredClone(settings.prompts);
        if (!settings.contextToSend.stDescription) delete (promptSettings as any).stDescription;
        if (!settings.contextToSend.worldInfo || session.selectedWorldNames.length === 0)
          delete (promptSettings as any).currentLorebooks;
        const anySuggestedEntries = Object.values(session.suggestedEntries).some((e) => e.length > 0);
        if (!settings.contextToSend.suggestedEntries || !anySuggestedEntries)
          delete (promptSettings as any).suggestedLorebooks;
        if (session.blackListedEntries.length === 0) delete (promptSettings as any).blackListedEntries;

        const continueFromPayload = continueFrom
          ? { worldName: continueFrom.worldName, entry: continueFrom.entry, mode: continueFrom.mode }
          : undefined;

        const resultingEntries = await runWorldInfoRecommendation({
          profileId: settings.profileId,
          userPrompt: userPrompt,
          buildPromptOptions,
          session,
          entriesGroupByWorldName,
          promptSettings,
          mainContextList: settings.mainContextTemplatePresets[settings.mainContextTemplatePreset].prompts
            .filter((p) => p.enabled)
            .map((p) => ({ promptName: p.promptName, role: p.role })),
          maxResponseToken: settings.maxResponseToken,
          continueFrom: continueFromPayload,
        });

        if (Object.keys(resultingEntries).length > 0) {
          if (continueFrom) {
            setSession((prev) => {
              const newSuggested = structuredClone(prev.suggestedEntries);
              const worldName = continueFrom.worldName;
              const updatedEntry = resultingEntries[worldName]?.[0];

              if (newSuggested[worldName] && updatedEntry) {
                const entryIndex = newSuggested[worldName].findIndex(
                  (e) => e.uid === continueFrom.entry.uid && e.comment === continueFrom.entry.comment,
                );

                if (entryIndex !== -1) {
                  // Replace the old entry with the updated one
                  newSuggested[worldName][entryIndex] = updatedEntry;
                }
              }
              return { ...prev, suggestedEntries: newSuggested };
            });
          } else {
            setSession((prev) => {
              const newSuggested = structuredClone(prev.suggestedEntries);
              for (const [worldName, entries] of Object.entries(resultingEntries)) {
                if (!newSuggested[worldName]) newSuggested[worldName] = [];
                // Avoid adding duplicates
                for (const entry of entries) {
                  if (!newSuggested[worldName].some((e) => e.uid === entry.uid && e.comment === entry.comment)) {
                    newSuggested[worldName].push(entry);
                  }
                }
              }
              return { ...prev, suggestedEntries: newSuggested };
            });
          }
        } else {
          st_echo('warning', t('noResultsFromAI'));
        }
      } catch (error: any) {
        console.error(error);
        st_echo('error', error instanceof Error ? error.message : String(error));
      } finally {
        setIsGenerating(false);
      }
    },
    [settings, session, entriesGroupByWorldName],
  );

  // --- UI Action Handlers ---
  const handleAddSingleEntry = useCallback(
    async (entry: WIEntry, worldName: string, selectedTargetWorld: string) => {
      try {
        const status = await addEntry(entry, selectedTargetWorld);
        st_echo('success', status === 'added' ? t('entryAdded') : t('entryUpdated'));
        // Remove from suggested list
        setSession((prev) => {
          const newSuggested = { ...prev.suggestedEntries };
          if (newSuggested[worldName]) {
            newSuggested[worldName] = newSuggested[worldName].filter(
              (e) => !(e.uid === entry.uid && e.comment === entry.comment),
            );
          }
          return { ...prev, suggestedEntries: newSuggested };
        });
      } catch (error: any) {
        console.error(error);
        st_echo('error', t('failedToAddEntry', { message: error.message }));
      }
    },
    [addEntry],
  );

  const handleAddAll = async () => {
    const totalEntries = Object.values(session.suggestedEntries).flat().length;
    if (totalEntries === 0) return st_echo('warning', 'No entries to add.');

    const confirm = await globalContext.Popup.show.confirm(
      t('confirmAddAllTitle'),
      t('confirmAddAllText', { count: totalEntries }),
    );
    if (!confirm) return;

    setIsGenerating(true);
    let addedCount = 0;
    let updatedCount = 0;
    const modifiedWorlds = new Set<string>();
    const entriesToAdd: { worldName: string; entry: WIEntry }[] = [];

    Object.entries(session.suggestedEntries).forEach(([worldName, entries]) => {
      entries.forEach((entry) => {
        const targetWorldName = allWorldNames.includes(worldName) ? worldName : (allWorldNames[0] ?? '');
        if (targetWorldName) entriesToAdd.push({ worldName: targetWorldName, entry });
      });
    });

    for (const { worldName, entry } of entriesToAdd) {
      try {
        const status = await addEntry(entry, worldName, true);
        if (status === 'added') addedCount++;
        else updatedCount++;
        modifiedWorlds.add(worldName);
      } catch (error) {
        st_echo('error', t('failedToProcessEntry', { comment: entry.comment ?? '' }));
      }
    }

    for (const worldName of modifiedWorlds) {
      try {
        const finalFormat = { entries: Object.fromEntries(entriesGroupByWorldName[worldName].map((e) => [e.uid, e])) };
        await globalContext.saveWorldInfo(worldName, finalFormat);
        globalContext.reloadWorldInfoEditor(worldName, true);
      } catch (error) {
        st_echo('error', t('failedToSaveWorld', { worldName }));
      }
    }

    setSession((prev) => ({ ...prev, suggestedEntries: {} }));
    st_echo('success', t('processedSummary', { added: addedCount, updated: updatedCount }));
    setIsGenerating(false);
  };

  const handleReset = async () => {
    const confirm = await globalContext.Popup.show.confirm(
      t('confirmResetTitle'),
      t('confirmResetText'),
    );
    if (confirm) {
      setSession((prev) => ({
        ...prev,
        suggestedEntries: {},
        blackListedEntries: [],
        selectedWorldNames: getAvatar() ? [...allWorldNames] : [],
        selectedEntryUids: {},
      }));
      st_echo('success', t('resetSuccessful'));
    }
  };

  const handleRemoveEntry = (entry: WIEntry, worldName: string, isBlacklist: boolean) => {
    setSession((prev) => {
      const newSession = { ...prev };
      if (isBlacklist) {
        newSession.blackListedEntries = [...newSession.blackListedEntries, `${worldName} (${entry.comment})`];
      }
      const newSuggested = { ...newSession.suggestedEntries };
      if (newSuggested[worldName]) {
        newSuggested[worldName] = newSuggested[worldName].filter(
          (e) => !(e.uid === entry.uid && e.comment === entry.comment),
        );
      }
      newSession.suggestedEntries = newSuggested;
      return newSession;
    });
  };

  const handleUpdateEntry = (
    worldName: string,
    originalEntry: WIEntry, // <-- Add this parameter
    updatedEntry: WIEntry,
    updatedRegexIds: Record<string, Partial<RegexScriptData>>,
  ) => {
    setSession((prev) => {
      const newSuggested = { ...prev.suggestedEntries };
      if (newSuggested[worldName]) {
        // Use the ORIGINAL entry's comment and uid to find the correct item
        const entryIndex = newSuggested[worldName].findIndex(
          (e) => e.uid === originalEntry.uid && e.comment === originalEntry.comment,
        );

        if (entryIndex !== -1) {
          // If found, replace it with the updated entry
          newSuggested[worldName][entryIndex] = updatedEntry;
        }
      }
      return { ...prev, suggestedEntries: newSuggested, regexIds: updatedRegexIds };
    });
  };

  const entriesForSelectionPopup = useMemo(() => {
    const result: Record<string, WIEntry[]> = {};
    session.selectedWorldNames.forEach((worldName) => {
      if (entriesGroupByWorldName[worldName]) {
        result[worldName] = entriesGroupByWorldName[worldName];
      }
    });
    return result;
  }, [session.selectedWorldNames, entriesGroupByWorldName]);

  // --- Render ---
  if (isLoading) {
    return <div>{t('loading')}</div>;
  }

  const suggestedEntriesList = Object.entries(session.suggestedEntries).flatMap(([worldName, entries]) =>
    entries.map((entry) => ({ worldName, entry })),
  );

  return (
    <>
      <div id="worldInfoRecommenderPopup">
        <h2>{t('appTitle')}</h2>
        <div className="container">
          {/* Left Column */}
          <div className="column">
            <div className="card">
              <h3>{t('connectionProfile')}</h3>
              <STConnectionProfileSelect
                initialSelectedProfileId={settings.profileId}
                // @ts-ignore
                onChange={(profile) => updateSetting('profileId', profile?.id)}
              />
            </div>

            <div className="card">
              <h3>{t('contextToSend')}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.stDescription}
                    onChange={(e) => updateContextToSend('stDescription', e.target.checked)}
                  />
                  {t('stDescription')}
                </label>
                {/* Message Options */}
                {avatarKey != '_global' && (
                  <div className="message-options">
                    <h4>{t('messagesToInclude')}</h4>
                    <select
                      className="text_pole"
                      value={settings.contextToSend.messages.type}
                      onChange={(e) =>
                        updateContextToSend('messages', {
                          ...settings.contextToSend.messages,
                          type: e.target.value as any,
                        })
                      }
                    >
                      <option value="none">{t('none')}</option>
                      <option value="all">{t('allMessages')}</option>
                      <option value="first">{t('firstXMessages')}</option>
                      <option value="last">{t('lastXMessages')}</option>
                      <option value="range">{t('range')}</option>
                    </select>

                    {settings.contextToSend.messages.type === 'first' && (
                      <div style={{ marginTop: '10px' }}>
                        <label>
                          {t('first')}{' '}
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            value={settings.contextToSend.messages.first ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                first: parseInt(e.target.value) || 10,
                              })
                            }
                          />{' '}
                          {t('messages')}
                        </label>
                      </div>
                    )}
                    {settings.contextToSend.messages.type === 'last' && (
                      <div style={{ marginTop: '10px' }}>
                        <label>
                          {t('last')}{' '}
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            value={settings.contextToSend.messages.last ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                last: parseInt(e.target.value) || 10,
                              })
                            }
                          />{' '}
                          {t('messages')}
                        </label>
                      </div>
                    )}
                    {settings.contextToSend.messages.type === 'range' && (
                      <div style={{ marginTop: '10px' }}>
                        <label>
                          {t('rangeColon')}{' '}
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="0"
                            placeholder="Start"
                            value={settings.contextToSend.messages.range?.start ?? 0}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                range: {
                                  ...settings.contextToSend.messages.range!,
                                  start: parseInt(e.target.value) || 0,
                                },
                              })
                            }
                          />{' '}
                          {t('to')}{' '}
                          <input
                            type="number"
                            className="text_pole small message-input"
                            min="1"
                            placeholder="End"
                            value={settings.contextToSend.messages.range?.end ?? 10}
                            onChange={(e) =>
                              updateContextToSend('messages', {
                                ...settings.contextToSend.messages,
                                range: {
                                  ...settings.contextToSend.messages.range!,
                                  end: parseInt(e.target.value) || 10,
                                },
                              })
                            }
                          />
                        </label>
                      </div>
                    )}
                  </div>
                )}

                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.charCard}
                    onChange={(e) => updateContextToSend('charCard', e.target.checked)}
                  />
                  {t('charCard')}
                </label>
                {groupMembers.length > 0 && (
                  <div>
                    <h4>{t('selectCharacter')}</h4>
                    <select className="text_pole" title={t('selectCharacterTitle')}>
                      {groupMembers.map((member) => (
                        <option key={member.avatar} value={member.avatar}>
                          {member.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.authorNote}
                    onChange={(e) => updateContextToSend('authorNote', e.target.checked)}
                  />{' '}
                  {t('authorNote')}
                </label>
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.worldInfo}
                    onChange={(e) => updateContextToSend('worldInfo', e.target.checked)}
                  />{' '}
                  {t('worldInfo')}
                </label>
                <div>
                  <h4>{t('lorebooksToInclude')}</h4>
                  <STFancyDropdown
                    items={worldInfoDropdownItems}
                    value={session.selectedWorldNames}
                    onChange={(newValues) => {
                      setSession((prev) => {
                        const newSelectedEntryUids = { ...prev.selectedEntryUids };
                        const removedWorlds = prev.selectedWorldNames.filter((w) => !newValues.includes(w));
                        removedWorlds.forEach((w) => delete newSelectedEntryUids[w]);
                        return { ...prev, selectedWorldNames: newValues, selectedEntryUids: newSelectedEntryUids };
                      });
                    }}
                    multiple
                    enableSearch
                  />
                </div>
                {session.selectedWorldNames.length > 0 && (
                  <div className="entry-selection-control">
                    <STButton
                      className="menu_button"
                      onClick={() => setIsSelectingEntries(true)}
                      title={t('selectEntriesTitle')}
                    >
                      <i className="fa-solid fa-list-check"></i>
                      {t('selectEntries')}
                    </STButton>
                    <span>
                      {totalSelectedEntries > 0 ? `${totalSelectedEntries} selected` : 'All entries included'}
                    </span>
                  </div>
                )}
                <label className="checkbox_label">
                  <input
                    type="checkbox"
                    checked={settings.contextToSend.suggestedEntries}
                    onChange={(e) => updateContextToSend('suggestedEntries', e.target.checked)}
                  />{' '}
                  {t('existingSuggestions')}
                </label>
              </div>
            </div>

            <div className="card">
              <label>
                {t('maxContext')}
                <select
                  className="text_pole"
                  title={t('maxContext')}
                  value={settings.maxContextType}
                  onChange={(e) => updateSetting('maxContextType', e.target.value as any)}
                >
                  <option value="profile">{t('maxContextProfile')}</option>
                  <option value="sampler">{t('maxContextSampler')}</option>
                  <option value="custom">{t('maxContextCustom')}</option>
                </select>
              </label>

              {settings.maxContextType === 'custom' && (
                <label style={{ marginTop: '10px' }}>
                  <input
                    type="number"
                    className="text_pole"
                    min="1"
                    step="1"
                    placeholder={t('maxResponseTokens')}
                    value={settings.maxContextValue}
                    onChange={(e) => updateSetting('maxContextValue', parseInt(e.target.value) || 2048)}
                  />
                </label>
              )}

              <label style={{ display: 'block', marginTop: '10px' }}>
                {t('maxResponseTokens')}
                <input
                  type="number"
                  className="text_pole"
                  min="1"
                  step="1"
                  placeholder={t('maxResponseTokens')}
                  value={settings.maxResponseToken}
                  onChange={(e) => updateSetting('maxResponseToken', parseInt(e.target.value) || 256)}
                />
              </label>
            </div>

            <div className="card">
              <h3>{t('yourPrompt')}</h3>
              <STPresetSelect
                label={t('promptPreset')}
                items={promptPresetItems}
                value={settings.promptPreset}
                readOnlyValues={['default']}
                onChange={(newValue) => updateSetting('promptPreset', newValue ?? 'default')}
                onItemsChange={(newItems) => {
                  const newPresets = newItems.reduce(
                    (acc, item) => {
                      acc[item.value] = settings.promptPresets[item.value] ?? { content: '' };
                      return acc;
                    },
                    {} as Record<string, { content: string }>,
                  );
                  updateSetting('promptPresets', newPresets);
                }}
                enableCreate
                enableRename
                enableDelete
              />
              <STTextarea
                value={settings.promptPresets[settings.promptPreset]?.content ?? ''}
                onChange={(e) => {
                  const newPresets = { ...settings.promptPresets };
                  if (newPresets[settings.promptPreset]) {
                    newPresets[settings.promptPreset].content = e.target.value;
                    updateSetting('promptPresets', newPresets);
                  }
                }}
                placeholder={t('promptPlaceholder')}
                rows={4}
                style={{ marginTop: '5px', width: '100%' }}
              />
              <STButton
                onClick={() => handleGeneration()}
                disabled={isGenerating}
                className="menu_button interactable"
                style={{ marginTop: '5px' }}
              >
                {isGenerating ? t('generating') : t('sendPrompt')}
              </STButton>
            </div>
          </div>

          {/* Right Column */}
          <div className="wide-column">
            <div className="card">
              <h3>{t('suggestedEntries')}</h3>
              <div className="actions">
                <STButton
                  onClick={handleAddAll}
                  disabled={isGenerating || suggestedEntriesList.length === 0}
                  className="menu_button interactable"
                >
                  {t('addAll')}
                </STButton>
                <STButton onClick={handleReset} disabled={isGenerating} className="menu_button interactable">
                  {t('reset')}
                </STButton>
              </div>
              <div>
                {suggestedEntriesList.length === 0 && <p>{t('noSuggestions')}</p>}
                {suggestedEntriesList.map(({ worldName, entry }) => (
                  <SuggestedEntry
                    key={`${worldName}-${entry.uid}-${entry.comment}`}
                    initialWorldName={worldName}
                    entry={entry}
                    allWorldNames={allWorldNames}
                    existingEntry={entriesGroupByWorldName[worldName]?.find((e) => e.uid === entry.uid)}
                    sessionRegexIds={session.regexIds}
                    onAdd={handleAddSingleEntry}
                    onRemove={handleRemoveEntry}
                    onContinue={handleGeneration}
                    onUpdate={handleUpdateEntry}
                    entriesGroupByWorldName={entriesGroupByWorldName}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSelectingEntries && (
        <Popup
          type={POPUP_TYPE.CONFIRM}
          content={
            <SelectEntriesPopup
              ref={selectEntriesPopupRef}
              entriesByWorldName={entriesForSelectionPopup}
              initialSelectedUids={session.selectedEntryUids}
            />
          }
          onComplete={(confirmed) => {
            if (confirmed && selectEntriesPopupRef.current) {
              const newSelection = selectEntriesPopupRef.current.getSelection();
              setSession((prev) => ({ ...prev, selectedEntryUids: newSelection }));
            }
            setIsSelectingEntries(false);
          }}
          options={{ wide: true }}
        />
      )}
    </>
  );
};
