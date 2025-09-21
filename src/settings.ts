import { ExtensionSettingsManager } from 'sillytavern-utils-lib';
import {
  DEFAULT_ST_DESCRIPTION,
  DEFAULT_CURRENT_LOREBOOKS,
  DEFAULT_BLACKLISTED_ENTRIES,
  DEFAULT_SUGGESTED_LOREBOOKS,
  DEFAULT_XML_DESCRIPTION,
  DEFAULT_TASK_DESCRIPTION,
  DEFAULT_CONNECTION_PROFILE_PROMPT,
  DEFAULT_CHAT_HISTORY_PROMPT,
} from './constants.js';
import { globalContext } from './generate.js';
import { st_echo } from 'sillytavern-utils-lib/config';

export const extensionName = 'SillyTavern-WorldInfo-Recommender';
export const extensionDisplayName = 'World Info Recommender & Lorebook Editor+';
export const VERSION = '0.1.8';
export const FORMAT_VERSION = 'F_1.3';

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
  prompts: {
    connectionProfile: PromptSetting;
    chatHistory: PromptSetting;
    stDescription: PromptSetting;
    currentLorebooks: PromptSetting;
    blackListedEntries: PromptSetting;
    suggestedLorebooks: PromptSetting;
    responseRules: PromptSetting;
    taskDescription: PromptSetting;
    [key: string]: PromptSetting;
  };
  promptPreset: string;
  promptPresets: Record<string, PromptPreset>;
  mainContextTemplatePreset: string;
  mainContextTemplatePresets: Record<string, MainContextTemplatePreset>;
}

export type SystemPromptKey =
  | 'connectionProfile'
  | 'chatHistory'
  | 'stDescription'
  | 'currentLorebooks'
  | 'blackListedEntries'
  | 'suggestedLorebooks'
  | 'responseRules'
  | 'taskDescription';

export const SYSTEM_PROMPT_KEYS: Array<SystemPromptKey> = [
  'connectionProfile',
  'chatHistory',
  'stDescription',
  'currentLorebooks',
  'blackListedEntries',
  'suggestedLorebooks',
  'responseRules',
  'taskDescription',
];

export const DEFAULT_PROMPT_CONTENTS: Record<SystemPromptKey, string> = {
  connectionProfile: DEFAULT_CONNECTION_PROFILE_PROMPT,
  chatHistory: DEFAULT_CHAT_HISTORY_PROMPT,
  stDescription: DEFAULT_ST_DESCRIPTION,
  currentLorebooks: DEFAULT_CURRENT_LOREBOOKS,
  blackListedEntries: DEFAULT_BLACKLISTED_ENTRIES,
  suggestedLorebooks: DEFAULT_SUGGESTED_LOREBOOKS,
  responseRules: DEFAULT_XML_DESCRIPTION,
  taskDescription: DEFAULT_TASK_DESCRIPTION,
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
  prompts: {
    connectionProfile: {
      label: 'Connection Profile Prompts',
      content: DEFAULT_PROMPT_CONTENTS.connectionProfile,
      isDefault: true,
    },
    chatHistory: {
      label: 'Chat History',
      content: DEFAULT_PROMPT_CONTENTS.chatHistory,
      isDefault: true,
    },
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
          promptName: 'connectionProfile',
          enabled: true,
          role: 'system',
        },
        {
          promptName: 'chatHistory',
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
              delete migrated.stWorldInfoPrompt;
              delete migrated.usingDefaultStWorldInfoPrompt;
              delete migrated.lorebookDefinitionPrompt;
              delete migrated.usingDefaultLorebookDefinitionPrompt;
              delete migrated.lorebookRulesPrompt;
              delete migrated.usingDefaultLorebookRulesPrompt;
              delete migrated.responseRulesPrompt;
              delete migrated.usingDefaultResponseRulesPrompt;

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
            action(previous) {
              const migrated = { ...previous };
              migrated.formatVersion = 'F_1.3';

              if (!migrated.prompts.connectionProfile) {
                migrated.prompts.connectionProfile = {
                  label: 'Connection Profile Prompts',
                  content: DEFAULT_PROMPT_CONTENTS.connectionProfile,
                  isDefault: true,
                };
              }

              if (!migrated.prompts.chatHistory) {
                migrated.prompts.chatHistory = {
                  label: 'Chat History',
                  content: DEFAULT_PROMPT_CONTENTS.chatHistory,
                  isDefault: true,
                };
              }

              Object.values(migrated.mainContextTemplatePresets).forEach(
                (preset: any) => {
                  const blocks = preset.prompts as MainContextPromptBlock[];
                  const hasCP = blocks.some(
                    (b) => b.promptName === 'connectionProfile',
                  );
                  const hasCH = blocks.some(
                    (b) => b.promptName === 'chatHistory',
                  );

                  if (!hasCP) {
                    blocks.unshift({
                      promptName: 'connectionProfile',
                      enabled: true,
                      role: 'system',
                    });
                  }

                  if (!hasCH) {
                    const cpIndex = blocks.findIndex(
                      (b) => b.promptName === 'connectionProfile',
                    );
                    const insertIndex = cpIndex !== -1 ? cpIndex + 1 : 0;
                    blocks.splice(insertIndex, 0, {
                      promptName: 'chatHistory',
                      enabled: true,
                      role: 'system',
                    });
                  }
                },
              );

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
