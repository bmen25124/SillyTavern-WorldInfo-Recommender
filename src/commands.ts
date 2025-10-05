import { BuildPromptOptions, getActiveWorldInfo } from 'sillytavern-utils-lib';
import { commonEnumProviders, selected_group, st_echo, this_chid } from 'sillytavern-utils-lib/config';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

// @ts-ignore
import {
  globalContext,
  prepareEntryModification,
  provideConnectionProfiles,
  runWorldInfoRecommendation,
  RunWorldInfoRecommendationParams,
  Session,
} from './generate.js';
import { ContextToSend, settingsManager } from './settings.js';

export function initializeCommands() {
  /**
   * Parses a string or array of strings into a list, handling various quoting styles.
   * @param input Examples:
   *  - '[1, 2, 3]'
   *  - ['"with space", withoutspace']
   *  - ["'single quote'", '"double quote"']
   *  - ['1,2,3', '4,5,6']
   *  - ['nested "quotes in" items']
   */
  function parseList(input?: string | string[]): string[] | null {
    if (!input) {
      return null;
    }

    const result: string[] = [];
    const inputArray = Array.isArray(input) ? input : [input];

    for (const str of inputArray) {
      let workStr = str.trim();

      // Remove array brackets if present
      if (workStr.startsWith('[') && workStr.endsWith(']')) {
        workStr = workStr.slice(1, -1);
      }

      let current = '';
      let inQuotes = false;
      let quoteChar = '';

      for (let i = 0; i < workStr.length; i++) {
        const char = workStr[i];

        if (char === '"' || char === "'") {
          if (i > 0 && workStr[i - 1] === '\\') {
            current = current.slice(0, -1) + char; // Remove the escape character and add the quote
          } else if (!inQuotes) {
            inQuotes = true;
            quoteChar = char;
          } else if (char === quoteChar) {
            inQuotes = false;
            if (current.trim()) result.push(current.trim());
            current = '';
            quoteChar = '';
          } else {
            current += char;
          }
        } else if (char === ',' && !inQuotes) {
          if (current.trim()) result.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }

      if (current.trim()) result.push(current.trim());
    }

    return result;
  }

  globalContext.SlashCommandParser.addCommandObject(
    globalContext.SlashCommand.fromProps({
      name: 'world-info-recommender-popup-open',
      helpString: 'Open World Info Recommender popup',
      unnamedArgumentList: [],
      callback: async (_args: any, _value: any) => {
        // @ts-ignore
        if (window.openWorldInfoRecommenderPopup) {
          // @ts-ignore
          window.openWorldInfoRecommenderPopup();
        }

        return false;
      },
      returns: globalContext.ARGUMENT_TYPE.BOOLEAN,
    }),
  );

  globalContext.SlashCommandParser.addCommandObject(
    globalContext.SlashCommand.fromProps({
      name: 'world-info-recommender-run',
      helpString: `
              <div class="inline-drawer">
                  <details>
                      <summary>Run the World Info Recommender AI automatically.</summary>
                      <div class="list-group">
                          Executes the recommendation process using the specified parameters.
                          <br>
                          - <b>profile</b>: (Required) Connection profile ID/name to use for the AI request.
                          <br>
                          - <b>prompt</b>: (Required) The core task/instruction for the AI. Passed as unnamed argument(s).
                          <br>
                          - <b>lorebooks</b>: List of lorebook names to include as context. Defaults to currently active worlds.
                          <br>
                          - <b>allowed-ops</b>: List of operations allowed ('add', 'update'). Defaults to 'add,update'.
                          <br>
                          - <b>editable-entries</b>: Comma-separated list of specific entries allowed for update, format: <code>WorldName.EntryComment</code> or <code>WorldName.UID</code>. If provided, only these entries can be updated. Adds are still allowed if 'add' is in allowed-ops. Defaults to allowing updates for all entries.
                          <br>
                          - <b>context</b>: Context parts ('stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'). Defaults to extension settings.
                          <br>
                          - <b>messages</b>: Message range ('all', 'none', 'first:N', 'last:N', 'range:S-E'). Defaults to extension settings.
                          <br>
                          - <b>max-context</b>: Override context token limit (number). Defaults to extension settings.
                          <br>
                          - <b>max-response</b>: Override response token limit (number). Defaults to extension settings.
                          <br>
                          - <b>main-context-template</b>: Override main context template preset (string). Defaults to extension settings.
                          <br>
                          - <b>silent</b>: Suppress success/error messages (boolean). Defaults to false.
                      </div>
                      <div>
                          <b>Example:</b>
                          <pre><code>/wir-run profile=your_profile_id lorebooks=[CommonEvents,Characters] allowed-ops=[add] "Create 3 new entries about recent events in the tavern based on the last 5 messages."</code></pre>
                          <pre><code>/wir-run profile=your_profile_name editable-entries=[Characters.12345,Locations.The Docks] messages=last:10 prompt="Update the description for character UID 12345 and The Docks based on the recent fight."</code></pre>
                      </div>
                  </details>
              </div>
          `,
      returns: globalContext.ARGUMENT_TYPE.BOOLEAN,
      namedArgumentList: [
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'profile',
          description: 'Connection Profile ID/name to use for the AI request.',
          typeList: [globalContext.ARGUMENT_TYPE.STRING],
          isRequired: true,
          enumProvider: provideConnectionProfiles,
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'lorebooks',
          description: 'List of lorebook names to include as context (defaults to active).',
          typeList: [globalContext.ARGUMENT_TYPE.LIST],
          isRequired: false,
          acceptsMultiple: true,
          enumProvider: commonEnumProviders.worlds,
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'allowed-ops',
          description: "Operations allowed: 'add', 'update'.",
          typeList: [globalContext.ARGUMENT_TYPE.LIST],
          isRequired: false,
          defaultValue: '[add,update]',
          enumList: ['add', 'update'],
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'editable-entries',
          description: "Specific entries allowed for update: 'WorldName.Comment' or 'WorldName.UID' (comma-separated).",
          typeList: [globalContext.ARGUMENT_TYPE.STRING],
          isRequired: false,
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'context',
          description: "Context parts: 'stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'.",
          typeList: [globalContext.ARGUMENT_TYPE.LIST],
          isRequired: false,
          acceptsMultiple: true,
          // Default is handled by falling back to settings
          enumList: ['stDescription', 'messages', 'charCard', 'authorNote', 'worldInfo'],
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'messages',
          description: "Message range: 'all', 'none', 'first:N', 'last:N', 'range:S-E'.",
          typeList: [globalContext.ARGUMENT_TYPE.STRING],
          isRequired: false,
          // Default is handled by falling back to settings
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'max-context',
          description: 'Override context token limit.',
          typeList: [globalContext.ARGUMENT_TYPE.NUMBER],
          isRequired: false,
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'max-response',
          description: 'Override response token limit.',
          typeList: [globalContext.ARGUMENT_TYPE.NUMBER],
          isRequired: false,
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'main-context-template',
          description: 'Override main context template preset.',
          typeList: [globalContext.ARGUMENT_TYPE.STRING],
          isRequired: false,
        }),
        globalContext.SlashCommandNamedArgument.fromProps({
          name: 'silent',
          description: 'Suppress success/error messages.',
          typeList: [globalContext.ARGUMENT_TYPE.BOOLEAN],
          isRequired: false,
          defaultValue: false,
        }),
      ],
      unnamedArgumentList: [
        globalContext.SlashCommandArgument.fromProps({
          description: 'The prompt/task for the AI.',
          typeList: [globalContext.ARGUMENT_TYPE.STRING],
          isRequired: true,
          acceptsMultiple: true, // Allows prompts with spaces
        }),
      ],
      // The callback function to execute
      callback: async (namedArgs: Record<string, any>, unnamedArgs: string) => {
        const silent = namedArgs.silent ?? false;
        try {
          // 1. Get Settings and Current State
          const settings = settingsManager.getSettings();
          const userPrompt = Array.isArray(unnamedArgs) ? unnamedArgs.join(' ') : unnamedArgs;
          const profileIdOrName = namedArgs.profile as string;
          let profileId: string;

          if (!userPrompt) {
            throw new Error('Prompt argument is required.');
          }
          if (!profileIdOrName) {
            throw new Error('Profile argument is required.'); // Should be caught by isRequired, but double-check
          }
          // Validate profile exists (enumProvider helps, but ID might be typed manually)
          const profileExists = globalContext.extensionSettings?.connectionManager?.profiles?.find(
            (p) => p.id === profileIdOrName || p.name === profileIdOrName,
          );
          if (!profileExists) {
            throw new Error(`Profile with ID "${profileIdOrName}" not found.`);
          }
          profileId = profileExists.id;

          const parsedLorebookNames = parseList(namedArgs.lorebooks as string | undefined);

          // Determine lorebooks to use
          let allWorldInfo: Record<string, WIEntry[]>;
          if (parsedLorebookNames !== null) {
            allWorldInfo = {};
            for (const name of parsedLorebookNames) {
              const worldInfo = await globalContext.loadWorldInfo(name);
              if (worldInfo) {
                allWorldInfo[name] = Object.values(worldInfo.entries);
              }
            }
          } else {
            allWorldInfo = await getActiveWorldInfo(['all'], this_chid);
          }

          const availableWorldNames = Object.keys(allWorldInfo);
          let targetLorebookNames: string[];
          if (parsedLorebookNames !== null) {
            targetLorebookNames = parsedLorebookNames
              .map((name) => name.trim())
              .filter((name) => {
                if (availableWorldNames.includes(name)) {
                  return true;
                } else {
                  if (!silent)
                    st_echo('warning', `Specified lorebook "${name}" is not active or does not exist. Ignoring.`);
                  return false;
                }
              });
            if (targetLorebookNames.length === 0) {
              throw new Error('No valid lorebooks specified or active.');
            }
          } else {
            targetLorebookNames = availableWorldNames; // Default to all active
          }

          if (targetLorebookNames.length === 0) {
            if (!silent) st_echo('warning', 'No active lorebooks found to use for context.');
            // Allow proceeding, but worldInfo context might be empty
          }

          // Parse allowed operations
          const parsedAllowedOps = parseList(namedArgs['allowed-ops'] as string | undefined);
          const allowedOpsRaw = parsedAllowedOps !== null ? parsedAllowedOps : ['add', 'update'];
          const allowAdd = allowedOpsRaw.includes('add');
          const allowUpdate = allowedOpsRaw.includes('update');

          // Parse editable entries (if provided)
          const editableEntriesSet = new Set<string>();
          const parsedEditableEntries = parseList(namedArgs['editable-entries'] as string | undefined);
          if (parsedEditableEntries !== null) {
            parsedEditableEntries.forEach((item) => {
              editableEntriesSet.add(item.trim());
            });
          }
          const limitUpdates = editableEntriesSet.size > 0;

          // Prepare ContextToSend based on args or fallback to settings
          const parsedContextToSend = parseList(namedArgs.context as string | undefined);
          const contextToSend: ContextToSend = { ...settings.contextToSend }; // Start with defaults
          if (parsedContextToSend !== null) {
            const contextArgs = parsedContextToSend.map((s) => s.trim());
            contextToSend.stDescription = contextArgs.includes('stdescription');
            contextToSend.messages.type = contextArgs.includes('messages') ? contextToSend.messages.type : 'none'; // Keep type if messages included, else none
            contextToSend.charCard = contextArgs.includes('charcard');
            contextToSend.authorNote = contextArgs.includes('authornote');
            contextToSend.worldInfo = contextArgs.includes('worldinfo');
            // 'suggestedEntries' context doesn't make sense here as we start fresh
            contextToSend.suggestedEntries = false;
          }
          // Override message range if specified
          if (namedArgs.messages && contextToSend.messages.type !== 'none') {
            const msgArg = (namedArgs.messages as string).toLowerCase().trim();
            if (msgArg === 'all') contextToSend.messages.type = 'all';
            else if (msgArg === 'none') contextToSend.messages.type = 'none';
            else if (msgArg.startsWith('first:')) {
              contextToSend.messages.type = 'first';
              contextToSend.messages.first = parseInt(msgArg.split(':')[1]) || 10;
            } else if (msgArg.startsWith('last:')) {
              contextToSend.messages.type = 'last';
              contextToSend.messages.last = parseInt(msgArg.split(':')[1]) || 10;
            } else if (msgArg.startsWith('range:')) {
              const parts = msgArg.split(':')[1].split('-');
              contextToSend.messages.type = 'range';
              contextToSend.messages.range = {
                start: parseInt(parts[0]) || 0,
                end: parseInt(parts[1]) || 10,
              };
            } else {
              if (!silent)
                st_echo('warning', `Invalid 'messages' argument format: "${namedArgs.messages}". Using default.`);
            }
          }

          // Prepare BuildPromptOptions
          const buildPromptOptions: BuildPromptOptions = {
            // Let runWorldInfoRecommendation determine these from profile
            presetName: undefined,
            contextName: undefined,
            instructName: undefined,
            syspromptName: undefined,
            // Use derived contextToSend settings
            ignoreCharacterFields: !contextToSend.charCard,
            ignoreWorldInfo: true, // Handled manually inside runWorldInfoRecommendation
            ignoreAuthorNote: !contextToSend.authorNote,
            maxContext:
              namedArgs['max-context'] ??
              (settings.maxContextType === 'custom'
                ? settings.maxContextValue
                : settings.maxContextType === 'profile'
                  ? 'preset'
                  : 'active'),
            includeNames: !!selected_group,
            targetCharacterId: selected_group ? this_chid : undefined, // Simplification: Use current char in group context
          };

          // Add message range options
          switch (contextToSend.messages.type) {
            case 'none':
              buildPromptOptions.messageIndexesBetween = { start: -1, end: -1 };
              break;
            case 'first':
              buildPromptOptions.messageIndexesBetween = { start: 0, end: contextToSend.messages.first ?? 10 };
              break;
            case 'last':
              const lastCount = contextToSend.messages.last ?? 10;
              const chatLength = globalContext.chat?.length ?? 0;
              buildPromptOptions.messageIndexesBetween = {
                end: Math.max(0, chatLength - 1),
                start: Math.max(0, chatLength - lastCount),
              };
              break;
            case 'range':
              if (contextToSend.messages.range) {
                buildPromptOptions.messageIndexesBetween = {
                  start: contextToSend.messages.range.start,
                  end: contextToSend.messages.range.end,
                };
              }
              break;
            case 'all':
            default:
              break; // No range needed
          }

          // Prepare Session (simplified for command)
          const session: Session = {
            selectedWorldNames: targetLorebookNames,
            suggestedEntries: {}, // Start with no pre-existing suggestions
            blackListedEntries: [], // Start with no blacklist
            regexIds: {}, // Start with no regexes
            selectedEntryUids: {},
          };

          const parsedMaxResponse = namedArgs['max-response'] ? parseInt(namedArgs['max-response']) : undefined;

          const promptSettings = structuredClone(settings.prompts);
          if (!contextToSend.stDescription) {
            // @ts-ignore
            delete promptSettings.stDescription;
          }
          if (!contextToSend.worldInfo || targetLorebookNames.length === 0) {
            // @ts-ignore
            delete promptSettings.currentLorebooks;
          }
          // @ts-ignore - no need suggesting entries
          delete promptSettings.suggestedLorebooks;

          // Prepare Params for the core function
          const params: RunWorldInfoRecommendationParams = {
            profileId: profileId,
            userPrompt: userPrompt,
            buildPromptOptions: buildPromptOptions,
            session: session,
            entriesGroupByWorldName: allWorldInfo, // Pass the current state
            promptSettings,
            mainContextList: settings.mainContextTemplatePresets[
              namedArgs['main-context-template'] ?? settings.mainContextTemplatePreset
            ].prompts
              .filter((p) => p.enabled)
              .map((p) => ({
                promptName: p.promptName,
                role: p.role,
              })),
            maxResponseToken: parsedMaxResponse ?? settings.maxResponseToken,
          };

          // 2. Run Recommendation
          if (!silent) st_echo('info', `Running World Info Recommender...`);
          const suggestedEntries = await runWorldInfoRecommendation(params);

          if (Object.keys(suggestedEntries).length === 0) {
            if (!silent) st_echo('info', 'AI returned no suggestions.');
            return true; // Not an error, just no results
          }

          // 3. Process and Apply Results
          let addedCount = 0;
          let updatedCount = 0;
          let skippedCount = 0;
          const modifiedWorlds = new Set<string>();
          // Create a deep copy to modify, to avoid altering the original map used by the core function if it's called again
          const workingWorldInfo = structuredClone(allWorldInfo);

          for (const [worldName, entries] of Object.entries(suggestedEntries)) {
            let targetWorldName = worldName;

            // Check if the suggested world is one we're allowed to modify
            if (!targetLorebookNames.includes(targetWorldName)) {
              if (availableWorldNames.includes(targetWorldName)) {
                // It's an active world, but not specified in 'lorebooks' arg. Skip.
                if (!silent)
                  st_echo(
                    'warning',
                    `AI suggested entry for "${targetWorldName}", but it wasn't in the specified 'lorebooks'. Skipping ${entries.length} entries.`,
                  );
                skippedCount += entries.length;
                continue;
              } else {
                // Suggested for a world that doesn't even exist / isn't active. Try falling back.
                if (targetLorebookNames.length > 0) {
                  targetWorldName = targetLorebookNames[0]; // Fallback to the first specified lorebook
                  if (!silent)
                    st_echo(
                      'warning',
                      `AI suggested entry for non-existent/inactive world "${worldName}". Attempting to place in "${targetWorldName}".`,
                    );
                } else {
                  // No valid target world specified at all.
                  if (!silent)
                    st_echo(
                      'error',
                      `AI suggested entry for "${worldName}", but no valid target lorebook available. Skipping ${entries.length} entries.`,
                    );
                  skippedCount += entries.length;
                  continue;
                }
              }
            }

            for (const entry of entries) {
              const isExisting = workingWorldInfo[targetWorldName]?.some(
                (e) => e.uid === entry.uid && e.comment === entry.comment,
              );

              // Apply filters
              if (isExisting) {
                if (!allowUpdate) {
                  if (!silent)
                    st_echo(
                      'info',
                      `Skipping update for "${targetWorldName}.${entry.comment || entry.uid}" (updates disallowed).`,
                    );
                  skippedCount++;
                  continue;
                }
                if (limitUpdates) {
                  const commentIdentifier = `${targetWorldName}.${entry.comment}`;
                  const uidIdentifier = `${targetWorldName}.${entry.uid}`;
                  if (!editableEntriesSet.has(commentIdentifier) && !editableEntriesSet.has(uidIdentifier)) {
                    if (!silent)
                      st_echo(
                        'info',
                        `Skipping update for "${targetWorldName}.${entry.comment || entry.uid}" (not in editable-entries).`,
                      );
                    skippedCount++;
                    continue;
                  }
                }
              } else {
                if (!allowAdd) {
                  if (!silent)
                    st_echo(
                      'info',
                      `Skipping add for "${targetWorldName}.${entry.comment || 'New Entry'}" (adds disallowed).`,
                    );
                  skippedCount++;
                  continue;
                }
              }

              // Prepare modification (adds/updates in the 'workingWorldInfo' map)
              try {
                const { status } = prepareEntryModification(entry, targetWorldName, workingWorldInfo);
                if (status === 'added') addedCount++;
                else updatedCount++;
                modifiedWorlds.add(targetWorldName);
              } catch (prepError: any) {
                if (!silent)
                  st_echo(
                    'error',
                    `Failed to prepare modification for "${targetWorldName}.${entry.comment || entry.uid}": ${prepError.message}`,
                  );
                skippedCount++;
              }
            }
          }

          // 4. Save Changes for modified worlds
          if (modifiedWorlds.size > 0) {
            if (!silent) st_echo('info', `Saving changes to ${modifiedWorlds.size} lorebook(s)...`);
            for (const worldNameToSave of modifiedWorlds) {
              const worldDataToSave = workingWorldInfo[worldNameToSave];
              const stFormat: { entries: Record<number, WIEntry> } = { entries: {} };
              worldDataToSave.forEach((e) => (stFormat.entries[e.uid] = e));
              await globalContext.saveWorldInfo(worldNameToSave, stFormat);
              globalContext.reloadWorldInfoEditor(worldNameToSave, true); // Update editor UI if open
            }
          }

          // 5. Report Summary
          if (!silent) {
            const parts = [];

            if (addedCount > 0 || updatedCount > 0 || skippedCount > 0) {
              parts.push(`
                <div class="results-summary">
                  <ul>
                  <li><strong>Added:</strong> ${addedCount}</li>
                  <li><strong>Updated:</strong> ${updatedCount}</li>
                  <li><strong>Skipped:</strong> ${skippedCount}</li>
                  </ul>
                </div>
                `);
            }

            if (modifiedWorlds.size > 0) {
              parts.push(`
                <div class="modified-worlds">
                  <strong>Modified Lorebooks:</strong>
                  <ul>
                  ${Array.from(modifiedWorlds)
                    .map((world) => `<li>${world}</li>`)
                    .join('')}
                  </ul>
                </div>
                `);
            }

            const message =
              parts.length > 0
                ? `
                <div class="wir-results">
                  <h4>World Info Recommender Results:</h4>
                  ${parts.join('')}
                </div>
                `
                : `
                <div class="wir-results">
                  <h4>World Info Recommender:</h4>
                  <p>No changes were made</p>
                </div>
                `;

            st_echo('success', message, { escapeHtml: false });
          }

          return true; // Indicate success
        } catch (error: any) {
          console.error('Error running world-info-recommender-run command:', error);
          if (!silent) {
            st_echo('error', `World Info Recommender command failed: ${error.message}`);
          }
          return false; // Indicate failure
        }
      },
    }),
  );
}
