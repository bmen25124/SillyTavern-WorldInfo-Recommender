import { ExtensionSettingsManager } from 'sillytavern-utils-lib';
import {
  DEFAULT_ST_DESCRIPTION,
  DEFAULT_CURRENT_LOREBOOKS,
  DEFAULT_BLACKLISTED_ENTRIES,
  DEFAULT_SUGGESTED_LOREBOOKS,
  DEFAULT_XML_DESCRIPTION,
  DEFAULT_TASK_DESCRIPTION,
  DEFAULT_REVISE_JSON_PROMPT,
  DEFAULT_REVISE_XML_PROMPT,
  DEFAULT_REVISE_TASK_DESCRIPTION,
  DEFAULT_REVISE_GLOBAL_STATE_UPDATE,
  DEFAULT_REVISE_GLOBAL_STATE_UPDATE_ADDED_MODIFIED,
  DEFAULT_REVISE_GLOBAL_STATE_UPDATE_REMOVED,
} from './constants.js';
import { globalContext } from './generate.js';
import { st_echo } from 'sillytavern-utils-lib/config';

export const extensionName = 'SillyTavern-WorldInfo-Recommender';
export const VERSION = '0.2.0';
export const FORMAT_VERSION = 'F_1.4';

export const KEYS = {
  EXTENSION: 'worldInfoRecommender',
} as const;

export interface ContextToSend {
  stDescription: boolean;
  messages: {
    type: 'none' | 'all' | 'first' | 'last' | 'range';
    first?: number;
    last?: number;
    range?: {
      start: number;
      end: number;
    };
  };
  charCard: boolean;
  authorNote: boolean;
  worldInfo: boolean;
  suggestedEntries: boolean;
}

export interface PromptSetting {
  label: string;
  content: string;
  isDefault: boolean;
}

export interface PromptPreset {
  content: string;
}

export type MessageRole = 'user' | 'assistant' | 'system';
export type PromptEngineeringMode = 'native' | 'json' | 'xml';

export interface MainContextPromptBlock {
  promptName: string;
  enabled: boolean;
  role: MessageRole;
}

export interface MainContextTemplatePreset {
  prompts: MainContextPromptBlock[];
}

export interface ExtensionSettings {
  version: string;
  formatVersion: string;
  profileId: string;
  maxContextType: 'profile' | 'sampler' | 'custom';
  maxContextValue: number;
  maxResponseToken: number;
  contextToSend: ContextToSend;
  defaultPromptEngineeringMode: PromptEngineeringMode;
  prompts: {
    stDescription: PromptSetting;
    currentLorebooks: PromptSetting;
    blackListedEntries: PromptSetting;
    suggestedLorebooks: PromptSetting;
    responseRules: PromptSetting;
    taskDescription: PromptSetting;
    reviseJsonPrompt: PromptSetting;
    reviseXmlPrompt: PromptSetting;
    reviseTaskDescription: PromptSetting;
    reviseGlobalStateUpdate: PromptSetting;
    reviseGlobalStateUpdateAddedModified: PromptSetting;
    reviseGlobalStateUpdateRemoved: PromptSetting;
  };
  promptPreset: string;
  promptPresets: Record<string, PromptPreset>;
  mainContextTemplatePreset: string;
  mainContextTemplatePresets: Record<string, MainContextTemplatePreset>;
}

export type SystemPromptKey =
  | 'stDescription'
  | 'currentLorebooks'
  | 'blackListedEntries'
  | 'suggestedLorebooks'
  | 'responseRules'
  | 'taskDescription'
  | 'reviseJsonPrompt'
  | 'reviseXmlPrompt'
  | 'reviseTaskDescription'
  | 'reviseGlobalStateUpdate'
  | 'reviseGlobalStateUpdateAddedModified'
  | 'reviseGlobalStateUpdateRemoved';

