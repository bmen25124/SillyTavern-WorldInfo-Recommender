import { settingsManager } from './settings.js';

type LanguageCode = 'en' | 'zh';

type TranslationDict = Record<string, string>;

const translations: Record<LanguageCode, TranslationDict> = {
  en: {
    // Generic
    loading: 'Loading...',
    ok: 'OK',
    cancel: 'Cancel',

    // Names
    appTitle: 'World Info Recommender',

    // MainPopup sections
    connectionProfile: 'Connection Profile',
    contextToSend: 'Context to Send',
    stDescription: 'Description of SillyTavern and Lorebook',
    messagesToInclude: 'Messages to Include',
    none: 'None',
    allMessages: 'All Messages',
    firstXMessages: 'First X Messages',
    lastXMessages: 'Last X Messages',
    range: 'Range',
    first: 'First',
    last: 'Last',
    messages: 'Messages',
    rangeColon: 'Range:',
    to: 'to',
    charCard: 'Char Card',
    selectCharacter: 'Select Character',
    selectCharacterTitle: 'Select character for your group.',
    authorNote: 'Author Note',
    worldInfo: 'World Info',
    lorebooksToInclude: 'Lorebooks to Include',
    selectEntries: 'Select Entries',
    selectEntriesTitle: 'Select specific entries from the chosen lorebooks',
    existingSuggestions: 'Existing Suggestions',
    maxContext: 'Max Context',
    maxContextProfile: 'Use profile preset',
    maxContextSampler: 'Use active preset in sampler settings',
    maxContextCustom: 'Custom',
    maxResponseTokens: 'Max Response Tokens',
    yourPrompt: 'Your Prompt',
    promptPreset: 'Prompt Preset',
    promptPlaceholder: "e.g., 'Suggest entries for places {{user}} visited.'",
    sendPrompt: 'Send Prompt',
    generating: 'Generating...',
    suggestedEntries: 'Suggested Entries',
    addAll: 'Add All',
    reset: 'Reset',
    noSuggestions: 'No suggestions yet. Send a prompt to get started!'
      ,
    // Dialogs
    confirmAddAllTitle: 'Add All',
    confirmAddAllText: 'Are you sure you want to add/update all {count} suggested entries?',
    confirmResetTitle: 'Reset',
    confirmResetText: 'Clear all suggestions and reset lorebook selection?',

    // Toasts
    pleaseSelectProfile: 'Please select a connection profile.',
    pleaseEnterPrompt: 'Please enter a prompt.',
    noResultsFromAI: 'No results from AI',
    entryAdded: 'Entry added',
    entryUpdated: 'Entry updated',
    failedToAddEntry: 'Failed to add entry: {message}',
    processedSummary: 'Processed {added} new and {updated} updated entries.',
    failedToProcessEntry: 'Failed to process entry: {comment}',
    failedToSaveWorld: 'Failed to save world: {worldName}',
    resetSuccessful: 'Reset successful',

    // SuggestedEntry
    update: 'Update',
    add: 'Add',
    continue: 'Continue',
    revise: 'Revise',
    edit: 'Edit',
    compare: 'Compare',
    blacklist: 'Blacklist',
    remove: 'Remove',
    continueTitle: 'Continue writing this entry. You can provide instructions in the textbox below.',
    reviseTitle: 'Request changes to this entry. Provide instructions in the textbox below.',
    continuePlaceholder: "Optional instructions to continue or revise this entry. Then press 'Continue' or 'Revise'.",

    // EditEntryPopup
    editSuggestion: 'Edit Suggestion',
    title: 'Title',
    keywordsComma: 'Keywords (comma-separated)',
    applyRegexScripts: 'Apply Regex Scripts',
    selectRegexPlaceholder: 'Select regex scripts...',
    simulateRegex: 'Simulate Regex',
    resultingContent: 'Resulting content...',

    // CompareEntryPopup
    compareChanges: 'Compare Changes',
    originalContent: 'Original Content',
    newContentSuggestion: 'New Content (Suggestion)',

    // SelectEntriesPopup
    selectEntriesToInclude: 'Select Entries to Include',
    filterPlaceholder: 'Filter by name or lorebook...',
    selectAllFiltered: 'Select All (Filtered)',
    deselectAll: 'Deselect All',
    noEntriesMatch: 'No entries match your filter.',
    entryN: 'Entry {uid}',

    // Settings UI
    mainContextTemplate: 'Main Context Template',
    restoreDefault: 'Restore default',
    restoreDefaultTitle: 'Restore main context template to default',
    template: 'Template',
    promptTemplates: 'Prompt Templates',
    restoreSelectedPrompt: 'Restore selected prompt to default',
    prompt: 'Prompt',
    editPromptPlaceholder: 'Edit the selected system prompt template here...',
    resetEverything: 'Reset Everything',
    resetEverythingLong: 'I messed up, reset everything',
    areYouSure: 'Are you sure?',
    areYouSureLong: 'Are you sure? This cannot be undone.',
    settingsResetUIUpdated: 'Settings reset. The UI has been updated.',
    roleUser: 'User',
    roleAssistant: 'Assistant',
    roleSystem: 'System',

    // Language
    language: 'Language',
    languageEnglish: 'English',
    languageChinese: 'Chinese',
  },
  zh: {
    loading: '加载中…',
    ok: '确定',
    cancel: '取消',

    appTitle: '世界信息推荐器',

    connectionProfile: '连接配置',
    contextToSend: '要发送的上下文',
    stDescription: 'SillyTavern 与词库说明',
    messagesToInclude: '包含的消息',
    none: '不包含',
    allMessages: '全部消息',
    firstXMessages: '前 X 条消息',
    lastXMessages: '后 X 条消息',
    range: '范围',
    first: '前',
    last: '后',
    messages: '条消息',
    rangeColon: '范围：',
    to: '到',
    charCard: '角色卡',
    selectCharacter: '选择角色',
    selectCharacterTitle: '为群聊选择角色。',
    authorNote: '作者注',
    worldInfo: '词库',
    lorebooksToInclude: '要包含的词库',
    selectEntries: '选择条目',
    selectEntriesTitle: '从所选词库中选择特定条目',
    existingSuggestions: '已有建议',
    maxContext: '上下文上限',
    maxContextProfile: '使用配置预设',
    maxContextSampler: '使用采样器中的活动预设',
    maxContextCustom: '自定义',
    maxResponseTokens: '回复 Token 上限',
    yourPrompt: '你的提示词',
    promptPreset: '提示词预设',
    promptPlaceholder: "例如：'为 {{user}} 去过的地方推荐词条。'",
    sendPrompt: '发送提示',
    generating: '生成中…',
    suggestedEntries: '建议的条目',
    addAll: '全部添加',
    reset: '重置',
    noSuggestions: '还没有建议。先发送提示开始吧！',

    confirmAddAllTitle: '全部添加',
    confirmAddAllText: '确定要添加/更新全部 {count} 个建议条目吗？',
    confirmResetTitle: '重置',
    confirmResetText: '清空所有建议并重置词库选择？',

    pleaseSelectProfile: '请先选择连接配置。',
    pleaseEnterPrompt: '请输入提示词。',
    noResultsFromAI: '没有来自 AI 的结果',
    entryAdded: '已添加条目',
    entryUpdated: '已更新条目',
    failedToAddEntry: '添加条目失败：{message}',
    processedSummary: '已处理 {added} 个新增与 {updated} 个更新的条目。',
    failedToProcessEntry: '处理条目失败：{comment}',
    failedToSaveWorld: '保存词库失败：{worldName}',
    resetSuccessful: '重置成功',

    update: '更新',
    add: '添加',
    continue: '续写',
    revise: '修改',
    edit: '编辑',
    compare: '对比',
    blacklist: '拉黑',
    remove: '移除',
    continueTitle: '继续撰写此条目。可在下方文本框提供说明。',
    reviseTitle: '请求修改此条目。在下方文本框填写说明。',
    continuePlaceholder: "可选：续写或修改的说明，然后点击“续写”或“修改”。",

    editSuggestion: '编辑建议',
    title: '标题',
    keywordsComma: '关键词（逗号分隔）',
    applyRegexScripts: '应用正则脚本',
    selectRegexPlaceholder: '选择正则脚本…',
    simulateRegex: '模拟正则',
    resultingContent: '结果内容…',

    compareChanges: '变更对比',
    originalContent: '原始内容',
    newContentSuggestion: '新内容（建议）',

    selectEntriesToInclude: '选择要包含的条目',
    filterPlaceholder: '按名称或词库筛选…',
    selectAllFiltered: '全选（筛选结果）',
    deselectAll: '全不选',
    noEntriesMatch: '没有匹配筛选条件的条目。',
    entryN: '条目 {uid}',

    mainContextTemplate: '主上下文模板',
    restoreDefault: '恢复默认',
    restoreDefaultTitle: '恢复主上下文模板为默认',
    template: '模板',
    promptTemplates: '提示模板',
    restoreSelectedPrompt: '恢复所选提示为默认',
    prompt: '提示',
    editPromptPlaceholder: '在此编辑所选系统提示模板…',
    resetEverything: '全部重置',
    resetEverythingLong: '我搞砸了，全部重置',
    areYouSure: '确定吗？',
    areYouSureLong: '确定吗？该操作无法撤销。',
    settingsResetUIUpdated: '设置已重置，界面已更新。',
    roleUser: '用户',
    roleAssistant: '助手',
    roleSystem: '系统',

    language: '语言',
    languageEnglish: '英文',
    languageChinese: '中文',
  },
};

function format(template: string, params?: Record<string, string | number>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(params, key) ? String(params[key]) : `{${key}}`,
  );
}

export function t(key: string, params?: Record<string, string | number>): string {
  try {
    const lang = (settingsManager.getSettings() as any)?.language as LanguageCode | undefined;
    const selected: LanguageCode = lang === 'zh' ? 'zh' : 'en';
    const dict = translations[selected] ?? translations.en;
    const base = dict[key] ?? translations.en[key] ?? key;
    return format(base, params);
  } catch {
    const base = translations.en[key] ?? key;
    return format(base, params);
  }
}

export type { LanguageCode };
