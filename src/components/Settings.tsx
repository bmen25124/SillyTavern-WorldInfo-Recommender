import React, { FC, useState, useMemo, useCallback } from 'react';
import { st_echo } from 'sillytavern-utils-lib/config';
import {
  PresetItem,
  SortableListItemData,
  STButton,
  STPresetSelect,
  STSortableList,
  STTextarea,
} from 'sillytavern-utils-lib/components/react';

import {
  convertToVariableName,
  DEFAULT_PROMPT_CONTENTS,
  DEFAULT_SETTINGS,
  ExtensionSettings,
  MainContextPromptBlock,
  MainContextTemplatePreset,
  MessageRole,
  PromptSetting,
  settingsManager,
  SYSTEM_PROMPT_KEYS,
} from '../settings.js';
import { useForceUpdate } from '../hooks/useForceUpdate.js';

const globalContext = SillyTavern.getContext();

/**
 * A React component to manage the World Info Recommender settings UI.
 * This component replaces the vanilla TS setup script.
 */
export const WorldInfoRecommenderSettings: FC = () => {
  // --- State Management ---
  const forceUpdate = useForceUpdate();
  const settings = settingsManager.getSettings();
  const [selectedSystemPrompt, setSelectedSystemPrompt] = useState<string>(SYSTEM_PROMPT_KEYS[0]);

  // Centralized function to update state and persist settings
  const updateAndRefresh = useCallback(
    (updater: (currentSettings: ExtensionSettings) => void) => {
      const currentSettings = settingsManager.getSettings();
      updater(currentSettings);
      settingsManager.saveSettings();
      forceUpdate();
    },
    [forceUpdate],
  );

  // --- Derived Data for UI (Memoized for performance) ---
  const mainContextPresetItems = useMemo(
    (): PresetItem[] =>
      Object.keys(settings.mainContextTemplatePresets).map((key) => ({
        value: key,
        label: key,
      })),
    [settings.mainContextTemplatePresets],
  );

  const systemPromptItems = useMemo(
    (): PresetItem[] =>
      Object.keys(settings.prompts).map((key) => {
        const prompt = settings.prompts[key as keyof typeof settings.prompts];
        return {
          value: key,
          label: prompt ? `${prompt.label} (${key})` : key,
        };
      }),
    [settings.prompts],
  );

  const mainContextListItems = useMemo((): SortableListItemData[] => {
    const preset = settings.mainContextTemplatePresets[settings.mainContextTemplatePreset];
    if (!preset) return [];
    return preset.prompts.map((prompt) => {
      const promptSetting = settings.prompts[prompt.promptName as keyof typeof settings.prompts];
      const label = promptSetting ? `${promptSetting.label} (${prompt.promptName})` : prompt.promptName;
      return {
        id: prompt.promptName,
        label,
        enabled: prompt.enabled,
        selectValue: prompt.role,
        selectOptions: [
          { value: 'user', label: 'User' },
          { value: 'assistant', label: 'Assistant' },
          { value: 'system', label: 'System' },
        ],
      };
    });
  }, [settings.mainContextTemplatePreset, settings.mainContextTemplatePresets, settings.prompts]);

  // --- Handlers for Main Context Template ---
  const handleMainContextPresetChange = (newValue?: string) => {
    updateAndRefresh((s) => {
      s.mainContextTemplatePreset = newValue ?? 'default';
    });
  };

  const handleMainContextPresetsChange = (newItems: PresetItem[]) => {
    updateAndRefresh((s) => {
      const newPresets: Record<string, MainContextTemplatePreset> = {};
      const oldPresets = s.mainContextTemplatePresets;
      newItems.forEach((item) => {
        newPresets[item.value] =
          oldPresets[item.value] ?? structuredClone(oldPresets[s.mainContextTemplatePreset] ?? oldPresets['default']);
      });
      s.mainContextTemplatePresets = newPresets;
    });
  };

  const handleMainContextListChange = (newListItems: SortableListItemData[]) => {
    updateAndRefresh((s) => {
      const newPrompts: MainContextPromptBlock[] = newListItems.map((item) => ({
        promptName: item.id,
        enabled: item.enabled,
        role: (item.selectValue as MessageRole) ?? 'user',
      }));

      //  Create a new preset object and a new presets object
      // instead of mutating the existing one. This ensures useMemo detects the change.
      const updatedPreset = {
        ...s.mainContextTemplatePresets[s.mainContextTemplatePreset],
        prompts: newPrompts,
      };

      s.mainContextTemplatePresets = {
        ...s.mainContextTemplatePresets,
        [s.mainContextTemplatePreset]: updatedPreset,
      };
    });
  };

  const handleRestoreMainContextDefault = async () => {
    const confirm = await globalContext.Popup.show.confirm('Restore default', 'Are you sure?');
    if (!confirm) return;

    updateAndRefresh((s) => {
      // Create a new presets object instead of mutating a property on the old one.
      s.mainContextTemplatePresets = {
        ...s.mainContextTemplatePresets,
        default: structuredClone(DEFAULT_SETTINGS.mainContextTemplatePresets['default']),
      };
      s.mainContextTemplatePreset = 'default';
    });
  };

  // --- Handlers for System Prompts ---
  const handleSystemPromptsChange = (newItems: PresetItem[]) => {
    updateAndRefresh((s) => {
      const newPrompts: Record<string, PromptSetting> = {};
      const oldPrompts = s.prompts;
      const oldKeys = Object.keys(oldPrompts);
      const newKeys = newItems.map((item) => item.value);

      // Rebuild the prompts list from newItems
      newKeys.forEach((key) => {
        newPrompts[key] = oldPrompts[key] ?? { content: '', isDefault: false, label: key };
      });

      // @ts-ignore
      s.prompts = newPrompts; // This part is correct and immutable.

      // Identify deleted prompts
      const deletedKeys = oldKeys.filter((key) => !newKeys.includes(key));
      if (deletedKeys.length > 0) {
        //  Create a new main context presets object with updated prompt arrays.
        const updatedPresets = Object.fromEntries(
          Object.entries(s.mainContextTemplatePresets).map(([presetName, preset]) => [
            presetName,
            {
              ...preset,
              prompts: preset.prompts.filter((p) => !deletedKeys.includes(p.promptName)),
            },
          ]),
        );
        s.mainContextTemplatePresets = updatedPresets;
      }
    });
  };

  const handleSystemPromptCreate = (value: string) => {
    const variableName = convertToVariableName(value);
    if (!variableName) {
      st_echo('error', `Invalid prompt name: ${value}`);
      return { confirmed: false };
    }
    if (settings.prompts[variableName]) {
      st_echo('error', `Prompt name already exists: ${variableName}`);
      return { confirmed: false };
    }

    updateAndRefresh((s) => {
      // Create a new prompts object.
      s.prompts = {
        ...s.prompts,
        [variableName]: {
          content: s.prompts[selectedSystemPrompt as keyof typeof s.prompts]?.content ?? '',
          isDefault: false,
          label: value,
        },
      };

      // Create a new presets object where each preset has a new, updated prompts array.
      s.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(s.mainContextTemplatePresets).map(([presetName, preset]) => [
          presetName,
          {
            ...preset,
            prompts: [...preset.prompts, { enabled: true, promptName: variableName, role: 'user' }],
          },
        ]),
      );
    });
    setSelectedSystemPrompt(variableName);
    return { confirmed: true, value: variableName };
  };

  const handleSystemPromptRename = (oldValue: string, newValue: string) => {
    const variableName = convertToVariableName(newValue);
    if (!variableName) {
      st_echo('error', `Invalid prompt name: ${newValue}`);
      return { confirmed: false };
    }
    if (settings.prompts[variableName]) {
      st_echo('error', `Prompt name already exists: ${variableName}`);
      return { confirmed: false };
    }

    updateAndRefresh((s) => {
      // Create a new prompts object by removing the old key and adding the new one.
      const { [oldValue]: renamedPrompt, ...restPrompts } = s.prompts;
      // @ts-ignore
      s.prompts = {
        ...restPrompts,
        [variableName]: { ...renamedPrompt, label: newValue },
      };

      // Create a new presets object with updated prompt names.
      s.mainContextTemplatePresets = Object.fromEntries(
        Object.entries(s.mainContextTemplatePresets).map(([presetName, preset]) => [
          presetName,
          {
            ...preset,
            prompts: preset.prompts.map((p) => (p.promptName === oldValue ? { ...p, promptName: variableName } : p)),
          },
        ]),
      );
    });
    setSelectedSystemPrompt(variableName);
    return { confirmed: true, value: variableName };
  };

  const handleSystemPromptContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    updateAndRefresh((s) => {
      const prompt = s.prompts[selectedSystemPrompt as keyof typeof s.prompts];
      if (prompt) {
        // Create a new prompts object with an updated prompt object.
        s.prompts = {
          ...s.prompts,
          [selectedSystemPrompt]: {
            ...prompt,
            content: newContent,
            isDefault: SYSTEM_PROMPT_KEYS.includes(selectedSystemPrompt as any)
              ? DEFAULT_PROMPT_CONTENTS[selectedSystemPrompt as keyof typeof DEFAULT_PROMPT_CONTENTS] === newContent
              : false,
          },
        };
      }
    });
  };

  const handleRestoreSystemPromptDefault = async () => {
    const prompt = settings.prompts[selectedSystemPrompt as keyof typeof settings.prompts];
    if (!prompt) return st_echo('warning', 'No prompt selected.');

    const confirm = await globalContext.Popup.show.confirm('Restore Default', `Restore default for "${prompt.label}"?`);
    if (confirm) {
      updateAndRefresh((s) => {
        // Create a new prompts object with the restored content.
        s.prompts = {
          ...s.prompts,
          [selectedSystemPrompt]: {
            ...s.prompts[selectedSystemPrompt as keyof typeof s.prompts],
            content: DEFAULT_PROMPT_CONTENTS[selectedSystemPrompt as keyof typeof DEFAULT_PROMPT_CONTENTS],
          },
        };
      });
    }
  };

  // --- Reset Handler ---
  const handleResetEverything = async () => {
    const confirm = await globalContext.Popup.show.confirm('Reset Everything', 'Are you sure? This cannot be undone.');
    if (confirm) {
      settingsManager.resetSettings(); // This saves automatically
      // forceUpdate is sufficient here because the next render will get a completely new settings object.
      forceUpdate();
      st_echo('success', 'Settings reset. The UI has been updated.');
    }
  };

  const selectedPromptContent = settings.prompts[selectedSystemPrompt as keyof typeof settings.prompts]?.content ?? '';
  // @ts-ignore
  const isDefaultSystemPromptSelected = SYSTEM_PROMPT_KEYS.includes(selectedSystemPrompt);

  return (
    <div className="world-info-recommender-settings">
      <div style={{ marginTop: '10px' }}>
        <div className="title_restorable">
          <span>Main Context Template</span>
          <STButton
            className="fa-solid fa-undo"
            title="Restore main context template to default"
            onClick={handleRestoreMainContextDefault}
          />
        </div>
        <STPresetSelect
          label="Template"
          items={mainContextPresetItems}
          value={settings.mainContextTemplatePreset}
          readOnlyValues={['default']}
          onChange={handleMainContextPresetChange}
          onItemsChange={handleMainContextPresetsChange}
          enableCreate
          enableRename
          enableDelete
        />
        <div style={{ marginTop: '5px' }}>
          <STSortableList
            items={mainContextListItems}
            onItemsChange={handleMainContextListChange}
            showSelectInput
            showToggleButton
          />
        </div>
      </div>

      <hr style={{ margin: '10px 0' }} />

      <div style={{ marginTop: '10px' }}>
        <div className="title_restorable">
          <span>Prompt Templates</span>
          {isDefaultSystemPromptSelected && (
            <STButton
              className="fa-solid fa-undo"
              title="Restore selected prompt to default"
              onClick={handleRestoreSystemPromptDefault}
            />
          )}
        </div>
        <STPresetSelect
          label="Prompt"
          items={systemPromptItems}
          value={selectedSystemPrompt}
          readOnlyValues={SYSTEM_PROMPT_KEYS as string[]}
          onChange={(newValue) => setSelectedSystemPrompt(newValue ?? '')}
          onItemsChange={handleSystemPromptsChange}
          enableCreate
          enableRename
          enableDelete
          onCreate={handleSystemPromptCreate}
          onRename={handleSystemPromptRename}
        />
        <STTextarea
          value={selectedPromptContent}
          onChange={handleSystemPromptContentChange}
          placeholder="Edit the selected system prompt template here..."
          rows={6}
          style={{ marginTop: '5px', width: '100%' }}
        />
      </div>

      <hr style={{ margin: '15px 0' }} />

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <STButton className="danger_button" style={{ width: 'auto' }} onClick={handleResetEverything}>
          <i style={{ marginRight: '10px' }} className="fa-solid fa-triangle-exclamation" />I messed up, reset
          everything
        </STButton>
      </div>
    </div>
  );
};