export const SYSTEM_PROMPT_KEYS: Array<SystemPromptKey> = [
  'stDescription',
  'currentLorebooks',
  'blackListedEntries',
  'suggestedLorebooks',
  'responseRules',
  'taskDescription',
  'reviseJsonPrompt',
  'reviseXmlPrompt',
  'reviseTaskDescription',
  'reviseGlobalStateUpdate',
  'reviseGlobalStateUpdateAddedModified',
  'reviseGlobalStateUpdateRemoved',
];

export const DEFAULT_PROMPT_CONTENTS: Record<SystemPromptKey, string> = {
  stDescription: DEFAULT_ST_DESCRIPTION,
  currentLorebooks: DEFAULT_CURRENT_LOREBOOKS,
  blackListedEntries: DEFAULT_BLACKLISTED_ENTRIES,
  suggestedLorebooks: DEFAULT_SUGGESTED_LOREBOOKS,
  responseRules: DEFAULT_XML_DESCRIPTION,
  taskDescription: DEFAULT_TASK_DESCRIPTION,
  reviseJsonPrompt: DEFAULT_REVISE_JSON_PROMPT,
  reviseXmlPrompt: DEFAULT_REVISE_XML_PROMPT,
  reviseTaskDescription: DEFAULT_REVISE_TASK_DESCRIPTION,
  reviseGlobalStateUpdate: DEFAULT_REVISE_GLOBAL_STATE_UPDATE,
  reviseGlobalStateUpdateAddedModified: DEFAULT_REVISE_GLOBAL_STATE_UPDATE_ADDED_MODIFIED,
  reviseGlobalStateUpdateRemoved: DEFAULT_REVISE_GLOBAL_STATE_UPDATE_REMOVED,
};

export const DEFAULT_SETTINGS: ExtensionSettings = {
  version: VERSION,
  formatVersion: FORMAT_VERSION,
  profileId: '',
  maxContextType: 'profile',
  maxContextValue: 16384,
  maxResponseToken: 1024,
  contextToSend: {
    stDescription: true,
    messages: {
      type: 'all',
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10,
      },
    },
    charCard: true,
    authorNote: true,
    worldInfo: true,
    suggestedEntries: true,
  },
  defaultPromptEngineeringMode: 'native',
  prompts: {
    stDescription: {
      label: 'SillyTavern Description',
      content: DEFAULT_PROMPT_CONTENTS.stDescription,
      isDefault: true,
    },
    currentLorebooks: {
      label: 'Current Lorebooks',
      content: DEFAULT_PROMPT_CONTENTS.currentLorebooks,
      isDefault: true,
    },
    blackListedEntries: {
      label: 'Blacklisted Entries',
      content: DEFAULT_PROMPT_CONTENTS.blackListedEntries,
      isDefault: true,
    },
    suggestedLorebooks: {
      label: 'Suggested Lorebooks',
      content: DEFAULT_PROMPT_CONTENTS.suggestedLorebooks,
      isDefault: true,
    },
    responseRules: {
      label: 'Response Rules',
      content: DEFAULT_PROMPT_CONTENTS.responseRules,
      isDefault: true,
    },
    taskDescription: {
      label: 'Task Description',
      content: DEFAULT_PROMPT_CONTENTS.taskDescription,
      isDefault: true,
    },
    reviseJsonPrompt: {
      content: DEFAULT_PROMPT_CONTENTS.reviseJsonPrompt,
      isDefault: true,
      label: 'Revise Session (JSON Mode)',
    },
    reviseXmlPrompt: {
      content: DEFAULT_PROMPT_CONTENTS.reviseXmlPrompt,
      isDefault: true,
      label: 'Revise Session (XML Mode)',
    },
    reviseTaskDescription: {
      content: DEFAULT_PROMPT_CONTENTS.reviseTaskDescription,
      isDefault: true,
      label: 'Revise Session Task Description',
    },
    reviseGlobalStateUpdate: {
      content: DEFAULT_PROMPT_CONTENTS.reviseGlobalStateUpdate,
      isDefault: true,
      label: 'Revise Global State Update (Wrapper)',
    },
    reviseGlobalStateUpdateAddedModified: {
      content: DEFAULT_PROMPT_CONTENTS.reviseGlobalStateUpdateAddedModified,
      isDefault: true,
      label: 'Revise Global State (Added/Modified)',
    },
    reviseGlobalStateUpdateRemoved: {
      content: DEFAULT_PROMPT_CONTENTS.reviseGlobalStateUpdateRemoved,
      isDefault: true,
      label: 'Revise Global State (Removed)',
    },
  },
  promptPreset: 'default',
  promptPresets: {
    default: {
      content: '',
    },
  },
  mainContextTemplatePreset: 'default',
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          promptName: 'chatHistory', // this is exception, since chat history is not exactly a prompt
          enabled: true,
          role: 'system',
        },
        {
          promptName: 'stDescription',
          enabled: true,
          role: 'system',
        },
        {
          promptName: 'currentLorebooks',
          enabled: true,
          role: 'system',
        },
        {
          promptName: 'blackListedEntries',
          enabled: true,
          role: 'system',
        },
        {
          promptName: 'suggestedLorebooks',
          enabled: true,
          role: 'system',
        },
        {
          promptName: 'responseRules',
          enabled: true,
          role: 'system',
        },
        {
          promptName: 'taskDescription',
          enabled: true,
          role: 'user',
        },
      ],
    },
  },
};

