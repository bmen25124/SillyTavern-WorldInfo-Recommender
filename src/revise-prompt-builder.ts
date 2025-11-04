import * as Handlebars from 'handlebars';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { ReviseMessage, CHAT_HISTORY_PLACEHOLDER_ID, ReviseSessionType } from './revise-types.js';
import { ExtensionSettings, settingsManager } from './settings.js';
import { globalContext, Session } from './generate.js';

export async function buildInitialReviseMessages(
  initialState: WIEntry | Record<string, WIEntry[]>,
  type: ReviseSessionType,
  worldName: string | undefined, // Only for 'entry' type
  mainContextTemplatePreset: string,
  contextToSend: ExtensionSettings['contextToSend'],
  sessionForContext: Pick<Session, 'selectedWorldNames' | 'selectedEntryUids' | 'blackListedEntries'>,
  allEntries: Record<string, WIEntry[]>,
): Promise<ReviseMessage[]> {
  const settings = settingsManager.getSettings();
  const preset = settings.mainContextTemplatePresets[mainContextTemplatePreset];
  if (!preset) {
    throw new Error(`Main context template preset "${mainContextTemplatePreset}" not found.`);
  }

  const initialMessages: ReviseMessage[] = [];

  const templateData: Record<string, any> = {
    user: globalContext.name1 || 'You',
    char: globalContext.name2 || 'Character',
    persona: globalContext.powerUserSettings.persona_description,
    blackListedEntries: sessionForContext.blackListedEntries,
  };

  if (contextToSend.worldInfo) {
    // For global sessions, the initialState IS the current lorebook context for the revision.
    // For entry sessions, we build the context from all other enabled entries.
    if (type === 'global') {
      templateData['currentLorebooks'] = initialState;
    } else {
      const lorebooks: Record<string, WIEntry[]> = {};
      Object.entries(allEntries)
        .filter(([wn]) => sessionForContext.selectedWorldNames.includes(wn))
        .forEach(([wn, entries]) => {
          const selectedUids = new Set(sessionForContext.selectedEntryUids[wn] ?? []);
          const filtered =
            selectedUids.size > 0 ? entries.filter((e) => selectedUids.has(e.uid)) : entries.filter((e) => !e.disable);
          if (filtered.length > 0) lorebooks[wn] = filtered;
        });
      templateData['currentLorebooks'] = lorebooks;
    }
  }

  if (type === 'entry') {
    const entryToRevise = initialState as WIEntry;
    templateData['entryToRevise'] = {
      worldName: worldName,
      name: entryToRevise.comment,
      triggers: entryToRevise.key.join(', '),
      content: entryToRevise.content,
    };
  }

  for (const block of preset.prompts) {
    if (!block.enabled) continue;

    if (['taskDescription', 'responseRules', 'currentLorebooks'].includes(block.promptName)) continue;

    if (block.promptName === 'chatHistory') {
      initialMessages.push({
        id: CHAT_HISTORY_PLACEHOLDER_ID,
        role: 'system',
        content: '[[Chat history placeholder]]',
        isInitial: true,
      });
      continue;
    }

    const promptSetting = settings.prompts[block.promptName as keyof typeof settings.prompts];
    if (promptSetting) {
      let content = Handlebars.compile(promptSetting.content, { noEscape: true })(templateData);
      content = globalContext.substituteParams(content);
      if (content.trim()) {
        initialMessages.push({
          id: `im-${initialMessages.length}`,
          role: block.role,
          content: content.trim(),
          isInitial: true,
        });
      }
    }
  }

  const taskTemplate = settings.prompts.reviseTaskDescription?.content;
  if (taskTemplate) {
    const taskDescription = Handlebars.compile(taskTemplate, { noEscape: true })({
      isEntrySession: type === 'entry',
      targetEntryName: type === 'entry' ? (initialState as WIEntry).comment : '',
    });
    initialMessages.push({
      id: `im-${initialMessages.length}`,
      role: 'system',
      content: taskDescription,
      isInitial: true,
    });
  }

  return initialMessages;
}