export function convertToVariableName(key: string) {
  // Remove non-ASCII and special characters
  const normalized = key.replace(/[^\w\s]/g, '');

  // Split by whitespace and filter out empty parts
  const parts = normalized.split(/\s+/).filter(Boolean);

  let firstWordPrinted = false;
  return parts
    .map((word, _) => {
      // Remove numbers from the start of words
      const cleanWord = word.replace(/^\d+/, '');
      // Convert to camelCase
      if (cleanWord) {
        const result = firstWordPrinted
          ? `${cleanWord[0].toUpperCase()}${cleanWord.slice(1).toLowerCase()}`
          : cleanWord.toLowerCase();
        if (!firstWordPrinted) {
          firstWordPrinted = true;
        }
        return result;
      }

      return '';
    })
    .join('');
}

export const settingsManager = new ExtensionSettingsManager<ExtensionSettings>(KEYS.EXTENSION, DEFAULT_SETTINGS);

export async function initializeSettings(): Promise<void> {
  return new Promise((resolve, _reject) => {
    settingsManager
      .initializeSettings({
        strategy: [
          {
            from: 'F_1.0',
            to: 'F_1.1',
            action(previous) {
              const migrated = {
                ...DEFAULT_SETTINGS,
                ...previous,
              };
              delete (migrated as any).stWorldInfoPrompt;
              delete (migrated as any).usingDefaultStWorldInfoPrompt;
              delete (migrated as any).lorebookDefinitionPrompt;
              delete (migrated as any).usingDefaultLorebookDefinitionPrompt;
              delete (migrated as any).lorebookRulesPrompt;
              delete (migrated as any).usingDefaultLorebookRulesPrompt;
              delete (migrated as any).responseRulesPrompt;
              delete (migrated as any).usingDefaultResponseRulesPrompt;

              return migrated;
            },
          },
          {
            from: 'F_1.1',
            to: 'F_1.2',
            action(previous) {
              const migrated = { ...previous };
              migrated.formatVersion = 'F_1.2';

              // The exact string of the old default content for taskDescription
              const OLD_TASK_DESCRIPTION = `## Rules
- Don't suggest already existing or suggested entries.

## Your Task
{{userInstructions}}`;

              // Check if the user's current setting is the old default.
              if (migrated.prompts.taskDescription.content === OLD_TASK_DESCRIPTION) {
                // If so, update it to the new default.
                migrated.prompts.taskDescription.content = DEFAULT_PROMPT_CONTENTS.taskDescription;
                migrated.prompts.taskDescription.isDefault = true;
              } else {
                // Otherwise, it's a custom prompt, so just mark it as not default.
                migrated.prompts.taskDescription.isDefault = false;
              }

              return migrated;
            },
          },
          {
            from: 'F_1.2',
            to: 'F_1.3',
            action(previous: ExtensionSettings): ExtensionSettings {
              const migrated = { ...previous };
              migrated.formatVersion = 'F_1.3';
              migrated.defaultPromptEngineeringMode = 'native';

              // Add new prompt settings for Revise Sessions
              if (!migrated.prompts) migrated.prompts = {} as any;
              migrated.prompts.reviseJsonPrompt = {
                content: DEFAULT_PROMPT_CONTENTS.reviseJsonPrompt,
                isDefault: true,
                label: 'Revise Session (JSON Mode)',
              };
              migrated.prompts.reviseXmlPrompt = {
                content: DEFAULT_PROMPT_CONTENTS.reviseXmlPrompt,
                isDefault: true,
                label: 'Revise Session (XML Mode)',
              };
              migrated.prompts.reviseTaskDescription = {
                content: DEFAULT_PROMPT_CONTENTS.reviseTaskDescription,
                isDefault: true,
                label: 'Revise Session Task Description',
              };

              // Update templates if they are still the old defaults
              if (previous.prompts.currentLorebooks.isDefault) {
                migrated.prompts.currentLorebooks.content = DEFAULT_PROMPT_CONTENTS.currentLorebooks;
                migrated.prompts.currentLorebooks.isDefault = true;
              }
              if (previous.prompts.blackListedEntries.isDefault) {
                migrated.prompts.blackListedEntries.content = DEFAULT_PROMPT_CONTENTS.blackListedEntries;
                migrated.prompts.blackListedEntries.isDefault = true;
              }
              if (previous.prompts.suggestedLorebooks.isDefault) {
                migrated.prompts.suggestedLorebooks.content = DEFAULT_PROMPT_CONTENTS.suggestedLorebooks;
                migrated.prompts.suggestedLorebooks.isDefault = true;
              }

              return migrated;
            },
          },
          {
            from: 'F_1.3',
            to: 'F_1.4',
            action(previous: ExtensionSettings): ExtensionSettings {
              const migrated = { ...previous };
              migrated.formatVersion = 'F_1.4';

              if (!migrated.prompts) migrated.prompts = {} as any;

              migrated.prompts.reviseGlobalStateUpdate = {
                content: DEFAULT_PROMPT_CONTENTS.reviseGlobalStateUpdate,
                isDefault: true,
                label: 'Revise Global State Update (Wrapper)',
              };
              migrated.prompts.reviseGlobalStateUpdateAddedModified = {
                content: DEFAULT_PROMPT_CONTENTS.reviseGlobalStateUpdateAddedModified,
                isDefault: true,
                label: 'Revise Global State (Added/Modified)',
              };
              migrated.prompts.reviseGlobalStateUpdateRemoved = {
                content: DEFAULT_PROMPT_CONTENTS.reviseGlobalStateUpdateRemoved,
                isDefault: true,
                label: 'Revise Global State (Removed)',
              };

              return migrated;
            },
          },
        ],
      })
      .then((_result) => {
        resolve();
      })
      .catch((error) => {
        console.error(`[${extensionName}] Error initializing settings:`, error);
        st_echo('error', `[${extensionName}] Failed to initialize settings: ${error.message}`);
        globalContext.Popup.show
          .confirm(
            `[${extensionName}] Failed to load settings. This might be due to an update. Reset settings to default?`,
            'Extension Error',
          )
          .then((result: boolean) => {
            if (result) {
              settingsManager.resetSettings();
              st_echo('success', `[${extensionName}] Settings reset. Reloading may be required.`);
              resolve();
            }
          });
      });
  });
}
