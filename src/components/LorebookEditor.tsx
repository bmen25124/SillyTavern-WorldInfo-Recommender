import {
  ChangeEvent,
  CSSProperties,
  FC,
  KeyboardEvent as ReactKeyboardEvent,
  memo,
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import Sortable from 'sortablejs';
import { STButton, STFancyDropdown, DropdownItem as FancyDropdownItem } from 'sillytavern-utils-lib/components';
import { st_echo } from 'sillytavern-utils-lib/config';
import { ExtendedWIEntry, POSITION_OPTIONS, ROLE_AT_DEPTH, SaveEntryPayload } from '../types.js';
import { LorebookEntryCard } from './LorebookEntryCard.js';
import { LorebookEntryCompactRow } from './LorebookEntryCompactRow.js';

const naturalNameCollator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

export const sortEntriesByName = (entries: ExtendedWIEntry[], direction: SortDirection = 'asc') => {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...entries].sort((a, b) => multiplier * naturalNameCollator.compare(a.comment || '', b.comment || ''));
};

export const sortEntriesByUid = (entries: ExtendedWIEntry[], direction: SortDirection = 'asc') => {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...entries].sort((a, b) => multiplier * (a.uid - b.uid));
};

export const sortEntriesByOrder = (entries: ExtendedWIEntry[], direction: SortDirection = 'asc') => {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...entries].sort((a, b) => {
    const posA = a.position;
    const posB = b.position;

    if (posA == null && posB == null) {
      // continue to order comparison
    } else if (posA == null) {
      return 1;
    } else if (posB == null) {
      return -1;
    } else {
      const posDiff = posA - posB;
      if (posDiff !== 0) {
        return multiplier * posDiff;
      }
    }

    const orderA = a.order;
    const orderB = b.order;

    if (orderA == null && orderB == null) {
      return 0;
    }
    if (orderA == null) {
      return 1;
    }
    if (orderB == null) {
      return -1;
    }

    return multiplier * (orderA - orderB);
  });
};

export const sortEntriesByCustom = (entries: ExtendedWIEntry[], customOrder: number[] = []) => {
  if (!customOrder || customOrder.length === 0) {
    return [...entries];
  }

  const orderMap = new Map(customOrder.map((uid, index) => [uid, index]));
  const fallbackOffsets = new Map(entries.map((entry, index) => [entry.uid, index]));
  const baseOffset = orderMap.size;

  const getRank = (entry: ExtendedWIEntry) => {
    const mapped = orderMap.get(entry.uid);
    if (mapped != null) return mapped;
    const fallbackIndex = fallbackOffsets.get(entry.uid) ?? 0;
    return baseOffset + fallbackIndex;
  };

  return [...entries].sort((a, b) => getRank(a) - getRank(b));
};

const sanitizeFileName = (value: string) => value.replace(/[\s.<>:"/\\|?*\u0000-\u001F\u007F]/g, '_');

const formatTimestampForFileName = (date: Date) => {
  const pad = (num: number) => num.toString().padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}_${pad(date.getHours())}-${pad(
    date.getMinutes(),
  )}-${pad(date.getSeconds())}`;
};

type ElectronAPI = {
  saveFile?: (options: {
    data: Uint8Array;
    defaultPath?: string;
    filters?: { name: string; extensions: string[] }[];
  }) => Promise<{ filePath?: string } | string | void>;
  showItemInFolder?: (path: string) => void;
};

const getElectronAPI = (): ElectronAPI | undefined => {
  if (typeof window === 'undefined') {
    return undefined;
  }

  return (window as typeof window & { electronAPI?: ElectronAPI }).electronAPI;
};

interface BackupInfo {
  fileName: string;
  location: string;
  timestamp: number;
  includesUnsavedChanges: boolean;
  method: 'electron' | 'download';
}

const NO_COMMENT_FIRST_WORD_LABEL = '(no comment)';
const NO_COMMENT_FIRST_WORD_KEY = '__no_comment__';

const FIRST_WORD_FILTER_STORAGE_KEY = 'lorebookEditorFirstWordFilters';
const PAGINATION_STORAGE_KEY = 'lorebookEditorPagination';
const PAGE_SIZE_STORAGE_KEY = 'lorebookEditorPageSize';
const SORT_SELECTION_STORAGE_KEY = 'lorebookEditorSortSelection';
const BULK_SECTIONS_STORAGE_KEY = 'lorebookEditorBulkSections';
const MENU_TAB_STORAGE_KEY = 'lorebookEditorMenuTab';
const BULK_COMMENT_NUMBERING_STORAGE_KEY = 'lorebookEditorBulkCommentNumbering';
const VIEW_MODE_STORAGE_KEY = 'lorebookEditorViewMode';

const CATEGORY_STORAGE_KEY = 'lorebookEditorCategories';
const CATEGORY_PANEL_STATE_STORAGE_KEY = 'lorebookEditorCategoryPanels';
const UNCATEGORIZED_FILTER_VALUE = '__uncategorized__';

interface LorebookCategory {
  id: string;
  name: string;
  icon?: string;
  color?: string;
}

const MAX_CATEGORY_ICON_LENGTH = 2;
const CATEGORY_COLOR_FALLBACK = '#6c7a89';

const sanitizeCategoryIcon = (value: unknown): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }

  const limited = Array.from(trimmed).slice(0, MAX_CATEGORY_ICON_LENGTH).join('');
  return limited;
};

const sanitizeCategoryColor = (value: unknown): string | undefined => {
  if (typeof value !== 'string') {
    return undefined;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return undefined;
  }

  const HEX_COLOR_PATTERN = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
  if (!HEX_COLOR_PATTERN.test(trimmed)) {
    return undefined;
  }

  return trimmed.toLowerCase();
};

const getCategoryColorValue = (category: LorebookCategory): string =>
  sanitizeCategoryColor(category.color) ?? CATEGORY_COLOR_FALLBACK;

interface CategoryCreateFormProps {
  disabled: boolean;
  onCreate: (name: string) => boolean;
}

const CategoryCreateForm: FC<CategoryCreateFormProps> = memo(({ disabled, onCreate }) => {
  const [name, setName] = useState('');
  const trimmedName = name.trim();

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    const wasCreated = onCreate(name);
    if (wasCreated) {
      setName('');
    }
  }, [disabled, name, onCreate]);

  const handleKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleSubmit();
      }
    },
    [handleSubmit],
  );

  const isAddDisabled = disabled || trimmedName === '';

  return (
    <div className="category-dashboard__create">
      <input
        type="text"
        className="text_pole"
        placeholder="New category name"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />
      <STButton
        onClick={handleSubmit}
        className="menu_button menu_button--compact"
        disabled={isAddDisabled}
      >
        <i className="fa-solid fa-plus" aria-hidden="true"></i>
        <span>Add</span>
      </STButton>
    </div>
  );
});

CategoryCreateForm.displayName = 'CategoryCreateForm';

interface LorebookCategoryWorldState {
  categories: LorebookCategory[];
  entryAssignments: Record<number, string>;
}

type LorebookCategoryStorage = Record<string, LorebookCategoryWorldState>;

type CategoryPanelState = Record<string, Record<string, boolean>>;

const createEmptyCategoryState = (): LorebookCategoryWorldState => ({
  categories: [],
  entryAssignments: {},
});

const EMPTY_CATEGORY_STATE: LorebookCategoryWorldState = createEmptyCategoryState();
const EMPTY_CATEGORY_ASSIGNMENTS = EMPTY_CATEGORY_STATE.entryAssignments;
const EMPTY_EXPANDED_CATEGORY_STATE: Record<string, boolean> = {};
const CATEGORY_STORAGE_PERSIST_DELAY_MS = 200;

const sanitizeCategoryStorage = (value: unknown): LorebookCategoryStorage => {
  if (!value || typeof value !== 'object') {
    return {};
  }

  const result: LorebookCategoryStorage = {};
  Object.entries(value as Record<string, unknown>).forEach(([worldName, rawState]) => {
    if (!rawState || typeof rawState !== 'object') {
      return;
    }

    const rawCategories = Array.isArray((rawState as { categories?: unknown }).categories)
      ? ((rawState as { categories: unknown[] }).categories as unknown[])
      : [];
    const categories: LorebookCategory[] = rawCategories
      .map((item) => {
        if (!item || typeof item !== 'object') {
          return null;
        }
        const { id, name, icon, color } = item as {
          id?: unknown;
          name?: unknown;
          icon?: unknown;
          color?: unknown;
        };
        if (typeof id !== 'string') {
          return null;
        }
        const sanitizedIcon = sanitizeCategoryIcon(icon);
        const sanitizedColor = sanitizeCategoryColor(color);
        return {
          id,
          name: typeof name === 'string' ? name : '',
          ...(sanitizedIcon ? { icon: sanitizedIcon } : {}),
          ...(sanitizedColor ? { color: sanitizedColor } : {}),
        } satisfies LorebookCategory;
      })
      .filter((item): item is LorebookCategory => item != null);

    const assignments: Record<number, string> = {};
    const rawAssignments = (rawState as { entryAssignments?: unknown }).entryAssignments;
    if (rawAssignments && typeof rawAssignments === 'object') {
      Object.entries(rawAssignments as Record<string, unknown>).forEach(([uidKey, categoryId]) => {
        const uid = Number(uidKey);
        if (!Number.isFinite(uid)) {
          return;
        }
        if (typeof categoryId !== 'string' || !categoryId) {
          return;
        }
        assignments[uid] = categoryId;
      });
    }

    if (categories.length === 0 && Object.keys(assignments).length === 0) {
      return;
    }

    result[worldName] = {
      categories,
      entryAssignments: assignments,
    };
  });

  return result;
};

const sanitizeCategoryPanelState = (value: unknown): CategoryPanelState => {
  if (!value || typeof value !== 'object') {
    return {};
  }

  const result: CategoryPanelState = {};
  Object.entries(value as Record<string, unknown>).forEach(([worldName, rawState]) => {
    if (!rawState || typeof rawState !== 'object') {
      return;
    }

    const expanded: Record<string, boolean> = {};
    Object.entries(rawState as Record<string, unknown>).forEach(([categoryId, isExpanded]) => {
      if (isExpanded === true && categoryId) {
        expanded[categoryId] = true;
      }
    });

    if (Object.keys(expanded).length > 0) {
      result[worldName] = expanded;
    }
  });

  return result;
};

const loadInitialCategoryStorage = (): LorebookCategoryStorage => {
  if (typeof localStorage === 'undefined') {
    return {};
  }

  try {
    const raw = localStorage.getItem(CATEGORY_STORAGE_KEY);
    if (!raw) {
      return {};
    }
    const parsed = JSON.parse(raw);
    return sanitizeCategoryStorage(parsed);
  } catch {
    return {};
  }
};

const serializeCategoryStorage = (storage: LorebookCategoryStorage): LorebookCategoryStorage => {
  const result: LorebookCategoryStorage = {};

  Object.entries(storage).forEach(([worldName, state]) => {
    if (!state) {
      return;
    }

    const assignments: Record<number, string> = {};
    Object.entries(state.entryAssignments).forEach(([uidKey, categoryId]) => {
      const uid = Number(uidKey);
      if (!Number.isFinite(uid)) {
        return;
      }
      if (typeof categoryId !== 'string' || !categoryId) {
        return;
      }
      assignments[uid] = categoryId;
    });

    if (state.categories.length === 0 && Object.keys(assignments).length === 0) {
      return;
    }

    result[worldName] = {
      categories: state.categories.map((category) => {
        const serialized: LorebookCategory = {
          id: category.id,
          name: category.name,
        };
        const icon = sanitizeCategoryIcon(category.icon);
        const color = sanitizeCategoryColor(category.color);
        if (icon) {
          serialized.icon = icon;
        }
        if (color) {
          serialized.color = color;
        }
        return serialized;
      }),
      entryAssignments: assignments,
    };
  });

  return result;
};

const cloneCategoryState = (state: LorebookCategoryWorldState): LorebookCategoryWorldState => ({
  categories: state.categories.map((category) => ({ ...category })),
  entryAssignments: { ...state.entryAssignments },
});

const cloneCategoryStorage = (storage: LorebookCategoryStorage): LorebookCategoryStorage =>
  Object.fromEntries(
    Object.entries(storage).map(([worldName, state]) => [worldName, cloneCategoryState(state)]),
  );

const createCategoryId = () => `cat_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

const parseOrderRangeInput = (
  input: string,
): { start: number; direction: 'asc' | 'desc' } | null => {
  const trimmed = input.trim();
  if (!trimmed) {
    return null;
  }

  const rangeMatch = trimmed.match(/^(-?\d+)\s*-\s*(-?\d+)$/);
  if (rangeMatch) {
    const start = Number(rangeMatch[1]);
    const end = Number(rangeMatch[2]);
    if (!Number.isFinite(start) || !Number.isFinite(end)) {
      return null;
    }
    return { start, direction: end >= start ? 'asc' : 'desc' };
  }

  const single = Number(trimmed);
  if (Number.isFinite(single)) {
    return { start: single, direction: 'asc' };
  }

  return null;
};

const SORT_KEYS = ['name', 'uid', 'order', 'date'] as const;
const SORT_DIRECTIONS = ['asc', 'desc'] as const;

type SortKey = (typeof SORT_KEYS)[number];
type SortDirection = (typeof SORT_DIRECTIONS)[number];

const SORT_SELECTION_VALUES = [
  'custom',
  'name-asc',
  'name-desc',
  'uid-asc',
  'uid-desc',
  'order-asc',
  'order-desc',
  'date-asc',
  'date-desc',
] as const;

type SortSelection = (typeof SORT_SELECTION_VALUES)[number];

type SortableSelection = Exclude<SortSelection, 'custom'>;

const SORT_SELECTION_CONFIG: Record<SortableSelection, { key: SortKey; direction: SortDirection }> = {
  'name-asc': { key: 'name', direction: 'asc' },
  'name-desc': { key: 'name', direction: 'desc' },
  'uid-asc': { key: 'uid', direction: 'asc' },
  'uid-desc': { key: 'uid', direction: 'desc' },
  'order-asc': { key: 'order', direction: 'asc' },
  'order-desc': { key: 'order', direction: 'desc' },
  'date-asc': { key: 'date', direction: 'asc' },
  'date-desc': { key: 'date', direction: 'desc' },
};

const LEGACY_SORT_SELECTION_MAP: Record<string, SortSelection> = {
  name: 'name-asc',
  uid: 'uid-asc',
  order: 'order-asc',
  date: 'date-asc',
};

const isKnownSortSelection = (value: string): value is SortSelection =>
  (SORT_SELECTION_VALUES as readonly string[]).includes(value);

const sanitizeSortSelectionValue = (value: unknown): SortSelection | '' => {
  if (typeof value !== 'string' || !value) {
    return '';
  }

  if (isKnownSortSelection(value)) {
    return value;
  }

  return LEGACY_SORT_SELECTION_MAP[value] ?? '';
};

type BulkSectionKey = 'comments' | 'order' | 'position';

type MenuTabKey = 'overview' | 'categories';

const MENU_TABS: Array<{ id: MenuTabKey; label: string; icon: string }> = [
  {
    id: 'overview',
    label: 'Bulk Updates',
    icon: 'fa-table-columns',
  },
  {
    id: 'categories',
    label: 'Categories',
    icon: 'fa-tags',
  },
];

type StoredBulkCommentNumberingPreferences = {
  enabled?: boolean;
  start?: string;
  direction?: 'asc' | 'desc';
};

const DEFAULT_BULK_SECTION_STATE: Record<BulkSectionKey, boolean> = {
  comments: true,
  order: false,
  position: false,
};

const sanitizeBulkSectionState = (
  value: Partial<Record<BulkSectionKey, boolean>> | null | undefined,
): Record<BulkSectionKey, boolean> => ({
  comments: typeof value?.comments === 'boolean' ? value.comments : DEFAULT_BULK_SECTION_STATE.comments,
  order: typeof value?.order === 'boolean' ? value.order : DEFAULT_BULK_SECTION_STATE.order,
  position: typeof value?.position === 'boolean' ? value.position : DEFAULT_BULK_SECTION_STATE.position,
});

const readLocalStorageJSON = <T,>(key: string, fallback: T): T => {
  if (typeof localStorage === 'undefined') {
    return fallback;
  }

  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }

    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const writeLocalStorageJSON = (key: string, value: unknown) => {
  if (typeof localStorage === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
};

const readLocalStorageNumber = (key: string, fallback: number): number => {
  if (typeof localStorage === 'undefined') {
    return fallback;
  }

  const raw = localStorage.getItem(key);
  if (raw == null) {
    return fallback;
  }

  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const writeLocalStorageValue = (key: string, value: string) => {
  if (typeof localStorage === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
};

export interface EntryFirstWord {
  label: string;
  key: string;
}

export interface FirstWordGroup {
  key: string;
  label: string;
  count: number;
}

export interface FirstWordGrouping {
  keyByUid: Map<number, string>;
  groups: Map<string, FirstWordGroup>;
}

export const getEntryFirstWord = (entry: ExtendedWIEntry): EntryFirstWord => {
  const rawComment = entry.comment ?? '';
  const trimmed = rawComment.trim();
  if (!trimmed) {
    return { label: NO_COMMENT_FIRST_WORD_LABEL, key: NO_COMMENT_FIRST_WORD_KEY };
  }

  const [firstWord] = trimmed.split(/\s+/);
  const label = firstWord;
  const key = firstWord.toLocaleLowerCase();
  return { label, key };
};

export const buildFirstWordGrouping = (entries: ExtendedWIEntry[]): FirstWordGrouping => {
  const keyByUid = new Map<number, string>();
  const groups = new Map<string, FirstWordGroup>();

  entries.forEach((entry) => {
    const { label, key } = getEntryFirstWord(entry);
    keyByUid.set(entry.uid, key);
    const existing = groups.get(key);
    if (existing) {
      existing.count += 1;
    } else {
      groups.set(key, { key, label, count: 1 });
    }
  });

  return { keyByUid, groups };
};

export const buildFirstWordReferenceEntries = (
  drafts: ExtendedWIEntry[],
  originals: ExtendedWIEntry[],
  originalUidMap?: Map<number, number>,
): ExtendedWIEntry[] => {
  if (drafts.length === 0 || originals.length === 0) {
    return drafts;
  }

  const originalsByUid = new Map<number, ExtendedWIEntry>();
  originals.forEach((entry) => {
    originalsByUid.set(entry.uid, entry);
  });

  let mutatedEntries: ExtendedWIEntry[] | null = null;

  drafts.forEach((draft, index) => {
    const originalUid = originalUidMap?.get(draft.uid) ?? draft.uid;
    const originalEntry = originalsByUid.get(originalUid);
    if (!originalEntry) {
      if (mutatedEntries) {
        mutatedEntries.push(draft);
      }
      return;
    }

    const originalComment = originalEntry.comment ?? '';
    const draftComment = draft.comment ?? '';
    if (originalComment === draftComment) {
      if (mutatedEntries) {
        mutatedEntries.push(draft);
      }
      return;
    }

    if (!mutatedEntries) {
      mutatedEntries = drafts.slice(0, index);
    }

    mutatedEntries.push({ ...draft, comment: originalEntry.comment });
  });

  return mutatedEntries ?? drafts;
};

export const filterEntriesByFirstWord = (
  entries: ExtendedWIEntry[],
  grouping: FirstWordGrouping,
  selectedKeys: Set<string>,
): ExtendedWIEntry[] => {
  if (selectedKeys.size === 0) {
    return entries;
  }

  return entries.filter((entry) => {
    const key = grouping.keyByUid.get(entry.uid);
    if (!key) {
      return false;
    }
    return selectedKeys.has(key);
  });
};

const validateEntryForSave = (worldName: string, entry: ExtendedWIEntry) => {
  const label = entry.comment || entry.uid;
  if (!entry.content.trim()) {
    alert(`Entry ${label} in ${worldName} must have content.`);
    return false;
  }
  if (!entry.key || entry.key.length === 0 || entry.key.every((k) => !k.trim())) {
    alert(`Entry ${label} in ${worldName} must have at least one trigger.`);
    return false;
  }
  if (entry.position === 4 && (entry.depth == null || entry.roleAtDepth == null)) {
    alert(`Entry ${label} in ${worldName} must specify depth and role when positioned at chat depth.`);
    return false;
  }
  return true;
};

const parseDateFromText = (text?: string | null): number | null => {
  if (!text) return null;
  const hyphenIndex = text.lastIndexOf('-');
  if (hyphenIndex === -1) return null;
  const potentialDate = text.slice(hyphenIndex + 1).trim();
  if (!potentialDate) return null;
  const timestamp = Date.parse(potentialDate);
  return Number.isNaN(timestamp) ? null : timestamp;
};

const parseEntryDate = (entry: ExtendedWIEntry): number | null => {
  const fromComment = parseDateFromText(entry.comment);
  if (fromComment != null) {
    return fromComment;
  }
  const name = (entry as ExtendedWIEntry & { name?: string | null }).name;
  return parseDateFromText(name ?? null);
};

export const sortEntriesByDate = (entries: ExtendedWIEntry[], direction: SortDirection = 'asc') => {
  const multiplier = direction === 'desc' ? -1 : 1;
  return [...entries].sort((a, b) => {
    const dateA = parseEntryDate(a);
    const dateB = parseEntryDate(b);

    if (dateA === null && dateB === null) return 0;
    if (dateA === null) return 1;
    if (dateB === null) return -1;
    return multiplier * (dateA - dateB);
  });
};

const NUMERIC_DATE_REGEX = /\b(?:0?[1-9]|1[0-2])\/(?:0?[1-9]|[12]\d|3[01])\/\d{4}\b/g;
const MONTH_NAME_REGEX = new RegExp(
  String.raw`\b(?:January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\.?\s+\d{1,2}(?:st|nd|rd|th)?,\s*\d{4}\b`,
  'gi',
);

export const extractDateFromContent = (content?: string | null): string | null => {
  if (!content) {
    return null;
  }

  const findMatch = (regex: RegExp) => {
    regex.lastIndex = 0;
    const match = regex.exec(content);
    if (!match) {
      return null;
    }
    return { value: match[0], index: match.index };
  };

  const numeric = findMatch(NUMERIC_DATE_REGEX);
  const month = findMatch(MONTH_NAME_REGEX);

  if (!numeric && !month) {
    return null;
  }

  if (!numeric) {
    return month?.value ?? null;
  }

  if (!month) {
    return numeric.value;
  }

  return numeric.index <= month.index ? numeric.value : month.value;
};

const COMMENT_TEMPLATE_TOKENS = [
  { token: '{{date}}', label: 'Date', description: 'Insert the first detected date' },
  { token: '{{original}}', label: 'Original', description: 'Insert the existing title' },
  { token: '{{content}}', label: 'Content', description: 'Insert the entry content' },
  { token: '{{counter}}', label: 'Counter', description: 'Insert the formatted counter value' },
] as const;

type CommentTemplateValues = {
  dateValue: string;
  originalComment: string;
  content: string;
  counter: string;
};

const replaceTemplateToken = (value: string, token: string, replacement: string) => {
  if (!value || !value.includes(token)) {
    return value;
  }
  return value.split(token).join(replacement);
};

const applyCommentTemplate = (template: string, values: CommentTemplateValues) => {
  let result = template;
  if (!result) {
    return result;
  }

  result = replaceTemplateToken(result, '{{date}}', values.dateValue);
  result = replaceTemplateToken(result, '{{original}}', values.originalComment);
  result = replaceTemplateToken(result, '{{content}}', values.content);
  result = replaceTemplateToken(result, '{{counter}}', values.counter);

  return result;
};

interface LorebookEditorProps {
  entriesGroupByWorldName: Record<string, ExtendedWIEntry[]>;
  onSaveEntries: (worldName: string, entries: SaveEntryPayload[]) => Promise<void>;
  onDeleteEntries: (worldName: string, originalUids: number[]) => Promise<void>;
  onRefreshEntries?: () => Promise<void> | void;
}

/**
 * Renders an editable view of world info entries grouped by world.
 */
const buildDraftEntriesFromProps = (
  entriesGroupByWorldName: Record<string, ExtendedWIEntry[]>,
): Record<string, ExtendedWIEntry[]> => {
  const base = Object.fromEntries(
    Object.entries(entriesGroupByWorldName).map(([world, entries]) => [world, entries.map((entry) => ({ ...entry }))]),
  );
  if (typeof localStorage === 'undefined') return base;
  try {
    const stored = JSON.parse(localStorage.getItem('lorebookEditorDrafts') || '{}') as Record<
      string,
      ExtendedWIEntry[]
    >;
    Object.entries(stored).forEach(([world, entries]) => {
      if (!base[world]) return;
      const byId = new Map(base[world].map((e) => [e.uid, e]));
      entries.forEach((entry) => {
        if (byId.has(entry.uid)) {
          byId.set(entry.uid, entry);
        }
      });
      base[world] = Array.from(byId.values());
    });
  } catch {
    /* ignore parse errors */
  }
  return base;
};

const buildOriginalUidMap = (
  entriesGroupByWorldName: Record<string, ExtendedWIEntry[]>,
): Record<string, Map<number, number>> =>
  Object.fromEntries(
    Object.entries(entriesGroupByWorldName).map(([world, entries]) => [
      world,
      new Map(entries.map((entry) => [entry.uid, entry.uid])),
    ]),
  );

export const LorebookEditor: FC<LorebookEditorProps> = ({
  entriesGroupByWorldName,
  onSaveEntries,
  onDeleteEntries,
  onRefreshEntries,
}) => {
  const [draftEntries, setDraftEntries] = useState<Record<string, ExtendedWIEntry[]>>(() =>
    buildDraftEntriesFromProps(entriesGroupByWorldName),
  );
  const draftEntriesRef = useRef(draftEntries);
  useEffect(() => {
    draftEntriesRef.current = draftEntries;
  }, [draftEntries]);

  const [customOrderByWorld, setCustomOrderByWorld] = useState<Record<string, number[]>>(() => {
    const initialDrafts = buildDraftEntriesFromProps(entriesGroupByWorldName);
    return Object.fromEntries(
      Object.entries(initialDrafts).map(([world, entries]) => [world, entries.map((entry) => entry.uid)]),
    );
  });
  const [isBackingUp, setIsBackingUp] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isCompactView, setIsCompactView] = useState<boolean>(() => {
    if (typeof localStorage === 'undefined') {
      return false;
    }

    try {
      const stored = localStorage.getItem(VIEW_MODE_STORAGE_KEY);
      return stored === 'compact';
    } catch {
      return false;
    }
  });
  useEffect(() => {
    if (typeof localStorage === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(VIEW_MODE_STORAGE_KEY, isCompactView ? 'compact' : 'card');
    } catch {
      /* ignore */
    }
  }, [isCompactView]);
  const [lastBackupInfo, setLastBackupInfo] = useState<BackupInfo | null>(null);
  const initialCategoryStorageRef = useRef<LorebookCategoryStorage | null>(null);
  if (initialCategoryStorageRef.current === null) {
    initialCategoryStorageRef.current = loadInitialCategoryStorage();
  }
  const [categoryStorage, setCategoryStorage] = useState<LorebookCategoryStorage>(
    () => initialCategoryStorageRef.current ?? {},
  );
  const [savedCategorySnapshot, setSavedCategorySnapshot] = useState<LorebookCategoryStorage>(() =>
    cloneCategoryStorage(initialCategoryStorageRef.current ?? {}),
  );
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState<Set<string>>(() => new Set());
  const [categoryPanelState, setCategoryPanelState] = useState<CategoryPanelState>(() =>
    sanitizeCategoryPanelState(
      readLocalStorageJSON<Record<string, Record<string, boolean>>>(CATEGORY_PANEL_STATE_STORAGE_KEY, {}),
    ),
  );
  const latestSavedCategoryStorageRef = useRef(savedCategorySnapshot);
  latestSavedCategoryStorageRef.current = savedCategorySnapshot;
  const categoryStorageRef = useRef(categoryStorage);
  categoryStorageRef.current = categoryStorage;
  const savedCategoryStorageRef = useRef(savedCategorySnapshot);
  savedCategoryStorageRef.current = savedCategorySnapshot;
  const originalUidMapRef = useRef<Record<string, Map<number, number>> | null>(null);
  const categoryListRef = useRef<HTMLUListElement | null>(null);
  const categorySortableRef = useRef<Sortable | null>(null);

  const updateCategoryStorageForWorld = useCallback(
    (
      worldName: string,
      updater: (state: LorebookCategoryWorldState) => LorebookCategoryWorldState | null,
      options?: { alsoUpdateSaved?: boolean },
    ) => {
      setCategoryStorage((prev) => {
        const existing = prev[worldName];
        const baseState = existing ?? createEmptyCategoryState();
        const updated = updater(baseState);
        if (!updated) {
          if (!existing) {
            return prev;
          }
          const next = { ...prev };
          delete next[worldName];
          categoryStorageRef.current = next;
          return next;
        }
        if (existing && updated === existing) {
          return prev;
        }
        if (!existing && updated === baseState) {
          return prev;
        }
        const next = { ...prev, [worldName]: updated };
        categoryStorageRef.current = next;
        return next;
      });

      if (options?.alsoUpdateSaved) {
        setSavedCategorySnapshot((prev) => {
          const existing = prev[worldName];
          const baseState = existing ?? createEmptyCategoryState();
          const updated = updater(baseState);
          if (!updated) {
            if (!existing) {
              return prev;
            }
            const next = { ...prev };
            delete next[worldName];
            savedCategoryStorageRef.current = next;
            latestSavedCategoryStorageRef.current = next;
            return next;
          }
          if (existing && updated === existing) {
            return prev;
          }
          if (!existing && updated === baseState) {
            return prev;
          }
          const next = { ...prev, [worldName]: updated };
          savedCategoryStorageRef.current = next;
          latestSavedCategoryStorageRef.current = next;
          return next;
        });
      }
    },
    [],
  );

  const setCategoryPanelExpanded = useCallback((worldName: string, categoryId: string, isExpanded: boolean) => {
    setCategoryPanelState((prev) => {
      const worldState = prev[worldName];
      const wasExpanded = !!worldState?.[categoryId];
      if (isExpanded === wasExpanded) {
        return prev;
      }

      const nextState = { ...prev };
      const nextWorldState = worldState ? { ...worldState } : {};

      if (isExpanded) {
        nextWorldState[categoryId] = true;
      } else {
        delete nextWorldState[categoryId];
      }

      if (Object.keys(nextWorldState).length === 0) {
        delete nextState[worldName];
      } else {
        nextState[worldName] = nextWorldState;
      }

      return nextState;
    });
  }, []);

  if (!originalUidMapRef.current) {
    originalUidMapRef.current = buildOriginalUidMap(entriesGroupByWorldName);
  }


  useEffect(() => {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      try {
        const sanitized = serializeCategoryStorage(latestSavedCategoryStorageRef.current);
        if (Object.keys(sanitized).length === 0) {
          localStorage.removeItem(CATEGORY_STORAGE_KEY);
        } else {
          localStorage.setItem(CATEGORY_STORAGE_KEY, JSON.stringify(sanitized));
        }
      } catch {
        /* ignore */
      }
    }, CATEGORY_STORAGE_PERSIST_DELAY_MS);

    return () => clearTimeout(timeout);
  }, [savedCategorySnapshot]);

  useEffect(() => {
    writeLocalStorageJSON(CATEGORY_PANEL_STATE_STORAGE_KEY, categoryPanelState);
  }, [categoryPanelState]);

  useEffect(() => {
    if (!originalUidMapRef.current) {
      originalUidMapRef.current = buildOriginalUidMap(entriesGroupByWorldName);
      return;
    }

    const currentMaps = originalUidMapRef.current;
    let mutated = false;
    const nextMaps: Record<string, Map<number, number>> = { ...currentMaps };

    Object.entries(entriesGroupByWorldName).forEach(([worldName, entries]) => {
      const existing = nextMaps[worldName];
      if (!existing) {
        nextMaps[worldName] = new Map(entries.map((entry) => [entry.uid, entry.uid]));
        mutated = true;
        return;
      }

      let working = existing;
      entries.forEach((entry) => {
        if (!working.has(entry.uid)) {
          if (working === existing) {
            working = new Map(existing);
          }
          working.set(entry.uid, entry.uid);
        }
      });

      if (working !== existing) {
        nextMaps[worldName] = working;
        mutated = true;
      }
    });

    Object.keys(nextMaps).forEach((worldName) => {
      if (!(worldName in entriesGroupByWorldName)) {
        delete nextMaps[worldName];
        mutated = true;
      }
    });

    if (mutated) {
      originalUidMapRef.current = nextMaps;
    }
  }, [entriesGroupByWorldName]);

  const firstWordFiltersRef = useRef<Record<string, string[]> | null>(null);
  if (firstWordFiltersRef.current === null) {
    firstWordFiltersRef.current = readLocalStorageJSON<Record<string, string[]>>(FIRST_WORD_FILTER_STORAGE_KEY, {});
  }

  const paginationRef = useRef<Record<string, number> | null>(null);
  if (paginationRef.current === null) {
    const storedPages = readLocalStorageJSON<Record<string, number>>(PAGINATION_STORAGE_KEY, {});
    const sanitizedPages: Record<string, number> = {};
    Object.entries(storedPages).forEach(([worldName, value]) => {
      if (typeof value === 'number' && Number.isFinite(value) && value >= 0) {
        sanitizedPages[worldName] = Math.floor(value);
      }
    });
    paginationRef.current = sanitizedPages;
  }

  const bulkCommentNumberingPrefsRef = useRef<StoredBulkCommentNumberingPreferences | null>(null);
  if (bulkCommentNumberingPrefsRef.current === null) {
    bulkCommentNumberingPrefsRef.current = readLocalStorageJSON<StoredBulkCommentNumberingPreferences>(
      BULK_COMMENT_NUMBERING_STORAGE_KEY,
      {},
    );
  }

  const initialSelectedWorldNameRef = useRef<string | null>(null);
  if (initialSelectedWorldNameRef.current === null) {
    const worldNames = Object.keys(entriesGroupByWorldName);
    if (typeof localStorage === 'undefined') {
      initialSelectedWorldNameRef.current = worldNames[0] ?? '';
    } else {
      try {
        const stored = localStorage.getItem('lorebookEditorSelectedWorldName');
        if (stored && worldNames.includes(stored)) {
          initialSelectedWorldNameRef.current = stored;
        }
      } catch {
        /* ignore parse errors */
      }

      if (initialSelectedWorldNameRef.current === null) {
        initialSelectedWorldNameRef.current = worldNames[0] ?? '';
      }
    }
  }

  const initialSelectedWorldName = initialSelectedWorldNameRef.current ?? '';

  const initialMenuTabRef = useRef<MenuTabKey | null>(null);
  if (initialMenuTabRef.current === null) {
    if (typeof localStorage === 'undefined') {
      initialMenuTabRef.current = 'overview';
    } else {
      try {
        const storedTab = localStorage.getItem(MENU_TAB_STORAGE_KEY);
        if (storedTab === 'overview' || storedTab === 'categories') {
          initialMenuTabRef.current = storedTab;
        }
      } catch {
        /* ignore */
      }

      if (initialMenuTabRef.current === null) {
        initialMenuTabRef.current = 'overview';
      }
    }
  }

  const [activeMenuTab, setActiveMenuTab] = useState<MenuTabKey>(initialMenuTabRef.current ?? 'overview');
  useEffect(() => {
    if (typeof localStorage === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(MENU_TAB_STORAGE_KEY, activeMenuTab);
    } catch {
      /* ignore */
    }
  }, [activeMenuTab]);
  const [selectedWorldName, setSelectedWorldName] = useState(initialSelectedWorldName);
  const activeWorld = selectedWorldName;
  const activeCategoryState = activeWorld ? categoryStorage[activeWorld] : undefined;
  const activeCategoryAssignments = activeCategoryState?.entryAssignments ?? EMPTY_CATEGORY_ASSIGNMENTS;
  const activeCategories = activeCategoryState?.categories ?? EMPTY_CATEGORY_STATE.categories;
  const expandedCategoryPanels = activeWorld
    ? (categoryPanelState[activeWorld] ?? EMPTY_EXPANDED_CATEGORY_STATE)
    : EMPTY_EXPANDED_CATEGORY_STATE;
  useEffect(() => {
    if (!activeWorld) {
      return;
    }

    const validIds = new Set(activeCategories.map((category) => category.id));

    setCategoryPanelState((prev) => {
      const expandedForWorld = prev[activeWorld];
      if (!expandedForWorld) {
        return prev;
      }

      let mutated = false;
      const nextExpanded: Record<string, boolean> = {};
      Object.entries(expandedForWorld).forEach(([categoryId, isExpanded]) => {
        if (isExpanded === true && validIds.has(categoryId)) {
          nextExpanded[categoryId] = true;
        } else {
          mutated = true;
        }
      });

      if (!mutated) {
        return prev;
      }

      const nextState = { ...prev };
      if (Object.keys(nextExpanded).length === 0) {
        delete nextState[activeWorld];
      } else {
        nextState[activeWorld] = nextExpanded;
      }
      return nextState;
    });
  }, [activeWorld, activeCategories]);
  const [filterText, setFilterText] = useState('');
  const [isFiltersMenuOpen, setIsFiltersMenuOpen] = useState(false);
  const [selectedFirstWordKeys, setSelectedFirstWordKeys] = useState<Set<string>>(() => {
    if (!initialSelectedWorldName) {
      return new Set();
    }

    const storedKeys = firstWordFiltersRef.current?.[initialSelectedWorldName] ?? [];
    return new Set(storedKeys);
  });
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [expandedCompactEntryIds, setExpandedCompactEntryIds] = useState<Set<string>>(() => new Set());
  const lastSelectedIdRef = useRef<string | null>(null);
  const [dirtyIds, setDirtyIds] = useState<Set<string>>(() => {
    if (typeof localStorage === 'undefined') return new Set();
    try {
      const stored = JSON.parse(localStorage.getItem('lorebookEditorDirtyIds') || '[]') as string[];
      return new Set(
        stored.filter((id) => {
          const [world, uidStr] = id.split('::');
          const uid = Number(uidStr);
          return entriesGroupByWorldName[world]?.some((e) => e.uid === uid);
        }),
      );
    } catch {
      return new Set();
    }
  });
  const [bulkPosition, setBulkPosition] = useState<number | undefined>(undefined);
  const [bulkDepth, setBulkDepth] = useState<number | null>(null);
  const [bulkRoleAtDepth, setBulkRoleAtDepth] = useState<number | null>(null);
  const [bulkOrderStart, setBulkOrderStart] = useState<number | undefined>(undefined);
  const [bulkOrderDirection, setBulkOrderDirection] = useState<'asc' | 'desc'>('asc');
  const [bulkCommentPrefix, setBulkCommentPrefix] = useState('');
  const [bulkCommentSuffix, setBulkCommentSuffix] = useState('');
  const [bulkCommentMode, setBulkCommentMode] = useState<'keep' | 'replace'>('keep');
  const [bulkCommentReplacement, setBulkCommentReplacement] = useState('');
  const [bulkCommentTrimMode, setBulkCommentTrimMode] = useState<'none' | 'start' | 'end'>('none');
  const [bulkCommentTrimCount, setBulkCommentTrimCount] = useState('');
  const [bulkCommentNumberingEnabled, setBulkCommentNumberingEnabled] = useState(
    () => bulkCommentNumberingPrefsRef.current?.enabled ?? false,
  );
  const [bulkCommentNumberStart, setBulkCommentNumberStart] = useState(
    () => bulkCommentNumberingPrefsRef.current?.start ?? '1',
  );
  const [bulkCommentNumberDirection, setBulkCommentNumberDirection] = useState<'asc' | 'desc'>(() =>
    bulkCommentNumberingPrefsRef.current?.direction === 'desc' ? 'desc' : 'asc',
  );
  const [openBulkSections, setOpenBulkSections] = useState<Record<BulkSectionKey, boolean>>(() => {
    const stored = readLocalStorageJSON<Partial<Record<BulkSectionKey, boolean>>>(
      BULK_SECTIONS_STORAGE_KEY,
      DEFAULT_BULK_SECTION_STATE,
    );
    return sanitizeBulkSectionState(stored);
  });

  useEffect(() => {
    setSelectedCategoryFilters(() => new Set());
  }, [selectedWorldName]);

  const overviewTabId = useId();
  const categoriesTabId = useId();
  const overviewPanelId = useId();
  const categoriesPanelId = useId();
  const filtersPanelId = useId();
  const filtersDrawerPanelId = useId();
  const bulkPanelId = useId();
  const bulkCommentsPanelId = useId();
  const bulkOrderPanelId = useId();
  const bulkPositionPanelId = useId();
  const categoryFilterHeadingId = useId();
  const firstWordFilterHeadingId = useId();

  const handleBulkSectionToggle = (section: BulkSectionKey) => {
    setOpenBulkSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    writeLocalStorageJSON(BULK_SECTIONS_STORAGE_KEY, openBulkSections);
  }, [openBulkSections]);

  const handleCreateCategory = useCallback(
    (rawName: string) => {
      const worldName = selectedWorldName;
      if (!worldName) {
        st_echo('warning', 'Select a lorebook before adding categories.');
        return false;
      }

      const trimmed = rawName.trim();
      if (!trimmed) {
        st_echo('warning', 'Enter a category name before adding it.');
        return false;
      }

      const categoriesForWorld = categoryStorageRef.current?.[worldName]?.categories ?? [];
      const duplicate = categoriesForWorld.some(
        (category) => category.name.toLocaleLowerCase() === trimmed.toLocaleLowerCase(),
      );
      if (duplicate) {
        st_echo('warning', `Category "${trimmed}" already exists in ${worldName}.`);
        return false;
      }

      updateCategoryStorageForWorld(
        worldName,
        (state) => ({
          categories: [...state.categories, { id: createCategoryId(), name: trimmed }],
          entryAssignments: { ...state.entryAssignments },
        }),
        { alsoUpdateSaved: true },
      );
      st_echo('success', `Added category "${trimmed}" to ${worldName}.`);
      return true;
    },
    [selectedWorldName, updateCategoryStorageForWorld],
  );

  const handleRenameCategory = (worldName: string, categoryId: string, newName: string) => {
    const trimmed = newName.trim();
    if (!trimmed) {
      st_echo('warning', 'Category name cannot be empty.');
      return;
    }

    const worldState = categoryStorage[worldName];
    if (!worldState) {
      return;
    }

    const index = worldState.categories.findIndex((category) => category.id === categoryId);
    if (index === -1) {
      return;
    }

    const trimmedLower = trimmed.toLocaleLowerCase();
    const duplicate = worldState.categories.some(
      (category, idx) => idx !== index && category.name.toLocaleLowerCase() === trimmedLower,
    );
    if (duplicate) {
      st_echo('warning', `Category "${trimmed}" already exists in ${worldName}.`);
      return;
    }

    if (worldState.categories[index].name === trimmed) {
      return;
    }

    let renamed = false;
    updateCategoryStorageForWorld(worldName, (state) => {
      const targetIndex = state.categories.findIndex((category) => category.id === categoryId);
      if (targetIndex === -1) {
        return state;
      }

      const conflict = state.categories.some(
        (category, idx) => idx !== targetIndex && category.name.toLocaleLowerCase() === trimmedLower,
      );
      if (conflict) {
        return state;
      }

      if (state.categories[targetIndex].name === trimmed) {
        return state;
      }

      const nextCategories = [...state.categories];
      nextCategories[targetIndex] = { ...nextCategories[targetIndex], name: trimmed };
      renamed = true;
      return { ...state, categories: nextCategories };
    }, { alsoUpdateSaved: true });

    if (renamed) {
      st_echo('success', `Renamed category to "${trimmed}".`);
    }
  };

  const handleUpdateCategoryIcon = (worldName: string, categoryId: string, iconValue: string) => {
    const sanitized = sanitizeCategoryIcon(iconValue);

    updateCategoryStorageForWorld(worldName, (state) => {
      const index = state.categories.findIndex((category) => category.id === categoryId);
      if (index === -1) {
        return state;
      }

      const current = sanitizeCategoryIcon(state.categories[index].icon);
      if (current === sanitized) {
        return state;
      }

      const nextCategories = [...state.categories];
      const updatedCategory = { ...nextCategories[index] };
      if (sanitized) {
        updatedCategory.icon = sanitized;
      } else {
        delete updatedCategory.icon;
      }

      nextCategories[index] = updatedCategory;
      return { ...state, categories: nextCategories };
    }, { alsoUpdateSaved: true });
  };

  const handleUpdateCategoryColor = (worldName: string, categoryId: string, colorValue: string) => {
    const sanitized = sanitizeCategoryColor(colorValue);

    updateCategoryStorageForWorld(worldName, (state) => {
      const index = state.categories.findIndex((category) => category.id === categoryId);
      if (index === -1) {
        return state;
      }

      const current = sanitizeCategoryColor(state.categories[index].color);
      if (current === sanitized) {
        return state;
      }

      const nextCategories = [...state.categories];
      const updatedCategory = { ...nextCategories[index] };
      if (sanitized) {
        updatedCategory.color = sanitized;
      } else {
        delete updatedCategory.color;
      }

      nextCategories[index] = updatedCategory;
      return { ...state, categories: nextCategories };
    }, { alsoUpdateSaved: true });
  };

  const handleDeleteCategory = (worldName: string, categoryId: string) => {
    const worldState = categoryStorage[worldName];
    const removedCategory = worldState?.categories.find((category) => category.id === categoryId);
    let removed = false;

    updateCategoryStorageForWorld(worldName, (state) => {
      const nextCategories = state.categories.filter((category) => category.id !== categoryId);
      if (nextCategories.length === state.categories.length) {
        return state;
      }

      const nextAssignments: Record<number, string> = {};
      Object.entries(state.entryAssignments).forEach(([uidKey, assignedId]) => {
        const uid = Number(uidKey);
        if (!Number.isFinite(uid)) {
          return;
        }
        if (assignedId !== categoryId) {
          nextAssignments[uid] = assignedId;
        }
      });

      removed = true;

      if (nextCategories.length === 0 && Object.keys(nextAssignments).length === 0) {
        return null;
      }

      return { categories: nextCategories, entryAssignments: nextAssignments };
    }, { alsoUpdateSaved: true });

    if (removedCategory && removed) {
      st_echo('info', `Removed category "${removedCategory.name}" from ${worldName}.`);
    }

    setSelectedCategoryFilters((prev) => {
      if (!prev.has(categoryId)) {
        return prev;
      }
      const next = new Set(prev);
      next.delete(categoryId);
      return next;
    });
  };

  const toggleCategoryFilter = useCallback(
    (categoryId: string) => {
      if (!activeWorld) {
        return;
      }
      setSelectedCategoryFilters((prev) => {
        const next = new Set(prev);
        if (next.has(categoryId)) {
          next.delete(categoryId);
        } else {
          next.add(categoryId);
        }
        return next;
      });
    },
    [activeWorld],
  );

  const setCategoryFilterState = useCallback(
    (categoryId: string, isActive: boolean) => {
      if (!activeWorld) {
        return;
      }
      setSelectedCategoryFilters((prev) => {
        const next = new Set(prev);
        if (isActive) {
          next.add(categoryId);
        } else {
          next.delete(categoryId);
        }
        return next;
      });
    },
    [activeWorld],
  );

  const clearCategoryFilters = useCallback(() => {
    setSelectedCategoryFilters(() => new Set());
  }, []);

  const computeDirtyStatus = (
    worldName: string,
    entryUid: number,
    updatedEntry: ExtendedWIEntry,
    originalEntry: ExtendedWIEntry | null,
    originalUid: number,
    currentAssignments: Record<number, string>,
    savedAssignments: Record<number, string>,
  ): boolean => {
    const currentAssignment = currentAssignments[entryUid] ?? null;
    const savedAssignment =
      savedAssignments[entryUid] ??
      (entryUid !== originalUid ? savedAssignments[originalUid] : undefined) ??
      null;

    if (originalEntry === null) {
      return true;
    }

    const hasEntryChanges =
      originalEntry.comment !== updatedEntry.comment ||
      originalEntry.content !== updatedEntry.content ||
      JSON.stringify(originalEntry.key) !== JSON.stringify(updatedEntry.key) ||
      originalEntry.uid !== updatedEntry.uid ||
      (originalEntry.order ?? null) !== (updatedEntry.order ?? null) ||
      (originalEntry.position ?? null) !== (updatedEntry.position ?? null) ||
      (originalEntry.depth ?? null) !== (updatedEntry.depth ?? null) ||
      (originalEntry.roleAtDepth ?? null) !== (updatedEntry.roleAtDepth ?? null);

    const hasCategoryChange = currentAssignment !== savedAssignment;

    return hasEntryChanges || hasCategoryChange;
  };

  const handleEntryCategoryChange = useCallback(
    (worldName: string, uid: number, nextCategoryId: string | null) => {
      const selectionKey = `${worldName}::${uid}`;
      const targetUids = new Set<number>([uid]);

      if (selectedIds.has(selectionKey) && selectedIds.size > 1) {
        selectedIds.forEach((id) => {
          if (id === selectionKey) {
            return;
          }
          const [selectedWorld, rawUid] = id.split('::');
          if (selectedWorld !== worldName) {
            return;
          }

          const parsedUid = Number(rawUid);
          if (Number.isFinite(parsedUid)) {
            targetUids.add(parsedUid);
          }
        });
      }

      const normalizedCategoryId = nextCategoryId && nextCategoryId !== '' ? nextCategoryId : null;

      setCategoryStorage((prev) => {
        const existingState = prev[worldName] ?? createEmptyCategoryState();
        const assignments = { ...existingState.entryAssignments };
        const savedAssignments =
          savedCategoryStorageRef.current[worldName]?.entryAssignments ?? EMPTY_CATEGORY_ASSIGNMENTS;
        const dirtyTargets: number[] = [];

        let mutated = false;
        targetUids.forEach((targetUid) => {
          const currentValue = assignments[targetUid] ?? null;

          if (normalizedCategoryId === null) {
            if (currentValue != null) {
              delete assignments[targetUid];
              mutated = true;
              dirtyTargets.push(targetUid);
            }
            return;
          }

          if (currentValue === normalizedCategoryId) {
            return;
          }

          assignments[targetUid] = normalizedCategoryId;
          mutated = true;
          dirtyTargets.push(targetUid);
        });

        if (!mutated) {
          return prev;
        }

        const nextWorldState: LorebookCategoryWorldState = {
          categories: existingState.categories,
          entryAssignments: assignments,
        };

        const nextStorage: LorebookCategoryStorage = { ...prev };
        if (nextWorldState.categories.length === 0 && Object.keys(assignments).length === 0) {
          delete nextStorage[worldName];
        } else {
          nextStorage[worldName] = nextWorldState;
        }

        const worldAssignments = nextWorldState.entryAssignments;

        setDirtyIds((prevDirty) => {
          if (dirtyTargets.length === 0) {
            return prevDirty;
          }

          const nextDirty = new Set(prevDirty);
          dirtyTargets.forEach((targetUid) => {
            const entry = draftEntriesRef.current?.[worldName]?.find((e) => e.uid === targetUid);
            if (!entry) {
              return;
            }

            const originalWorldMap = originalUidMapRef.current?.[worldName];
            const originalUid = originalWorldMap?.get(targetUid) ?? targetUid;
            const originalEntry =
              entriesGroupByWorldName[worldName]?.find((item) => item.uid === originalUid) ?? null;

            const key = `${worldName}::${targetUid}`;
            const isDirty = computeDirtyStatus(
              worldName,
              targetUid,
              entry,
              originalEntry,
              originalUid,
              worldAssignments,
              savedAssignments,
            );

            if (isDirty) {
              nextDirty.add(key);
            } else {
              nextDirty.delete(key);
            }
          });

          return nextDirty;
        });

        return nextStorage;
      });
    },
    [entriesGroupByWorldName, selectedIds, computeDirtyStatus],
  );

  useEffect(() => {
    const prefs: StoredBulkCommentNumberingPreferences = {
      enabled: bulkCommentNumberingEnabled,
      start: bulkCommentNumberStart,
      direction: bulkCommentNumberDirection,
    };
    bulkCommentNumberingPrefsRef.current = prefs;
    writeLocalStorageJSON(BULK_COMMENT_NUMBERING_STORAGE_KEY, prefs);
  }, [bulkCommentNumberingEnabled, bulkCommentNumberStart, bulkCommentNumberDirection]);

  const PAGE_SIZES = [10, 50, 100, 250];
  const pageSizeItems = useMemo<FancyDropdownItem[]>(
    () => PAGE_SIZES.map((size) => ({ value: String(size), label: `${size}/page` })),
    [],
  );
  const [pageSize, setPageSize] = useState(() => {
    const storedSize = readLocalStorageNumber(PAGE_SIZE_STORAGE_KEY, PAGE_SIZES[0]);
    return PAGE_SIZES.includes(storedSize) ? storedSize : PAGE_SIZES[0];
  });
  const [page, setPage] = useState(() => {
    if (!initialSelectedWorldName) {
      return 0;
    }

    const storedPage = paginationRef.current?.[initialSelectedWorldName];
    if (typeof storedPage === 'number' && Number.isFinite(storedPage) && storedPage >= 0) {
      return Math.floor(storedPage);
    }

    return 0;
  });

  const sortDropdownItems = useMemo<FancyDropdownItem[]>(
    () => [
      { value: 'custom', label: 'Custom' },
      { value: 'name-asc', label: 'Name ↗' },
      { value: 'name-desc', label: 'Name ↙' },
      { value: 'uid-asc', label: 'UID ↗' },
      { value: 'uid-desc', label: 'UID ↙' },
      { value: 'order-asc', label: 'Order ↗' },
      { value: 'order-desc', label: 'Order ↙' },
      { value: 'date-asc', label: 'Date ↗' },
      { value: 'date-desc', label: 'Date ↙' },
    ],
    [],
  );
  const [sortSelection, setSortSelection] = useState<SortSelection | ''>(() => {
    if (typeof localStorage === 'undefined') {
      return '';
    }

    const stored = localStorage.getItem(SORT_SELECTION_STORAGE_KEY);
    return sanitizeSortSelectionValue(stored);
  });

  const handleRefreshEntries = useCallback(() => {
    if (!onRefreshEntries) {
      return;
    }

    void onRefreshEntries();
  }, [onRefreshEntries]);

  useEffect(() => {
    if (typeof localStorage === 'undefined') return;
    const draftsToSave: Record<string, ExtendedWIEntry[]> = {};
    dirtyIds.forEach((id) => {
      const [world, uidStr] = id.split('::');
      const uid = Number(uidStr);
      const entry = draftEntries[world]?.find((e) => e.uid === uid);
      if (entry) {
        if (!draftsToSave[world]) draftsToSave[world] = [];
        draftsToSave[world].push(entry);
      }
    });
    localStorage.setItem('lorebookEditorDrafts', JSON.stringify(draftsToSave));
    localStorage.setItem('lorebookEditorDirtyIds', JSON.stringify(Array.from(dirtyIds)));
    localStorage.setItem('lorebookEditorSelectedWorldName', selectedWorldName);
  }, [draftEntries, dirtyIds, selectedWorldName]);

  const worldDropdownItems = useMemo(
    (): FancyDropdownItem[] => Object.keys(entriesGroupByWorldName).map((name) => ({ value: name, label: name })),
    [entriesGroupByWorldName],
  );

  const textFilteredEntries = useMemo(() => {
    const worldName = selectedWorldName;
    if (!worldName) return [];
    const lowercasedFilter = filterText.toLowerCase();
    const entries = draftEntries[worldName] || [];
    return entries.filter((entry) => {
      if (!lowercasedFilter) return true;
      return (
        (entry.comment || '').toLowerCase().includes(lowercasedFilter) ||
        worldName.toLowerCase().includes(lowercasedFilter)
      );
    });
  }, [filterText, draftEntries, selectedWorldName]);

  const categoryFilteredEntries = useMemo(() => {
    if (selectedCategoryFilters.size === 0) {
      return textFilteredEntries;
    }

    const includeUncategorized = selectedCategoryFilters.has(UNCATEGORIZED_FILTER_VALUE);
    return textFilteredEntries.filter((entry) => {
      const assignment = activeCategoryAssignments[entry.uid];
      if (assignment == null) {
        return includeUncategorized;
      }
      return selectedCategoryFilters.has(assignment);
    });
  }, [activeCategoryAssignments, selectedCategoryFilters, textFilteredEntries]);

  const firstWordReferenceEntries = useMemo(() => {
    const worldName = selectedWorldName;
    if (!worldName) {
      return categoryFilteredEntries;
    }

    const originalEntries = entriesGroupByWorldName[worldName] ?? [];
    if (originalEntries.length === 0) {
      return categoryFilteredEntries;
    }

    const originalUidMapForWorld = originalUidMapRef.current?.[worldName];
    return buildFirstWordReferenceEntries(categoryFilteredEntries, originalEntries, originalUidMapForWorld);
  }, [categoryFilteredEntries, entriesGroupByWorldName, selectedWorldName]);

  const firstWordGrouping = useMemo(
    () => buildFirstWordGrouping(firstWordReferenceEntries),
    [firstWordReferenceEntries],
  );

  const repeatedFirstWordGroups = useMemo(() => {
    const groups: FirstWordGroup[] = [];
    firstWordGrouping.groups.forEach((group) => {
      if (group.count > 1) {
        groups.push(group);
      }
    });
    return groups.sort((a, b) => naturalNameCollator.compare(a.label, b.label));
  }, [firstWordGrouping]);

  const uniqueFirstWordGroups = useMemo(() => {
    const groups: FirstWordGroup[] = [];
    firstWordGrouping.groups.forEach((group) => {
      if (group.count === 1) {
        groups.push(group);
      }
    });
    return groups.sort((a, b) => naturalNameCollator.compare(a.label, b.label));
  }, [firstWordGrouping]);

  const hasSelectedRepeatedFirstWords = useMemo(
    () => repeatedFirstWordGroups.some((group) => selectedFirstWordKeys.has(group.key)),
    [repeatedFirstWordGroups, selectedFirstWordKeys],
  );

  const hasSelectedUniqueFirstWords = useMemo(
    () => uniqueFirstWordGroups.some((group) => selectedFirstWordKeys.has(group.key)),
    [uniqueFirstWordGroups, selectedFirstWordKeys],
  );

  const filteredEntries = useMemo(() => {
    const firstWordFiltered = filterEntriesByFirstWord(
      categoryFilteredEntries,
      firstWordGrouping,
      selectedFirstWordKeys,
    );

    if (!activeWorld || dirtyIds.size === 0) {
      return firstWordFiltered;
    }

    const dirtyPrefix = `${activeWorld}::`;
    const dirtyUids = new Set<number>();
    dirtyIds.forEach((dirtyId) => {
      if (!dirtyId.startsWith(dirtyPrefix)) {
        return;
      }
      const [, uidText] = dirtyId.split('::');
      const parsedUid = Number(uidText);
      if (Number.isFinite(parsedUid)) {
        dirtyUids.add(parsedUid);
      }
    });

    if (dirtyUids.size === 0) {
      return firstWordFiltered;
    }

    const dirtyEntries: ExtendedWIEntry[] = [];
    const cleanEntries: ExtendedWIEntry[] = [];
    firstWordFiltered.forEach((entry) => {
      if (dirtyUids.has(entry.uid)) {
        dirtyEntries.push(entry);
      } else {
        cleanEntries.push(entry);
      }
    });

    if (dirtyEntries.length === 0) {
      return firstWordFiltered;
    }

    return [...dirtyEntries, ...cleanEntries];
  }, [categoryFilteredEntries, firstWordGrouping, selectedFirstWordKeys, activeWorld, dirtyIds]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filterText.trim()) {
      count += 1;
    }
    if (selectedCategoryFilters.size > 0) {
      count += 1;
    }
    if (selectedFirstWordKeys.size > 0) {
      count += 1;
    }
    return count;
  }, [filterText, selectedCategoryFilters, selectedFirstWordKeys]);

  useEffect(() => {
    setSelectedFirstWordKeys((prev) => {
      if (prev.size === 0) {
        return prev;
      }
      let mutated = false;
      const next = new Set<string>();
      prev.forEach((key) => {
        if (firstWordGrouping.groups.has(key)) {
          next.add(key);
        } else {
          mutated = true;
        }
      });
      return mutated ? next : prev;
    });
  }, [firstWordGrouping]);

  const categoryVisualsCacheRef = useRef<Record<string, { icon?: string; color?: string }>>({});
  const categoryVisualsById = useMemo(() => {
    const previous = categoryVisualsCacheRef.current;
    const next: Record<string, { icon?: string; color?: string }> = {};
    activeCategories.forEach((category) => {
      const icon = sanitizeCategoryIcon(category.icon);
      const color = sanitizeCategoryColor(category.color);
      const prevVisual = previous[category.id];
      if (prevVisual && prevVisual.icon === icon && prevVisual.color === color) {
        next[category.id] = prevVisual;
      } else {
        const visual: { icon?: string; color?: string } = {};
        if (icon) {
          visual.icon = icon;
        }
        if (color) {
          visual.color = color;
        }
        next[category.id] = visual;
      }
    });
    categoryVisualsCacheRef.current = next;
    return next;
  }, [activeCategories]);
  const categoryOptionsCacheRef = useRef<FancyDropdownItem[]>([]);
  const categoryOptionsForCards = useMemo(() => {
    const next = activeCategories.map((category) => ({
      value: category.id,
      label: category.name,
    }));
    const previous = categoryOptionsCacheRef.current;
    if (
      previous.length === next.length &&
      previous.every((item, index) => item.value === next[index].value && item.label === next[index].label)
    ) {
      return previous;
    }
    categoryOptionsCacheRef.current = next;
    return next;
  }, [activeCategories]);
  const compactCategoryOptionsCacheRef = useRef<{ value: string; label: string }[]>([]);
  const categoryOptionsForCompact = useMemo(() => {
    const next = activeCategories.map((category) => ({
      value: category.id,
      label: category.name,
    }));
    const previous = compactCategoryOptionsCacheRef.current;
    if (
      previous.length === next.length &&
      previous.every((item, index) => item.value === next[index].value && item.label === next[index].label)
    ) {
      return previous;
    }
    compactCategoryOptionsCacheRef.current = next;
    return next;
  }, [activeCategories]);

  useEffect(() => {
    if (!activeWorld) {
      return;
    }

    const validIds = new Set(activeCategories.map((category) => category.id));
    setSelectedCategoryFilters((prev) => {
      if (prev.size === 0) {
        return prev;
      }

      let mutated = false;
      const next = new Set<string>();
      prev.forEach((id) => {
        if (id === UNCATEGORIZED_FILTER_VALUE || validIds.has(id)) {
          next.add(id);
        } else {
          mutated = true;
        }
      });

      return mutated ? next : prev;
    });
  }, [activeCategories, activeWorld]);

  const total = filteredEntries.length;
  const hasCategoryFilters = selectedCategoryFilters.size > 0;
  const isUncategorizedFilterActive = selectedCategoryFilters.has(UNCATEGORIZED_FILTER_VALUE);
  const hasActiveFirstWordFilter = selectedFirstWordKeys.size > 0;
  const isCustomSortActive = sortSelection === 'custom';
  const totalPages = Math.ceil(total / pageSize) || 1;
  const currentPage = Math.min(page, totalPages - 1);
  const start = currentPage * pageSize;
  const pagedEntries = filteredEntries.slice(start, start + pageSize);

  useEffect(() => {
    if (currentPage !== page) {
      setPage(currentPage);
    }
  }, [currentPage, page]);

  useEffect(() => {
    const worldName = selectedWorldName;
    if (!worldName) {
      return;
    }

    if (currentPage !== page) {
      return;
    }

    const sanitizedPage = Number.isFinite(page) && page >= 0 ? Math.floor(page) : 0;
    const currentPages = paginationRef.current ?? {};
    if (currentPages[worldName] === sanitizedPage) {
      return;
    }

    const nextPages = { ...currentPages, [worldName]: sanitizedPage };
    paginationRef.current = nextPages;
    writeLocalStorageJSON(PAGINATION_STORAGE_KEY, nextPages);
  }, [page, currentPage, selectedWorldName]);

  useEffect(() => {
    if (!PAGE_SIZES.includes(pageSize)) {
      return;
    }

    writeLocalStorageValue(PAGE_SIZE_STORAGE_KEY, pageSize.toString());
  }, [pageSize]);

  useEffect(() => {
    if (!sortSelection) {
      if (typeof localStorage === 'undefined') {
        return;
      }

      try {
        localStorage.removeItem(SORT_SELECTION_STORAGE_KEY);
      } catch {
        /* ignore */
      }
      return;
    }

    writeLocalStorageValue(SORT_SELECTION_STORAGE_KEY, sortSelection);
  }, [sortSelection]);

  const totalInActiveWorld = activeWorld ? (draftEntries[activeWorld]?.length ?? 0) : 0;
  const selectedInActiveWorld = activeWorld
    ? Array.from(selectedIds).filter((id) => id.startsWith(`${activeWorld}::`)).length
    : 0;

  const lastBackupMetaText = useMemo(() => {
    if (!lastBackupInfo) {
      return '';
    }

    const pieces = [`Saved ${new Date(lastBackupInfo.timestamp).toLocaleString()}`];
    if (lastBackupInfo.includesUnsavedChanges) {
      pieces.push('includes unsaved changes');
    }

    return pieces.join(' • ');
  }, [lastBackupInfo]);

  const lastBackupLocationHint =
    lastBackupInfo == null
      ? ''
      : `Location: ${lastBackupInfo.location}${
          lastBackupInfo.method === 'download' ? ' (default download folder)' : ''
        }`;

  useEffect(() => {
    setPage((prev) => {
      if (!selectedWorldName) {
        return prev === 0 ? prev : 0;
      }

      const storedPage = paginationRef.current?.[selectedWorldName];
      const nextPage =
        typeof storedPage === 'number' && Number.isFinite(storedPage) && storedPage >= 0 ? Math.floor(storedPage) : 0;

      return prev === nextPage ? prev : nextPage;
    });
  }, [selectedWorldName]);

  useEffect(() => {
    setIsFiltersMenuOpen(false);
    setSelectedFirstWordKeys((prev) => {
      if (!selectedWorldName) {
        return prev.size === 0 ? prev : new Set();
      }

      const storedKeys = firstWordFiltersRef.current?.[selectedWorldName] ?? [];
      const next = new Set(storedKeys);
      if (prev.size === next.size) {
        let identical = true;
        prev.forEach((value) => {
          if (!next.has(value)) {
            identical = false;
          }
        });
        if (identical) {
          return prev;
        }
      }

      return next;
    });
  }, [selectedWorldName]);

  useEffect(() => {
    const worldName = selectedWorldName;
    if (!worldName) {
      return;
    }

    const currentFilters = firstWordFiltersRef.current ?? {};
    if (selectedFirstWordKeys.size === 0) {
      if (!(worldName in currentFilters)) {
        return;
      }

      const nextFilters = { ...currentFilters };
      delete nextFilters[worldName];
      firstWordFiltersRef.current = nextFilters;
      writeLocalStorageJSON(FIRST_WORD_FILTER_STORAGE_KEY, nextFilters);
      return;
    }

    const nextFilters = { ...currentFilters, [worldName]: Array.from(selectedFirstWordKeys) };
    firstWordFiltersRef.current = nextFilters;
    writeLocalStorageJSON(FIRST_WORD_FILTER_STORAGE_KEY, nextFilters);
  }, [selectedFirstWordKeys]);

  const toggleFirstWordKey = (key: string) => {
    setSelectedFirstWordKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const clearRepeatedFirstWordSelection = () => {
    if (!hasSelectedRepeatedFirstWords) {
      return;
    }

    setSelectedFirstWordKeys((prev) => {
      if (prev.size === 0) {
        return prev;
      }

      let mutated = false;
      const next = new Set(prev);
      repeatedFirstWordGroups.forEach((group) => {
        if (next.delete(group.key)) {
          mutated = true;
        }
      });

      return mutated ? next : prev;
    });
  };

  const clearUniqueFirstWordSelection = () => {
    if (!hasSelectedUniqueFirstWords) {
      return;
    }

    setSelectedFirstWordKeys((prev) => {
      if (prev.size === 0) {
        return prev;
      }

      let mutated = false;
      const next = new Set(prev);
      uniqueFirstWordGroups.forEach((group) => {
        if (next.delete(group.key)) {
          mutated = true;
        }
      });

      return mutated ? next : prev;
    });
  };

  const selectFirstWordGroups = (groups: FirstWordGroup[]) => {
    if (groups.length === 0) {
      return;
    }

    setSelectedFirstWordKeys((prev) => {
      let mutated = false;
      const next = new Set(prev);
      groups.forEach((group) => {
        if (!next.has(group.key)) {
          next.add(group.key);
          mutated = true;
        }
      });

      return mutated ? next : prev;
    });
  };

  const selectAllRepeatedFirstWords = () => {
    selectFirstWordGroups(repeatedFirstWordGroups);
  };

  const selectAllUniqueFirstWords = () => {
    selectFirstWordGroups(uniqueFirstWordGroups);
  };

  const sortByName = (direction: SortDirection = 'asc') => {
    if (!activeWorld) return;
    setDraftEntries((prev) => ({
      ...prev,
      [activeWorld]: sortEntriesByName(prev[activeWorld], direction),
    }));
  };

  const sortByUid = (direction: SortDirection = 'asc') => {
    if (!activeWorld) return;
    setDraftEntries((prev) => ({
      ...prev,
      [activeWorld]: sortEntriesByUid(prev[activeWorld], direction),
    }));
  };

  const sortByOrder = (direction: SortDirection = 'asc') => {
    if (!activeWorld) return;
    setDraftEntries((prev) => ({
      ...prev,
      [activeWorld]: sortEntriesByOrder(prev[activeWorld], direction),
    }));
  };

  const sortByDate = (direction: SortDirection = 'asc') => {
    if (!activeWorld) return;
    setDraftEntries((prev) => ({
      ...prev,
      [activeWorld]: sortEntriesByDate(prev[activeWorld], direction),
    }));
  };

  const sortByCustom = () => {
    if (!activeWorld) return;
    const entries = draftEntries[activeWorld] ?? [];
    let orderForWorld = customOrderByWorld[activeWorld];

    if (!orderForWorld || orderForWorld.length === 0) {
      const derivedOrder = entries.map((entry) => entry.uid);
      orderForWorld = derivedOrder;
      setCustomOrderByWorld((prev) => ({ ...prev, [activeWorld]: derivedOrder }));
    } else {
      const known = new Set(orderForWorld);
      const additionalUids = entries.map((entry) => entry.uid).filter((uid) => !known.has(uid));
      if (additionalUids.length > 0) {
        const updatedOrder = [...orderForWorld, ...additionalUids];
        orderForWorld = updatedOrder;
        setCustomOrderByWorld((prev) => ({ ...prev, [activeWorld]: updatedOrder }));
      }
    }

    setDraftEntries((prev) => ({
      ...prev,
      [activeWorld]: sortEntriesByCustom(prev[activeWorld], orderForWorld ?? []),
    }));
  };

  const applySortSelection = (selection: SortSelection) => {
    if (selection === 'custom') {
      sortByCustom();
      return;
    }

    const config = SORT_SELECTION_CONFIG[selection];
    if (!config) {
      return;
    }

    switch (config.key) {
      case 'name':
        sortByName(config.direction);
        break;
      case 'uid':
        sortByUid(config.direction);
        break;
      case 'order':
        sortByOrder(config.direction);
        break;
      case 'date':
        sortByDate(config.direction);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!activeWorld || !sortSelection) {
      return;
    }

    applySortSelection(sortSelection);
  }, [sortSelection, activeWorld]);

  const updateEntry = useCallback(
    (worldName: string, uid: number, changes: Partial<ExtendedWIEntry>) => {
      const newUid = changes.uid ?? uid;

      setDraftEntries((prev) => {
        const worldEntries = prev[worldName];
        if (!worldEntries) {
          return prev;
        }

        const entryIndex = worldEntries.findIndex((entry) => entry.uid === uid);
        if (entryIndex === -1) {
          return prev;
        }

        const updatedEntry = { ...worldEntries[entryIndex], ...changes };
        const updatedWorldEntries = [...worldEntries];
        updatedWorldEntries[entryIndex] = updatedEntry;

        const oldId = `${worldName}::${uid}`;
        const newId = `${worldName}::${newUid}`;

        const originalMaps = originalUidMapRef.current ?? {};
        let worldMap = originalMaps[worldName];
        if (!worldMap) {
          worldMap = new Map<number, number>();
          originalMaps[worldName] = worldMap;
        }

        const originalUidForEntry = worldMap.get(uid) ?? uid;
        const originalEntry =
          entriesGroupByWorldName[worldName]?.find((entry) => entry.uid === originalUidForEntry) ?? null;

        const currentAssignments =
          categoryStorageRef.current[worldName]?.entryAssignments ?? EMPTY_CATEGORY_ASSIGNMENTS;
        const savedAssignments =
          savedCategoryStorageRef.current[worldName]?.entryAssignments ?? EMPTY_CATEGORY_ASSIGNMENTS;

        const isDirty = computeDirtyStatus(
          worldName,
          newUid,
          updatedEntry,
          originalEntry,
          originalUidForEntry,
          currentAssignments,
          savedAssignments,
        );

        setDirtyIds((prevDirty) => {
          const newSet = new Set(prevDirty);
          newSet.delete(oldId);
          if (isDirty) {
            newSet.add(newId);
          }
          return newSet;
        });

        setSelectedIds((prevSelected) => {
          const newSet = new Set(prevSelected);
          if (newSet.has(oldId)) {
            newSet.delete(oldId);
            newSet.add(newId);
          }
          return newSet;
        });

        setExpandedCompactEntryIds((prevExpanded) => {
          if (oldId === newId || !prevExpanded.has(oldId)) {
            return prevExpanded;
          }

          const next = new Set(prevExpanded);
          next.delete(oldId);
          next.add(newId);
          return next;
        });

        setCustomOrderByWorld((prevOrder) => {
          const entryUids = updatedWorldEntries.map((entry) => entry.uid);
          const existingOrder = prevOrder[worldName];
          if (!existingOrder) {
            return { ...prevOrder, [worldName]: entryUids };
          }

          let mutated = false;
          let workingOrder: number[];
          if (uid !== newUid) {
            workingOrder = existingOrder.map((entryUid) => {
              if (entryUid === uid) {
                if (entryUid !== newUid) {
                  mutated = true;
                }
                return newUid;
              }
              return entryUid;
            });
          } else {
            workingOrder = [...existingOrder];
          }

          const validUids = new Set(entryUids);
          const seen = new Set<number>();
          const dedupedOrder: number[] = [];
          workingOrder.forEach((entryUid) => {
            if (!validUids.has(entryUid)) {
              mutated = true;
              return;
            }
            if (seen.has(entryUid)) {
              mutated = true;
              return;
            }
            seen.add(entryUid);
            dedupedOrder.push(entryUid);
          });

          entryUids.forEach((entryUid) => {
            if (!seen.has(entryUid)) {
              dedupedOrder.push(entryUid);
              seen.add(entryUid);
              mutated = true;
            }
          });

          const unchanged =
            !mutated &&
            dedupedOrder.length === existingOrder.length &&
            dedupedOrder.every((value, index) => value === existingOrder[index]);

          if (unchanged) {
            return prevOrder;
          }

          return { ...prevOrder, [worldName]: dedupedOrder };
        });

        if (uid !== newUid) {
          const trackedOriginalUid = worldMap.get(uid) ?? originalUidForEntry;
          worldMap.delete(uid);
          worldMap.set(newUid, trackedOriginalUid);
        } else if (!worldMap.has(uid)) {
          worldMap.set(uid, originalUidForEntry);
        }
        originalUidMapRef.current = originalMaps;

        return { ...prev, [worldName]: updatedWorldEntries };
      });

      if (uid !== newUid) {
        updateCategoryStorageForWorld(worldName, (state) => {
          const categoryId = state.entryAssignments[uid];
          if (categoryId == null) {
            return state;
          }

          const assignments = { ...state.entryAssignments };
          delete assignments[uid];
          assignments[newUid] = categoryId;
          return { ...state, entryAssignments: assignments };
        });
      }
    },
    [entriesGroupByWorldName, updateCategoryStorageForWorld],
  );

  const getBulkAssignableChanges = (changes: Partial<ExtendedWIEntry>): Partial<ExtendedWIEntry> | null => {
    const bulkChanges: Partial<ExtendedWIEntry> = {};
    let mutated = false;

    if ('constant' in changes) {
      bulkChanges.constant = changes.constant;
      mutated = true;
    }

    if ('vectorized' in changes) {
      bulkChanges.vectorized = changes.vectorized;
      mutated = true;
    }

    if ('position' in changes) {
      bulkChanges.position = changes.position;
      mutated = true;
    }

    if ('depth' in changes) {
      bulkChanges.depth = changes.depth ?? null;
      mutated = true;
    }

    if ('roleAtDepth' in changes) {
      bulkChanges.roleAtDepth = changes.roleAtDepth ?? null;
      mutated = true;
    }

    return mutated ? bulkChanges : null;
  };

  const handleEntryChange = useCallback(
    (worldName: string, uid: number, changes: Partial<ExtendedWIEntry>) => {
      updateEntry(worldName, uid, changes);

      const bulkChanges = getBulkAssignableChanges(changes);
      if (!bulkChanges) {
        return;
      }

      const selectionKey = `${worldName}::${uid}`;
      if (!selectedIds.has(selectionKey) || selectedIds.size <= 1) {
        return;
      }

      selectedIds.forEach((id) => {
        if (id === selectionKey) {
          return;
        }

        const [selectedWorld, rawUid] = id.split('::');
        if (selectedWorld !== worldName) {
          return;
        }

        const parsedUid = Number(rawUid);
        if (!Number.isFinite(parsedUid)) {
          return;
        }

        updateEntry(worldName, parsedUid, bulkChanges);
      });
    },
    [selectedIds, updateEntry],
  );

  const handleAssignOrderRange = useCallback(
    (worldName: string, anchorUid: number, startValue: number, endValue: number) => {
      const selectionPrefix = `${worldName}::`;
      const selectedUids = new Set<number>();

      selectedIds.forEach((id) => {
        if (!id.startsWith(selectionPrefix)) {
          return;
        }

        const [, uidText] = id.split('::');
        const parsedUid = Number(uidText);
        if (Number.isFinite(parsedUid)) {
          selectedUids.add(parsedUid);
        }
      });

      selectedUids.add(anchorUid);

      if (selectedUids.size === 0) {
        return;
      }

      const orderedEntries: ExtendedWIEntry[] = [];
      const seenUids = new Set<number>();

      filteredEntries.forEach((entry) => {
        if (!selectedUids.has(entry.uid) || seenUids.has(entry.uid)) {
          return;
        }

        orderedEntries.push(entry);
        seenUids.add(entry.uid);
      });

      if (orderedEntries.length < selectedUids.size) {
        const worldEntries = draftEntriesRef.current?.[worldName] ?? [];
        worldEntries.forEach((entry) => {
          if (!selectedUids.has(entry.uid) || seenUids.has(entry.uid)) {
            return;
          }

          orderedEntries.push(entry);
          seenUids.add(entry.uid);
        });
      }

      if (orderedEntries.length === 0) {
        return;
      }

      const step = endValue >= startValue ? 1 : -1;

      orderedEntries.forEach((entry, index) => {
        const nextOrder = startValue + index * step;
        updateEntry(worldName, entry.uid, { order: nextOrder });
      });
    },
    [filteredEntries, selectedIds, updateEntry],
  );

  useEffect(() => {
    lastSelectedIdRef.current = null;
  }, [selectedWorldName]);

  const handleToggleEntry = useCallback(
    (
      worldName: string,
      uid: number,
      event?: ChangeEvent<HTMLInputElement>,
      options?: { shiftKey?: boolean; exclusive?: boolean },
    ) => {
      const id = `${worldName}::${uid}`;
      if (options?.exclusive) {
        setSelectedIds(new Set([id]));
        lastSelectedIdRef.current = id;
        return;
      }

      const shouldSelect = event ? event.currentTarget.checked : !selectedIds.has(id);
      const nativeEvent = event?.nativeEvent as Event & { shiftKey?: boolean };
      const shiftKey = options?.shiftKey ?? Boolean(nativeEvent?.shiftKey);

      if (!shiftKey || worldName !== activeWorld) {
        setSelectedIds((prev) => {
          const newSet = new Set(prev);
          if (shouldSelect) {
            newSet.add(id);
          } else {
            newSet.delete(id);
          }
          return newSet;
        });
        lastSelectedIdRef.current = id;
        return;
      }

      const entries = filteredEntries;
      const targetIndex = entries.findIndex((entry) => entry.uid === uid);
      const lastId = lastSelectedIdRef.current;
      const lastIndex =
        lastId && lastId.startsWith(`${worldName}::`)
          ? entries.findIndex((entry) => `${worldName}::${entry.uid}` === lastId)
          : -1;

      if (targetIndex === -1) {
        setSelectedIds((prev) => {
          const newSet = new Set(prev);
          if (shouldSelect) {
            newSet.add(id);
          } else {
            newSet.delete(id);
          }
          return newSet;
        });
        lastSelectedIdRef.current = id;
        return;
      }

      const startIndex = lastIndex === -1 ? targetIndex : Math.min(lastIndex, targetIndex);
      const endIndex = lastIndex === -1 ? targetIndex : Math.max(lastIndex, targetIndex);

      setSelectedIds((prev) => {
        const newSet = new Set(prev);
        for (let index = startIndex; index <= endIndex; index += 1) {
          const entryId = `${worldName}::${entries[index].uid}`;
          if (shouldSelect) {
            newSet.add(entryId);
          } else {
            newSet.delete(entryId);
          }
        }
        return newSet;
      });

      lastSelectedIdRef.current = id;
    },
    [activeWorld, filteredEntries, selectedIds],
  );

  const handleToggleCompactEntryExpanded = useCallback(
    (worldName: string, uid: number, nextExpanded: boolean) => {
      const targetId = `${worldName}::${uid}`;
      const idsToUpdate: string[] = [];

      if (selectedIds.size > 1 && selectedIds.has(targetId)) {
        selectedIds.forEach((id) => {
          if (id.startsWith(`${worldName}::`)) {
            idsToUpdate.push(id);
          }
        });
      }

      if (idsToUpdate.length === 0) {
        idsToUpdate.push(targetId);
      }

      setExpandedCompactEntryIds((prev) => {
        let mutated = false;
        const next = new Set(prev);

        idsToUpdate.forEach((id) => {
          if (nextExpanded) {
            if (!next.has(id)) {
              next.add(id);
              mutated = true;
            }
          } else if (next.delete(id)) {
            mutated = true;
          }
        });

        return mutated ? next : prev;
      });
    },
    [selectedIds],
  );

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const menuScrollRef = useRef<HTMLDivElement | null>(null);
  const selectAllCheckboxRef = useRef<HTMLInputElement>(null);
  const worldGroupRef = useRef<HTMLDivElement>(null);
  const categoryOrderSignature = useMemo(
    () => activeCategories.map((category) => category.id).join('|'),
    [activeCategories],
  );

  useLayoutEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const sidebarElement = sidebarRef.current;
    if (!sidebarElement) {
      return;
    }

    let frameId: number | null = null;
    let lastMaxHeight = -1;

    const parseNumeric = (value: string | null) => {
      if (!value) {
        return 0;
      }

      const parsed = Number.parseFloat(value);
      return Number.isFinite(parsed) ? parsed : 0;
    };

    const updateSidebarConstraints = () => {
      frameId = null;
      const element = sidebarRef.current;
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();
      const computedStyle = window.getComputedStyle(element);
      const marginBottom = parseNumeric(computedStyle.marginBottom);
      const marginTop = parseNumeric(computedStyle.marginTop);
      const configuredStickyOffset = parseNumeric(
        computedStyle.getPropertyValue('--lorebook-sidebar-sticky-offset'),
      );
      const fallbackStickyOffset = parseNumeric(computedStyle.top);
      const stickyOffset = Math.max(configuredStickyOffset, fallbackStickyOffset, 0);

      const viewport = window.visualViewport;
      const viewportHeight = viewport?.height ?? window.innerHeight;
      const viewportOffsetTop = viewport?.offsetTop ?? 0;
      const viewportOffsetBottom =
        viewport != null ? window.innerHeight - viewportHeight - viewportOffsetTop : 0;

      const topSpacing = Math.max(rect.top - viewportOffsetTop, stickyOffset, marginTop, 0);
      const additionalClearance = 12;
      const bottomSpacing = marginBottom + viewportOffsetBottom + additionalClearance;
      let availableHeight = Math.max(
        Math.floor(viewportHeight - topSpacing - bottomSpacing),
        0,
      );

      const applyContainerLimit = (containerBottom: number | null | undefined) => {
        if (containerBottom == null || Number.isNaN(containerBottom)) {
          return;
        }

        const rawAvailable = containerBottom - rect.top - marginBottom - additionalClearance;
        if (!Number.isFinite(rawAvailable)) {
          return;
        }

        const candidate = Math.max(Math.floor(rawAvailable), 0);
        availableHeight = Math.min(availableHeight, candidate);
      };

      const parentElement = element.parentElement;
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        applyContainerLimit(parentRect.bottom);
      }

      const popupRoot = element.closest('#worldInfoRecommenderPopup') as HTMLElement | null;
      if (popupRoot) {
        const popupRect = popupRoot.getBoundingClientRect();
        applyContainerLimit(popupRect.bottom);
      }

      if (availableHeight !== lastMaxHeight) {
        element.style.setProperty('--lorebook-sidebar-max-height', `${availableHeight}px`);
        lastMaxHeight = availableHeight;
      }
    };

    const scheduleUpdate = () => {
      if (frameId != null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateSidebarConstraints);
    };

    scheduleUpdate();

    const handleResize = () => scheduleUpdate();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', scheduleUpdate, true);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(scheduleUpdate);
      resizeObserver.observe(sidebarElement);
      if (sidebarElement.parentElement) {
        resizeObserver.observe(sidebarElement.parentElement);
      }
      const popupRoot = document.getElementById('worldInfoRecommenderPopup');
      if (popupRoot) {
        resizeObserver.observe(popupRoot);
      }
    }

    return () => {
      if (frameId != null) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', scheduleUpdate, true);
      resizeObserver?.disconnect();
    };
  }, []);

  useEffect(() => {
    const container = menuScrollRef.current;
    if (!container) {
      return;
    }

    let activePointerId: number | null = null;
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let startScrollTop = 0;

    const interactiveSelector =
      'button, input, select, textarea, label, a, summary, [role="button"], [role="link"], [draggable], [contenteditable="true"], .fancy-dropdown-container, .filters-toggle, .menu_button';

    const shouldIgnoreTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        return false;
      }

      if (target.closest('[data-drag-scroll="ignore"]')) {
        return true;
      }

      return target.closest(interactiveSelector) !== null;
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) {
        return;
      }

      if (shouldIgnoreTarget(event.target)) {
        return;
      }

      isDragging = true;
      activePointerId = event.pointerId;
      startX = event.clientX;
      startY = event.clientY;
      startScrollLeft = container.scrollLeft;
      startScrollTop = container.scrollTop;
      container.setPointerCapture(event.pointerId);
      container.classList.add('menu--dragging');
      event.preventDefault();
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging || event.pointerId !== activePointerId) {
        return;
      }

      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;

      if (deltaX !== 0) {
        container.scrollLeft = startScrollLeft - deltaX;
      }

      if (deltaY !== 0) {
        container.scrollTop = startScrollTop - deltaY;
      }
    };

    const endDrag = (event: PointerEvent) => {
      if (!isDragging || (activePointerId !== null && event.pointerId !== activePointerId)) {
        return;
      }

      isDragging = false;
      activePointerId = null;
      container.classList.remove('menu--dragging');

      if (container.hasPointerCapture(event.pointerId)) {
        container.releasePointerCapture(event.pointerId);
      }
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', endDrag);
    container.addEventListener('pointercancel', endDrag);
    container.addEventListener('pointerleave', endDrag);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', endDrag);
      container.removeEventListener('pointercancel', endDrag);
      container.removeEventListener('pointerleave', endDrag);
    };
  }, [menuScrollRef]);

  useEffect(() => {
    if (!worldGroupRef.current || !activeWorld) {
      return;
    }

    const sortable = new Sortable(worldGroupRef.current, {
      animation: 150,
      draggable: '.entry-card, .compact-entry',
      filter: 'input, textarea, button, select, a',
      preventOnFilter: false,
      onEnd: () => {
        const container = worldGroupRef.current;
        if (!container) {
          return;
        }
        const rawOrder = Array.from(container.children)
          .map((el) => Number((el as HTMLElement).dataset.uid))
          .filter((uid) => Number.isFinite(uid));
        if (rawOrder.length === 0) {
          return;
        }
        const worldEntries = draftEntriesRef.current?.[activeWorld] ?? [];
        if (worldEntries.length === 0) {
          return;
        }

        const worldEntryUids = worldEntries.map((entry) => entry.uid);
        if (worldEntryUids.length === 0) {
          return;
        }

        const worldEntryUidSet = new Set(worldEntryUids);
        const visibleOrder = rawOrder.filter((uid) => worldEntryUidSet.has(uid));
        if (visibleOrder.length === 0) {
          return;
        }

        const visibleSet = new Set(visibleOrder);
        const combinedOrder = [...visibleOrder, ...worldEntryUids.filter((uid) => !visibleSet.has(uid))];

        setCustomOrderByWorld((prev) => {
          const previousOrder = prev[activeWorld];
          if (
            previousOrder &&
            previousOrder.length === combinedOrder.length &&
            previousOrder.every((value, index) => value === combinedOrder[index])
          ) {
            return prev;
          }

          return { ...prev, [activeWorld]: combinedOrder };
        });

        setDraftEntries((prev) => {
          const worldState = prev[activeWorld];
          if (!worldState) {
            return prev;
          }

          return {
            ...prev,
            [activeWorld]: sortEntriesByCustom(worldState, combinedOrder),
          };
        });

        if (sortSelection !== 'custom') {
          setSortSelection('custom');
        }
      },
    });

    return () => {
      sortable.destroy();
    };
  }, [sortSelection, activeWorld, isCompactView]);

  useEffect(() => {
    if (!activeWorld) {
      if (categorySortableRef.current) {
        categorySortableRef.current.destroy();
        categorySortableRef.current = null;
      }
      return;
    }

    if (!categoryListRef.current) {
      return;
    }

    if (categorySortableRef.current) {
      categorySortableRef.current.destroy();
      categorySortableRef.current = null;
    }

    categorySortableRef.current = new Sortable(categoryListRef.current, {
      animation: 150,
      handle: '.category-dashboard__drag-handle',
      ghostClass: 'category-dashboard__item--dragging',
      onEnd: (event) => {
        const { oldIndex, newIndex } = event;
        if (oldIndex == null || newIndex == null || oldIndex === newIndex) {
          return;
        }

        updateCategoryStorageForWorld(activeWorld, (state) => {
          if (oldIndex < 0 || oldIndex >= state.categories.length) {
            return state;
          }
          if (newIndex < 0 || newIndex >= state.categories.length) {
            return state;
          }

          const nextCategories = [...state.categories];
          const [moved] = nextCategories.splice(oldIndex, 1);
          nextCategories.splice(newIndex, 0, moved);
          return { ...state, categories: nextCategories };
        }, { alsoUpdateSaved: true });
      },
    });

    return () => {
      categorySortableRef.current?.destroy();
      categorySortableRef.current = null;
    };
  }, [activeWorld, categoryOrderSignature, updateCategoryStorageForWorld]);

  const allFilteredIds = useMemo(() => {
    const ids = new Set<string>();
    filteredEntries.forEach((entry) => ids.add(`${selectedWorldName}::${entry.uid}`));
    return ids;
  }, [filteredEntries, selectedWorldName]);

  const allFilteredSelected = useMemo(
    () => allFilteredIds.size > 0 && Array.from(allFilteredIds).every((id) => selectedIds.has(id)),
    [allFilteredIds, selectedIds],
  );

  const someFilteredSelected = useMemo(
    () => Array.from(allFilteredIds).some((id) => selectedIds.has(id)),
    [allFilteredIds, selectedIds],
  );

  useEffect(() => {
    if (selectAllCheckboxRef.current) {
      selectAllCheckboxRef.current.indeterminate = !allFilteredSelected && someFilteredSelected;
    }
  }, [allFilteredSelected, someFilteredSelected]);

  const handleToggleSelectAll = () => {
    if (allFilteredIds.size === 0) {
      return;
    }

    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allFilteredSelected) {
        allFilteredIds.forEach((id) => next.delete(id));
      } else {
        allFilteredIds.forEach((id) => next.add(id));
      }
      return next;
    });
  };

  const handleBulkEditComments = () => {
    if (selectedIds.size === 0) {
      st_echo('warning', 'Select at least one entry to update entry titles.');
      return;
    }

    const prefixTemplate = bulkCommentPrefix;
    const suffixTemplate = bulkCommentSuffix;
    const replacementTemplate = bulkCommentMode === 'replace' ? bulkCommentReplacement : '';
    const trimMode = bulkCommentTrimMode;
    const parsedTrimCount = Number.parseInt(bulkCommentTrimCount, 10);
    const trimCount = Number.isNaN(parsedTrimCount) || parsedTrimCount < 0 ? 0 : parsedTrimCount;
    const templatesUseDate =
      prefixTemplate.includes('{{date}}') ||
      suffixTemplate.includes('{{date}}') ||
      (bulkCommentMode === 'replace' && replacementTemplate.includes('{{date}}'));

    if (bulkCommentMode === 'keep' && !prefixTemplate && !suffixTemplate && (trimMode === 'none' || trimCount === 0)) {
      st_echo('warning', 'Add a prefix, suffix, or trimming option before applying the entry title changes.');
      return;
    }

    const numberingEnabled = bulkCommentNumberingEnabled;
    const trimmedCounterStart = bulkCommentNumberStart.trim();
    const parsedCounterStart = Number.parseInt(trimmedCounterStart, 10);
    if (numberingEnabled && (trimmedCounterStart === '' || Number.isNaN(parsedCounterStart))) {
      st_echo('warning', 'Enter a valid starting number before applying numbering.');
      return;
    }

    let nextCounterValue = numberingEnabled ? parsedCounterStart : 0;
    const counterDirection = bulkCommentNumberDirection;
    const counterFormatMatch = trimmedCounterStart.match(/^([+-]?)(0*)(\d+)$/);
    const counterWidth = counterFormatMatch
      ? counterFormatMatch[2].length + counterFormatMatch[3].length
      : trimmedCounterStart.length;
    const includeExplicitPlus = counterFormatMatch?.[1] === '+';
    const resolvedCounterWidth = Math.max(counterWidth, 1);
    const formatCounterValue = counterFormatMatch
      ? (value: number) => {
          const absoluteValue = Math.abs(value);
          const padded = absoluteValue.toString().padStart(resolvedCounterWidth, '0');
          const signPrefix = value < 0 ? '-' : includeExplicitPlus ? '+' : '';
          return `${signPrefix}${padded}`;
        }
      : (value: number) => value.toString();

    let appliedCount = 0;
    let skippedForMissingDate = 0;

    const selectedByWorld = new Map<string, { ids: Set<number>; processed: Set<number> }>();
    selectedIds.forEach((id) => {
      const [worldName, uidStr] = id.split('::');
      const uid = Number(uidStr);
      if (!worldName || Number.isNaN(uid)) {
        return;
      }

      let bucket = selectedByWorld.get(worldName);
      if (!bucket) {
        bucket = { ids: new Set(), processed: new Set() };
        selectedByWorld.set(worldName, bucket);
      }
      bucket.ids.add(uid);
    });

    const orderedEntries: { worldName: string; entry: ExtendedWIEntry }[] = [];
    const collectEntries = (worldName: string, entries: ExtendedWIEntry[] | undefined) => {
      if (!entries || entries.length === 0) {
        return;
      }

      const bucket = selectedByWorld.get(worldName);
      if (!bucket) {
        return;
      }

      entries.forEach((entry) => {
        if (!bucket.ids.has(entry.uid) || bucket.processed.has(entry.uid)) {
          return;
        }

        orderedEntries.push({ worldName, entry });
        bucket.processed.add(entry.uid);
      });
    };

    if (activeWorld && selectedByWorld.has(activeWorld)) {
      collectEntries(activeWorld, filteredEntries);
    }

    selectedByWorld.forEach((_, worldName) => {
      const worldEntries = draftEntriesRef.current?.[worldName] ?? draftEntries[worldName];
      collectEntries(worldName, worldEntries);
    });

    orderedEntries.forEach(({ worldName, entry }) => {
      const originalComment = entry.comment ?? '';
      const content = entry.content ?? '';
      const detectedDate = extractDateFromContent(content);

      if (!detectedDate && templatesUseDate) {
        skippedForMissingDate += 1;
        return;
      }

      const dateValue = detectedDate ?? '';
      const counterValue = numberingEnabled ? formatCounterValue(nextCounterValue) : '';
      const templateValues: CommentTemplateValues = {
        dateValue,
        originalComment,
        content,
        counter: counterValue,
      };

      const prefixValue = applyCommentTemplate(prefixTemplate, templateValues);
      const suffixValue = applyCommentTemplate(suffixTemplate, templateValues);
      let baseValue =
        bulkCommentMode === 'replace' ? applyCommentTemplate(replacementTemplate, templateValues) : originalComment;

      if (trimMode !== 'none' && trimCount > 0) {
        baseValue =
          trimMode === 'start'
            ? baseValue.slice(trimCount)
            : baseValue.slice(0, Math.max(0, baseValue.length - trimCount));
      }

      const nextComment = `${prefixValue}${baseValue}${suffixValue}`;
      if (nextComment === originalComment) {
        return;
      }

      appliedCount += 1;
      updateEntry(worldName, entry.uid, { comment: nextComment });
      if (numberingEnabled) {
        nextCounterValue += counterDirection === 'asc' ? 1 : -1;
      }
    });

    if (appliedCount === 0) {
      if (templatesUseDate && skippedForMissingDate > 0) {
        const message =
          skippedForMissingDate === selectedIds.size
            ? 'No entry titles were updated because no dates were detected in the selected entries.'
            : `${skippedForMissingDate} entr${skippedForMissingDate === 1 ? 'y was' : 'ies were'} skipped because no date was detected.`;
        st_echo('warning', message);
      } else {
        st_echo('info', 'No entry title changes were applied.');
      }
      return;
    }

    const summary =
      templatesUseDate && skippedForMissingDate > 0
        ? `Updated ${appliedCount} entr${appliedCount === 1 ? 'y' : 'ies'} (${skippedForMissingDate} skipped without a detected date).`
        : `Updated entry titles for ${appliedCount} entr${appliedCount === 1 ? 'y' : 'ies'}.`;
    st_echo('success', summary);
  };

  const renderTokenButtons = (keyPrefix: string, appendToken: (token: string) => void, ariaLabel: string) => (
    <div className="menu-token-buttons" role="group" aria-label={ariaLabel}>
      {COMMENT_TEMPLATE_TOKENS.map((token) => (
        <button
          key={`${keyPrefix}-${token.token}`}
          type="button"
          className="menu-token-button"
          onClick={() => appendToken(token.token)}
          title={token.description}
        >
          <code>{token.token}</code>
          <span>{token.label}</span>
        </button>
      ))}
    </div>
  );

  const handleBulkEditPosition = () => {
    selectedIds.forEach((id) => {
      const [worldName, uidStr] = id.split('::');
      const uid = Number(uidStr);
      if (!worldName || Number.isNaN(uid)) return;
      updateEntry(worldName, uid, {
        position: bulkPosition,
        depth: bulkPosition === 4 ? bulkDepth : null,
        roleAtDepth: bulkPosition === 4 ? bulkRoleAtDepth : null,
      });
    });
  };

  const handleBulkEditOrder = () => {
    if (bulkOrderStart === undefined) {
      st_echo('warning', 'Enter a starting order value before applying order updates.');
      return;
    }

    const start = bulkOrderStart;
    const direction = bulkOrderDirection;
    const worlds = new Set<string>();
    selectedIds.forEach((id) => {
      const [worldName] = id.split('::');
      if (worldName) worlds.add(worldName);
    });
    worlds.forEach((worldName) => {
      const worldEntries = draftEntries[worldName] || [];
      const selected = worldEntries.filter((e) => selectedIds.has(`${worldName}::${e.uid}`));
      selected.forEach((entry, index) => {
        const newOrder = direction === 'asc' ? start + index : start - index;
        updateEntry(worldName, entry.uid, { order: newOrder });
      });
    });
  };

  const handleBackupActiveLorebook = async () => {
    if (isBackingUp) {
      return;
    }

    const worldName = selectedWorldName;
    if (!worldName) {
      st_echo('warning', 'Select a lorebook to back up first.');
      return;
    }

    const entries = draftEntries[worldName] ?? [];
    if (entries.length === 0) {
      st_echo('warning', `There are no entries to back up in ${worldName}.`);
      return;
    }

    setIsBackingUp(true);
    const now = new Date();
    const sanitizedWorldName = sanitizeFileName(worldName) || 'lorebook';
    const timestampLabel = formatTimestampForFileName(now);
    const fileName = `${sanitizedWorldName}_backup_${timestampLabel}.json`;
    const hasUnsavedChanges = Array.from(dirtyIds).some((id) => id.startsWith(`${worldName}::`));

    const entriesByUid = Object.fromEntries(entries.map((entry) => [entry.uid, entry] as const)) as Record<
      number,
      ExtendedWIEntry
    >;

    const backupPayload = {
      name: worldName,
      exportedAt: now.toISOString(),
      entryCount: entries.length,
      includesUnsavedChanges: hasUnsavedChanges,
      entries: entriesByUid,
    };

    const blob = new Blob([JSON.stringify(backupPayload, null, 2)], { type: 'application/json' });

    try {
      const electronAPI = getElectronAPI();
      let savedPath = '';
      let method: BackupInfo['method'] = 'download';
      let electronAttempted = false;
      let electronFailed = false;

      if (electronAPI?.saveFile) {
        electronAttempted = true;
        try {
          const arrayBuffer = await blob.arrayBuffer();
          const data = new Uint8Array(arrayBuffer);
          const result = await electronAPI.saveFile({
            data,
            defaultPath: fileName,
            filters: [{ name: 'JSON Files', extensions: ['json'] }],
          } as any);

          if (typeof result === 'string') {
            savedPath = result;
          } else if (result && typeof result === 'object' && 'filePath' in result) {
            savedPath = (result as { filePath?: string }).filePath ?? '';
          }

          if (savedPath) {
            method = 'electron';
          }
        } catch (error) {
          electronFailed = true;
          console.error('Electron saveFile failed, falling back to browser download', error);
        }
      }

      if (method !== 'electron' && electronAttempted && !electronFailed) {
        st_echo('info', 'Lorebook backup canceled.');
        return;
      }

      if (method !== 'electron') {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = fileName;
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
        savedPath = `Downloads/${fileName}`;
      }

      setLastBackupInfo({
        fileName,
        location: savedPath || fileName,
        timestamp: now.getTime(),
        includesUnsavedChanges: hasUnsavedChanges,
        method,
      });

      const unsavedMessage = hasUnsavedChanges ? ' Unsaved changes are included in this backup.' : '';
      if (method === 'electron' && savedPath) {
        st_echo('success', `Saved lorebook backup to ${savedPath}.${unsavedMessage}`);
        try {
          electronAPI?.showItemInFolder?.(savedPath);
        } catch {
          /* ignore */
        }
      } else {
        st_echo(
          'success',
          `Saved lorebook backup as ${fileName}. Check your default download location.${unsavedMessage}`,
        );
      }
    } catch (error) {
      console.error('Failed to create lorebook backup', error);
      st_echo('error', 'Failed to create a lorebook backup. See console for details.');
    } finally {
      setIsBackingUp(false);
    }
  };

  const handleSaveEntry = useCallback(
    async (worldName: string, uid: number) => {
      const entry = draftEntriesRef.current?.[worldName]?.find((e) => e.uid === uid);
      if (!entry) return;
      if (!validateEntryForSave(worldName, entry)) {
        return;
      }

      const originalUid = originalUidMapRef.current?.[worldName]?.get(entry.uid) ?? entry.uid;

      if (!window.confirm('Save changes to this entry?')) {
        return;
      }

      try {
        await onSaveEntries(worldName, [{ entry, originalUid }]);
      } catch {
        return;
      }

      const entryKey = `${worldName}::${entry.uid}`;
      const worldAssignments =
        categoryStorageRef.current[worldName]?.entryAssignments ?? EMPTY_CATEGORY_ASSIGNMENTS;
      const savedAssignments =
        savedCategoryStorageRef.current[worldName]?.entryAssignments ?? EMPTY_CATEGORY_ASSIGNMENTS;
      const currentAssignment = worldAssignments[entry.uid] ?? null;
      const savedAssignment =
        savedAssignments[entry.uid] ??
        (entry.uid !== originalUid ? savedAssignments[originalUid] : undefined) ??
        null;
      const hasUnsavedCategoryChange = currentAssignment !== savedAssignment;

      setDirtyIds((prev) => {
        const newSet = new Set(prev);
        if (hasUnsavedCategoryChange) {
          newSet.add(entryKey);
        } else {
          newSet.delete(entryKey);
        }
        return newSet;
      });

      if (typeof localStorage !== 'undefined') {
        try {
          const draftsRaw = localStorage.getItem('lorebookEditorDrafts');
          if (draftsRaw) {
            const drafts = JSON.parse(draftsRaw) as Record<string, ExtendedWIEntry[]>;
            if (drafts[worldName]) {
              drafts[worldName] = drafts[worldName].filter((e) => e.uid !== entry.uid);
              if (drafts[worldName].length === 0) {
                delete drafts[worldName];
              }
              localStorage.setItem('lorebookEditorDrafts', JSON.stringify(drafts));
            }
          }

          const dirtyRaw = localStorage.getItem('lorebookEditorDirtyIds');
          const dirtyList = dirtyRaw ? (JSON.parse(dirtyRaw) as unknown[]) : [];
          const dirtySet = new Set<string>(
            Array.isArray(dirtyList) ? dirtyList.filter((id): id is string => typeof id === 'string') : [],
          );
          if (hasUnsavedCategoryChange) {
            dirtySet.add(entryKey);
          } else {
            dirtySet.delete(entryKey);
          }
          localStorage.setItem('lorebookEditorDirtyIds', JSON.stringify(Array.from(dirtySet)));
        } catch {
          /* ignore parse errors */
        }
      }
    },
    [onSaveEntries],
  );

  const handleSaveAll = async () => {
    if (dirtyIds.size === 0) return;

    const entriesByWorld = new Map<string, SaveEntryPayload[]>();
    const idsToRemove: string[] = [];

    dirtyIds.forEach((id) => {
      const [worldName, uidStr] = id.split('::');
      const uid = Number(uidStr);
      if (!worldName || Number.isNaN(uid)) {
        return;
      }
      const entry = draftEntries[worldName]?.find((e) => e.uid === uid);
      if (!entry) {
        return;
      }
      const originalUid = originalUidMapRef.current?.[worldName]?.get(entry.uid) ?? entry.uid;
      const existing = entriesByWorld.get(worldName);
      const payload: SaveEntryPayload = { entry, originalUid };
      if (existing) {
        existing.push(payload);
      } else {
        entriesByWorld.set(worldName, [payload]);
      }
      idsToRemove.push(`${worldName}::${entry.uid}`);
    });

    if (entriesByWorld.size === 0) {
      return;
    }

    for (const [worldName, entries] of entriesByWorld.entries()) {
      for (const { entry } of entries) {
        if (!validateEntryForSave(worldName, entry)) {
          return;
        }
      }
    }

    if (!window.confirm('Save changes to all modified entries?')) {
      return;
    }

    try {
      for (const [worldName, entries] of entriesByWorld.entries()) {
        await onSaveEntries(worldName, entries);
      }
    } catch (error) {
      console.error('Failed to save all entries', error);
      alert('Failed to save all entries. Please try again.');
      return;
    }

    setDirtyIds((prev) => {
      const newSet = new Set(prev);
      idsToRemove.forEach((id) => newSet.delete(id));
      return newSet;
    });

    const committedCategories = cloneCategoryStorage(categoryStorageRef.current);
    setSavedCategorySnapshot(committedCategories);
    savedCategoryStorageRef.current = committedCategories;
    latestSavedCategoryStorageRef.current = committedCategories;

    if (typeof localStorage !== 'undefined') {
      try {
        const drafts = JSON.parse(localStorage.getItem('lorebookEditorDrafts') || '{}') as Record<
          string,
          ExtendedWIEntry[]
        >;
        entriesByWorld.forEach((entries, worldName) => {
          if (!drafts[worldName]) {
            return;
          }
          const savedUids = new Set(entries.map(({ entry }) => entry.uid));
          drafts[worldName] = drafts[worldName].filter((draft) => !savedUids.has(draft.uid));
          if (drafts[worldName].length === 0) {
            delete drafts[worldName];
          }
        });
        localStorage.setItem('lorebookEditorDrafts', JSON.stringify(drafts));

        const dirtyList = JSON.parse(localStorage.getItem('lorebookEditorDirtyIds') || '[]') as string[];
        const idsToRemoveSet = new Set(idsToRemove);
        const updatedDirty = dirtyList.filter((id) => !idsToRemoveSet.has(id));
        localStorage.setItem('lorebookEditorDirtyIds', JSON.stringify(updatedDirty));
      } catch {
        /* ignore parse errors */
      }
    }
  };

  const handleRevertAll = () => {
    if (dirtyIds.size === 0) return;

    const idsToRemove: string[] = [];
    const worldsToRevert = new Set<string>();

    dirtyIds.forEach((id) => {
      const [worldName] = id.split('::');
      if (!worldName || !entriesGroupByWorldName[worldName]) {
        return;
      }
      idsToRemove.push(id);
      worldsToRevert.add(worldName);
    });

    if (worldsToRevert.size === 0) {
      return;
    }

    setDraftEntries((prev) => {
      const next = { ...prev };
      worldsToRevert.forEach((worldName) => {
        next[worldName] = (entriesGroupByWorldName[worldName] ?? []).map((entry) => ({ ...entry }));
      });
      return next;
    });

    setCategoryStorage((prev) => {
      if (worldsToRevert.size === 0) {
        return prev;
      }

      const next = { ...prev } as LorebookCategoryStorage;
      const savedState = savedCategoryStorageRef.current;

      worldsToRevert.forEach((worldName) => {
        const savedForWorld = savedState[worldName];
        if (savedForWorld) {
          next[worldName] = cloneCategoryState(savedForWorld);
        } else {
          delete next[worldName];
        }
      });

      categoryStorageRef.current = next;
      return next;
    });

    setDirtyIds((prev) => {
      const newSet = new Set(prev);
      idsToRemove.forEach((id) => newSet.delete(id));
      return newSet;
    });

    if (typeof localStorage !== 'undefined') {
      try {
        const drafts = JSON.parse(localStorage.getItem('lorebookEditorDrafts') || '{}') as Record<
          string,
          ExtendedWIEntry[]
        >;
        worldsToRevert.forEach((worldName) => {
          if (drafts[worldName]) {
            delete drafts[worldName];
          }
        });
        localStorage.setItem('lorebookEditorDrafts', JSON.stringify(drafts));

        const dirtyList = JSON.parse(localStorage.getItem('lorebookEditorDirtyIds') || '[]') as string[];
        const idsToRemoveSet = new Set(idsToRemove);
        const updatedDirty = dirtyList.filter((id) => !idsToRemoveSet.has(id));
        localStorage.setItem('lorebookEditorDirtyIds', JSON.stringify(updatedDirty));
      } catch {
        /* ignore parse errors */
      }
    }
  };

  type SuccessfulDeletion = [string, { entry: ExtendedWIEntry; originalUid: number }[]];

  const applySuccessfulDeletions = useCallback(
    (deletions: SuccessfulDeletion[]) => {
      if (deletions.length === 0) {
        return 0;
      }

      const idsToRemoveGlobal = new Set<string>();
      deletions.forEach(([worldName, items]) => {
        items.forEach((item) => {
          idsToRemoveGlobal.add(`${worldName}::${item.entry.uid}`);
        });
      });

      setDraftEntries((prev) => {
        const next = { ...prev };
        deletions.forEach(([worldName, items]) => {
          const idsToRemove = new Set(items.map((item) => item.entry.uid));
          const worldEntries = next[worldName] ?? [];
          next[worldName] = worldEntries.filter((entry) => !idsToRemove.has(entry.uid));
        });
        return next;
      });

      setCustomOrderByWorld((prevOrder) => {
        const next = { ...prevOrder };
        deletions.forEach(([worldName, items]) => {
          const existingOrder = prevOrder[worldName];
          if (!existingOrder) {
            return;
          }
          const idsToRemove = new Set(items.map((item) => item.entry.uid));
          next[worldName] = existingOrder.filter((uid) => !idsToRemove.has(uid));
        });
        return next;
      });

      setDirtyIds((prev) => {
        const next = new Set(prev);
        idsToRemoveGlobal.forEach((id) => next.delete(id));
        return next;
      });

      setSelectedIds((prev) => {
        const next = new Set(prev);
        idsToRemoveGlobal.forEach((id) => next.delete(id));
        return next;
      });

      setExpandedCompactEntryIds((prev) => {
        let mutated = false;
        const next = new Set(prev);
        idsToRemoveGlobal.forEach((id) => {
          if (next.delete(id)) {
            mutated = true;
          }
        });
        return mutated ? next : prev;
      });

      if (lastSelectedIdRef.current && idsToRemoveGlobal.has(lastSelectedIdRef.current)) {
        lastSelectedIdRef.current = null;
      }

      if (originalUidMapRef.current) {
        deletions.forEach(([worldName, items]) => {
          const map = originalUidMapRef.current?.[worldName];
          if (!map) {
            return;
          }
          items.forEach((item) => {
            map.delete(item.entry.uid);
          });
        });
      }

      deletions.forEach(([worldName, items]) => {
        if (items.length === 0) {
          return;
        }

        updateCategoryStorageForWorld(worldName, (state) => {
          const assignments = { ...state.entryAssignments };
          let mutated = false;
          items.forEach(({ entry }) => {
            if (assignments[entry.uid] != null) {
              delete assignments[entry.uid];
              mutated = true;
            }
          });

          if (!mutated) {
            return state;
          }

          if (state.categories.length === 0 && Object.keys(assignments).length === 0) {
            return null;
          }

          return { ...state, entryAssignments: assignments };
        }, { alsoUpdateSaved: true });
      });

      if (typeof localStorage !== 'undefined') {
        try {
          const drafts = JSON.parse(localStorage.getItem('lorebookEditorDrafts') || '{}') as Record<
            string,
            ExtendedWIEntry[]
          >;
          deletions.forEach(([worldName, items]) => {
            if (!drafts[worldName]) {
              return;
            }
            const idsToRemove = new Set(items.map((item) => item.entry.uid));
            drafts[worldName] = drafts[worldName].filter((entry) => !idsToRemove.has(entry.uid));
            if (drafts[worldName].length === 0) {
              delete drafts[worldName];
            }
          });
          localStorage.setItem('lorebookEditorDrafts', JSON.stringify(drafts));

          const dirtyList = JSON.parse(localStorage.getItem('lorebookEditorDirtyIds') || '[]') as string[];
          const updatedDirty = dirtyList.filter((id) => !idsToRemoveGlobal.has(id));
          localStorage.setItem('lorebookEditorDirtyIds', JSON.stringify(updatedDirty));
        } catch {
          /* ignore parse errors */
        }
      }

      return deletions.reduce((sum, [, items]) => sum + items.length, 0);
    },
    [updateCategoryStorageForWorld],
  );

  const handleDeleteSelectedEntries = async () => {
    if (isDeleting) {
      return;
    }

    if (selectedIds.size === 0) {
      st_echo('warning', 'Select at least one entry to delete.');
      return;
    }

    const entriesToDelete = new Map<string, { entry: ExtendedWIEntry; originalUid: number }[]>();
    selectedIds.forEach((id) => {
      const [worldName, uidStr] = id.split('::');
      const uid = Number(uidStr);
      if (!worldName || Number.isNaN(uid)) {
        return;
      }

      const entry = draftEntries[worldName]?.find((item) => item.uid === uid);
      if (!entry) {
        return;
      }

      const originalUid = originalUidMapRef.current?.[worldName]?.get(entry.uid) ?? entry.uid;
      const existing = entriesToDelete.get(worldName);
      if (existing) {
        existing.push({ entry, originalUid });
      } else {
        entriesToDelete.set(worldName, [{ entry, originalUid }]);
      }
    });

    if (entriesToDelete.size === 0) {
      st_echo('warning', 'No valid entries were found for deletion.');
      return;
    }

    const totalToDelete = Array.from(entriesToDelete.values()).reduce((sum, items) => sum + items.length, 0);

    const confirmHeader =
      totalToDelete === 1 ? 'Delete the selected entry?' : `Delete ${totalToDelete} selected entries?`;
    const confirmMessage = `${confirmHeader}\n\nThis action cannot be undone. Please create a backup first.`;

    if (!window.confirm(confirmMessage)) {
      return;
    }

    setIsDeleting(true);

    const deletions = Array.from(entriesToDelete.entries());
    const successfulDeletions: SuccessfulDeletion[] = [];
    let encounteredError: unknown = null;
    let persistedDeletionCount = 0;

    try {
      for (const [worldName, items] of deletions) {
        const originalUids = items.map((item) => item.originalUid);
        if (originalUids.length === 0) {
          successfulDeletions.push([worldName, items]);
          continue;
        }

        try {
          await onDeleteEntries(worldName, originalUids);
          persistedDeletionCount += 1;
          successfulDeletions.push([worldName, items]);
        } catch (error) {
          encounteredError = error;
          console.error('Failed to delete entries', error);
          break;
        }
      }

      if (successfulDeletions.length > 0) {
        const removedCount = applySuccessfulDeletions(successfulDeletions);
        if (persistedDeletionCount === 0 && removedCount > 0) {
          const removalSummary =
            removedCount === 1
              ? 'Removed the selected entry from the editor.'
              : `Removed ${removedCount} entries from the editor.`;
          st_echo('success', removalSummary);
        }
      }

      if (encounteredError) {
        st_echo('error', 'Failed to delete the selected entries. Please try again.');
      }
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteEntry = useCallback(
    async (worldName: string, uid: number) => {
      if (isDeleting) {
        return;
      }

      const entry = draftEntriesRef.current?.[worldName]?.find((item) => item.uid === uid);
      if (!entry) {
        st_echo('warning', 'Unable to find the selected entry in the editor.');
        return;
      }

      const trimmedName = entry.comment?.trim();
      const entryLabel = trimmedName ? `"${trimmedName}"` : `UID ${entry.uid}`;
      const confirmMessage = `Delete entry ${entryLabel}?\n\nThis action cannot be undone. Please create a backup first.`;
      if (!window.confirm(confirmMessage)) {
        return;
      }

      setIsDeleting(true);

      const trackedOriginalUid = originalUidMapRef.current?.[worldName]?.get(entry.uid);
      const persistenceUid =
        trackedOriginalUid != null && Number.isFinite(trackedOriginalUid)
          ? trackedOriginalUid
          : Number.isFinite(entry.uid)
            ? entry.uid
            : null;
      const deletion: SuccessfulDeletion = [
        worldName,
        [
          {
            entry,
            originalUid: persistenceUid ?? entry.uid,
          },
        ],
      ];

      try {
        let persistedDeletion = false;
        if (persistenceUid != null) {
          try {
            await onDeleteEntries(worldName, [persistenceUid]);
            persistedDeletion = true;
          } catch (error) {
            console.error('Failed to delete entry', error);
            st_echo('error', 'Failed to delete the entry. Please try again.');
            return;
          }
        }

        const removedCount = applySuccessfulDeletions([deletion]);
        if (!persistedDeletion && removedCount > 0) {
          st_echo('success', 'Removed the entry from the editor.');
        }
      } finally {
        setIsDeleting(false);
      }
    },
    [applySuccessfulDeletions, isDeleting, onDeleteEntries],
  );
  const hasAnyEntries = Object.keys(entriesGroupByWorldName).length > 0;
  const entryListClassName = ['entry-card-list', isCompactView ? 'entry-card-list--compact' : '']
    .filter(Boolean)
    .join(' ');

  const entriesContent = !hasAnyEntries ? (
    <p className="lorebook-editor__empty">No entries loaded.</p>
  ) : !activeWorld || filteredEntries.length === 0 ? (
    <p className="lorebook-editor__empty">No entries found.</p>
  ) : (
    <>
      <div className="select-all">
        <label className="select-all__toggle">
          <input
            type="checkbox"
            ref={selectAllCheckboxRef}
            checked={allFilteredSelected}
            onChange={handleToggleSelectAll}
          />
          <span>Select all filtered entries</span>
        </label>
        <span className="select-all__hint">Hold Shift and click checkboxes or entries to select a range.</span>
      </div>
      <div className={entryListClassName}>
        <div className="world-group" ref={worldGroupRef}>
          {pagedEntries.map((entry) => {
            const id = `${activeWorld}::${entry.uid}`;
            const isDirty = dirtyIds.has(id);
            const categoryId = activeCategoryAssignments[entry.uid] ?? null;
            const categoryVisual = categoryId ? categoryVisualsById[categoryId] : undefined;
            return isCompactView ? (
              <LorebookEntryCompactRow
                key={entry.uid}
                entry={entry}
                worldName={activeWorld}
                isSelected={selectedIds.has(id)}
                onToggleSelect={handleToggleEntry}
                onChange={handleEntryChange}
                onSave={handleSaveEntry}
                onDelete={handleDeleteEntry}
                isDirty={isDirty}
                isDeleting={isDeleting}
                categoryId={categoryId}
                categoryOptions={categoryOptionsForCompact}
                categoryVisual={categoryVisual}
                onCategoryChange={handleEntryCategoryChange}
                categoryVisualsById={categoryVisualsById}
                onAssignOrderRange={handleAssignOrderRange}
                isExpanded={expandedCompactEntryIds.has(id)}
                onToggleExpanded={handleToggleCompactEntryExpanded}
              />
            ) : (
              <LorebookEntryCard
                key={entry.uid}
                entry={entry}
                worldName={activeWorld}
                isSelected={selectedIds.has(id)}
                onToggleSelect={handleToggleEntry}
                onChange={handleEntryChange}
                onSave={handleSaveEntry}
                onDelete={handleDeleteEntry}
                isDirty={isDirty}
                isDeleting={isDeleting}
                categoryId={categoryId}
                categoryOptions={categoryOptionsForCards}
                categoryVisual={categoryVisual}
                onCategoryChange={handleEntryCategoryChange}
                onAssignOrderRange={handleAssignOrderRange}
              />
            );
          })}
        </div>
        <div
          className={`pagination${isCustomSortActive ? ' pagination--custom-active' : ''}`}
          aria-label={`Pagination controls${isCustomSortActive ? ' (custom order active)' : ''}`}
        >
          <STButton disabled={currentPage === 0} onClick={() => setPage(Math.max(currentPage - 1, 0))}>
            <i className="fa-solid fa-chevron-left"></i>
            Prev
          </STButton>
          <span>
            Page {currentPage + 1} of {totalPages}
          </span>
          <STButton
            disabled={currentPage >= totalPages - 1}
            onClick={() => setPage(Math.min(currentPage + 1, totalPages - 1))}
          >
            <i className="fa-solid fa-chevron-right"></i>
            Next
          </STButton>
          <STFancyDropdown
            items={pageSizeItems}
            value={[pageSize.toString()]}
            onChange={(values) => {
              const size = Number(values[0] ?? PAGE_SIZES[0]);
              setPageSize(size);
              setPage(0);
            }}
            multiple={false}
            closeOnSelect
          />
        </div>
      </div>
    </>
  );

  const actionMenuItems = [
    {
      key: 'backup',
      label: isBackingUp ? 'Backing up…' : 'Backup',
      icon: 'fa-cloud-arrow-down',
      onSelect: () => handleBackupActiveLorebook(),
      disabled: !selectedWorldName || totalInActiveWorld === 0 || isBackingUp,
      busy: isBackingUp,
    },
    {
      key: 'delete',
      label: isDeleting ? 'Deleting…' : 'Delete Selected',
      icon: 'fa-trash',
      onSelect: () => handleDeleteSelectedEntries(),
      disabled: selectedIds.size === 0 || isDeleting,
      busy: isDeleting,
    },
    {
      key: 'revert',
      label: 'Revert All',
      icon: 'fa-rotate-left',
      onSelect: () => handleRevertAll(),
      disabled: dirtyIds.size === 0,
      busy: false,
    },
    {
      key: 'save',
      label: 'Save All',
      icon: 'fa-floppy-disk',
      onSelect: () => handleSaveAll(),
      disabled: dirtyIds.size === 0,
      busy: false,
    },
  ] as const;

  return (
    <div className="lorebook-editor">
      <aside className="lorebook-editor__sidebar" ref={sidebarRef}>
        <div className="menu" ref={menuScrollRef}>
          <div className="menu-shell">
            <header className="menu-header">
              <div className="menu-header__meta">
                <span
                  className={`menu-chip menu-status ${dirtyIds.size > 0 ? 'menu-status--dirty' : 'menu-status--clean'}`}
                  role="status"
                  aria-live="polite"
                >
                  <i
                    className={`fa-solid ${dirtyIds.size > 0 ? 'fa-circle-exclamation' : 'fa-circle-check'}`}
                    aria-hidden="true"
                  ></i>
                  <span>{dirtyIds.size > 0 ? `${dirtyIds.size} Unsaved` : 'All Saved'}</span>
                </span>
                <span className="menu-chip">
                  <i className="fa-solid fa-filter" aria-hidden="true"></i>
                  <span>
                    {activeFilterCount > 0
                      ? `${activeFilterCount} active filter${activeFilterCount === 1 ? '' : 's'}`
                      : 'All entries shown'}
                  </span>
                </span>
                <span className="menu-chip">
                  <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                  <span>
                    {filteredEntries.length} / {totalInActiveWorld} shown
                  </span>
                </span>
                <span className="menu-chip">
                  <i className="fa-solid fa-square-check" aria-hidden="true"></i>
                  <span>{selectedInActiveWorld} selected</span>
                </span>
                {lastBackupInfo ? (
                  <span
                    className="menu-chip menu-chip--grow"
                    title={lastBackupLocationHint || undefined}
                    role="status"
                    aria-live="polite"
                  >
                    <i className="fa-solid fa-cloud-arrow-down" aria-hidden="true"></i>
                    <span>
                      Last backup: <code>{lastBackupInfo.fileName}</code>
                      {lastBackupMetaText ? <span className="menu-chip__meta">{lastBackupMetaText}</span> : null}
                    </span>
                  </span>
                ) : (
                  <span className="menu-chip">
                    <i className="fa-solid fa-cloud-arrow-down" aria-hidden="true"></i>
                    <span>No backups yet</span>
                  </span>
                )}
              </div>
              <div className="menu-header__actions" role="group" aria-label="Lorebook editor actions">
                {actionMenuItems.map((item) => (
                  <STButton
                    key={item.key}
                    onClick={() => {
                      if (item.disabled) {
                        return;
                      }
                      void item.onSelect();
                    }}
                    disabled={item.disabled}
                    className={`menu_button menu_button--compact menu-action-button${
                      item.key === 'save' ? ' primary' : ''
                    }${item.key === 'delete' ? ' menu-action-button--danger' : ''}`}
                    aria-busy={item.busy}
                    title={item.label}
                  >
                    <i className={`fa-solid ${item.icon}`} aria-hidden="true"></i>
                    <span>{item.label}</span>
                  </STButton>
                ))}
                <STButton
                  onClick={() => setIsCompactView((prev) => !prev)}
                  className={`menu_button menu_button--compact menu-action-button${
                    isCompactView ? ' menu-action-button--active' : ''
                  }`}
                  aria-pressed={isCompactView}
                  title={isCompactView ? 'Switch to card view' : 'Switch to compact view'}
                >
                  <i className={`fa-solid ${isCompactView ? 'fa-grip' : 'fa-table-list'}`} aria-hidden="true"></i>
                  <span>{isCompactView ? 'Card View' : 'Compact View'}</span>
                </STButton>
              </div>
              <div className="lorebook-controls" id={filtersPanelId} role="group" aria-label="Explore entries">
                <div className="lorebook-controls__row">
                  <div className="lorebook-controls__field">
                    <span className="lorebook-controls__label">Active lorebook</span>
                    <STFancyDropdown
                      items={worldDropdownItems}
                      value={selectedWorldName ? [selectedWorldName] : []}
                      onChange={(values) => setSelectedWorldName(values[0] ?? '')}
                      enableSearch
                      closeOnSelect
                      multiple={false}
                    />
                  </div>
                  <div className="lorebook-controls__field">
                    <span className="lorebook-controls__label">Sort entries</span>
                    <div className="lorebook-controls__input-group">
                      <STFancyDropdown
                        items={sortDropdownItems}
                        value={sortSelection ? [sortSelection] : []}
                        onChange={(values) => {
                          const rawValue = values[0] ?? '';
                          const sanitized = sanitizeSortSelectionValue(rawValue);
                          setSortSelection(sanitized);
                          if (sanitized && sanitized === sortSelection) {
                            applySortSelection(sanitized);
                          }
                        }}
                        multiple={false}
                        closeOnSelect
                      />
                      <STButton
                        type="button"
                        className="lorebook-controls__refresh-button"
                        onClick={handleRefreshEntries}
                        title="Refresh entries"
                        aria-label="Refresh entries"
                        disabled={!onRefreshEntries}
                      >
                        <i className="fa-solid fa-rotate-right" aria-hidden="true"></i>
                      </STButton>
                    </div>
                  </div>
                </div>
                <div className="lorebook-controls__row lorebook-controls__row--search">
                  <div className="lorebook-controls__search">
                    <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                    <input
                      type="text"
                      className="lorebook-controls__search-input"
                      placeholder="Search by title"
                      aria-label="Filter entries by title"
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                    />
                  </div>
                  <button
                    type="button"
                    className={`filters-toggle lorebook-controls__filters-toggle${
                      activeFilterCount > 0 ? ' lorebook-controls__filters-toggle--active' : ''
                    }`}
                    onClick={() => setIsFiltersMenuOpen((prev) => !prev)}
                    aria-expanded={isFiltersMenuOpen}
                    aria-controls={filtersDrawerPanelId}
                    title="Show filters"
                  >
                    <span className="filters-toggle__text">
                      <i className="fa-solid fa-sliders" aria-hidden="true"></i>
                      <span>Filters</span>
                    </span>
                    {activeFilterCount > 0 ? (
                      <span className="filters-toggle__badge" aria-label={`${activeFilterCount} active filters`}>
                        {activeFilterCount}
                      </span>
                    ) : (
                      <span className="filters-toggle__status">Optional</span>
                    )}
                    <i
                      className={`fa-solid ${isFiltersMenuOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
                {isFiltersMenuOpen && (
                  <div className="lorebook-controls__filters-panel">
                    <div id={filtersDrawerPanelId} className="filters-panel" role="group" aria-label="Filter entries">
                      <section className="filters-panel__section">
                        <header className="filters-panel__section-header">
                          <div className="filters-panel__heading" id={categoryFilterHeadingId}>
                            <i className="fa-solid fa-tags" aria-hidden="true"></i>
                            <span>Category</span>
                          </div>
                          {hasCategoryFilters ? <span className="filters-panel__chip">Active</span> : null}
                        </header>
                        <div className="category-filter" role="group" aria-labelledby={categoryFilterHeadingId}>
                          <div className="category-filter__chips" role="listbox" aria-multiselectable="true">
                            <button
                              type="button"
                              className="category-filter__chip"
                              data-selected={isUncategorizedFilterActive ? 'true' : 'false'}
                              style={{ '--category-chip-color': CATEGORY_COLOR_FALLBACK } as CSSProperties}
                              onClick={() => toggleCategoryFilter(UNCATEGORIZED_FILTER_VALUE)}
                              aria-pressed={isUncategorizedFilterActive}
                              role="option"
                              disabled={!activeWorld}
                              title={
                                isUncategorizedFilterActive
                                  ? 'Remove uncategorized filter'
                                  : 'Filter uncategorized entries'
                              }
                            >
                              <span className="category-filter__chip-color" aria-hidden="true" />
                              <span className="category-filter__chip-label">Uncategorized</span>
                            </button>
                            {activeCategories.map((category) => {
                              const chipColor = getCategoryColorValue(category);
                              const chipStyle = {
                                '--category-chip-color': chipColor,
                              } as CSSProperties;
                              const isActive = selectedCategoryFilters.has(category.id);
                              return (
                                <button
                                  key={category.id}
                                  type="button"
                                  className="category-filter__chip"
                                  data-selected={isActive ? 'true' : 'false'}
                                  style={chipStyle}
                                  onClick={() => toggleCategoryFilter(category.id)}
                                  aria-pressed={isActive}
                                  role="option"
                                  disabled={!activeWorld}
                                  title={`${isActive ? 'Remove' : 'Add'} ${category.name} filter`}
                                >
                                  <span className="category-filter__chip-color" aria-hidden="true" />
                                  <span className="category-filter__chip-label">{category.name}</span>
                                </button>
                              );
                            })}
                          </div>
                          <div className="category-filter__actions">
                            <button
                              type="button"
                              className="category-filter__clear"
                              onClick={clearCategoryFilters}
                              disabled={!hasCategoryFilters}
                            >
                              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
                              <span>Clear filters</span>
                            </button>
                          </div>
                        </div>
                      </section>
                      <section className="filters-panel__section">
                        <header className="filters-panel__section-header">
                          <div className="filters-panel__heading" id={firstWordFilterHeadingId}>
                            <i className="fa-solid fa-font" aria-hidden="true"></i>
                            <span>First word patterns</span>
                          </div>
                          {hasActiveFirstWordFilter ? <span className="filters-panel__chip">Active</span> : null}
                        </header>
                        <div className="first-word-filter" role="group" aria-labelledby={firstWordFilterHeadingId}>
                          <div className="first-word-filter__section">
                            <div className="first-word-filter__section-header">
                              <h4 className="first-word-filter__heading">Repeated first words</h4>
                              <div className="first-word-filter__actions">
                                <button
                                  type="button"
                                  className="first-word-filter__action"
                                  onClick={selectAllRepeatedFirstWords}
                                  disabled={repeatedFirstWordGroups.length === 0}
                                >
                                  Select all
                                </button>
                                <button
                                  type="button"
                                  className="first-word-filter__action first-word-filter__clear"
                                  onClick={clearRepeatedFirstWordSelection}
                                  disabled={!hasSelectedRepeatedFirstWords}
                                >
                                  Clear
                                </button>
                              </div>
                            </div>
                            {repeatedFirstWordGroups.length === 0 ? (
                              <p className="first-word-filter__empty">
                                No repeated first words in the current results.
                              </p>
                            ) : (
                              <ul className="first-word-filter__list first-word-filter__list--checkboxes">
                                {repeatedFirstWordGroups.map((group) => (
                                  <li key={group.key} className="first-word-filter__item">
                                    <label className="first-word-filter__option">
                                      <input
                                        type="checkbox"
                                        checked={selectedFirstWordKeys.has(group.key)}
                                        onChange={() => toggleFirstWordKey(group.key)}
                                      />
                                      <span className="first-word-filter__option-label">{group.label}</span>
                                      <span className="first-word-filter__count" aria-label={`${group.count} entries`}>
                                        {group.count}
                                      </span>
                                    </label>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <div className="first-word-filter__section first-word-filter__section--unique">
                            <div className="first-word-filter__section-header">
                              <h4 className="first-word-filter__heading">Unique first words</h4>
                              <div className="first-word-filter__actions">
                                <button
                                  type="button"
                                  className="first-word-filter__action"
                                  onClick={selectAllUniqueFirstWords}
                                  disabled={uniqueFirstWordGroups.length === 0}
                                >
                                  Select all
                                </button>
                                <button
                                  type="button"
                                  className="first-word-filter__action first-word-filter__clear"
                                  onClick={clearUniqueFirstWordSelection}
                                  disabled={!hasSelectedUniqueFirstWords}
                                >
                                  Clear
                                </button>
                              </div>
                            </div>
                            {uniqueFirstWordGroups.length === 0 ? (
                              <p className="first-word-filter__empty">No unique first words in the current results.</p>
                            ) : (
                              <ul className="first-word-filter__list first-word-filter__list--checkboxes">
                                {uniqueFirstWordGroups.map((group) => (
                                  <li key={group.key} className="first-word-filter__item">
                                    <label className="first-word-filter__option">
                                      <input
                                        type="checkbox"
                                        checked={selectedFirstWordKeys.has(group.key)}
                                        onChange={() => toggleFirstWordKey(group.key)}
                                      />
                                      <span className="first-word-filter__option-label">{group.label}</span>
                                      <span className="first-word-filter__count" aria-label={`${group.count} entries`}>
                                        {group.count}
                                      </span>
                                    </label>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                )}
              </div>
              <nav className="menu-tabs" role="tablist">
                {MENU_TABS.map((tab) => {
                  const isActive = tab.id === activeMenuTab;
                  const tabId = tab.id === 'overview' ? overviewTabId : categoriesTabId;
                  const panelId = tab.id === 'overview' ? overviewPanelId : categoriesPanelId;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      id={tabId}
                      className={`menu-tabs__tab ${isActive ? 'menu-tabs__tab--active' : ''}`}
                      aria-selected={isActive}
                      aria-controls={panelId}
                      onClick={() => setActiveMenuTab(tab.id)}
                    >
                      <span className="menu-tabs__tab-icon">
                        <i className={`fa-solid ${tab.icon}`} aria-hidden="true"></i>
                      </span>
                      <span className="menu-tabs__tab-label">{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </header>
            {activeMenuTab === 'overview' ? (
              <div className="menu-tab-panel" role="tabpanel" id={overviewPanelId} aria-labelledby={overviewTabId}>
                <div className="menu-grid" id="lorebook-editor-menu">
                  <section className="menu-panel menu-panel--bulk">
                    <div className="menu-panel__content" id={bulkPanelId} role="region" aria-label="Bulk tools">
                      <div className="menu-bulk-grid">
                        <div
                          className={`menu-bulk__section ${
                            openBulkSections.comments ? 'menu-bulk__section--open' : ''
                          }`}
                        >
                          <button
                            type="button"
                            className="menu-bulk__toggle"
                            onClick={() => handleBulkSectionToggle('comments')}
                            aria-expanded={openBulkSections.comments}
                            aria-controls={openBulkSections.comments ? bulkCommentsPanelId : undefined}
                          >
                            <div className="menu-bulk__title">
                              <i className="fa-solid fa-comment-dots" aria-hidden="true"></i>
                              <span>Entry Titles</span>
                            </div>
                            <i
                              className={`fa-solid ${openBulkSections.comments ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                              aria-hidden="true"
                            ></i>
                          </button>
                          {openBulkSections.comments && (
                            <div
                              className="menu-bulk__content"
                              id={bulkCommentsPanelId}
                              role="region"
                              aria-label="Bulk entry title updates"
                            >
                              <div className="menu-fields menu-fields--compact">
                                <div className="menu-field">
                                  <span className="menu-label">Update mode</span>
                                  <select
                                    className="text_pole"
                                    value={bulkCommentMode}
                                    onChange={(e) => setBulkCommentMode(e.target.value as 'keep' | 'replace')}
                                    aria-label="Bulk entry title update mode"
                                  >
                                    <option value="keep">Keep existing title</option>
                                    <option value="replace">Replace with template</option>
                                  </select>
                                </div>
                                <div className="menu-field menu-field--wide">
                                  <span className="menu-label">Prefix</span>
                                  <input
                                    type="text"
                                    className="text_pole"
                                    placeholder="Add text before the title"
                                    aria-label="Entry title prefix"
                                    value={bulkCommentPrefix}
                                    onChange={(e) => setBulkCommentPrefix(e.target.value)}
                                  />
                                  {renderTokenButtons(
                                    'prefix',
                                    (token) => setBulkCommentPrefix((prev) => prev + token),
                                    'Prefix tokens',
                                  )}
                                </div>
                                <div className="menu-field menu-field--wide">
                                  <span className="menu-label">Suffix</span>
                                  <input
                                    type="text"
                                    className="text_pole"
                                    placeholder="Add text after the title"
                                    aria-label="Entry title suffix"
                                    value={bulkCommentSuffix}
                                    onChange={(e) => setBulkCommentSuffix(e.target.value)}
                                  />
                                  {renderTokenButtons(
                                    'suffix',
                                    (token) => setBulkCommentSuffix((prev) => prev + token),
                                    'Suffix tokens',
                                  )}
                                </div>
                                <div className="menu-field menu-field--wide">
                                  <span className="menu-label">Trim characters</span>
                                  <div className="menu-inline-fields">
                                    <select
                                      className="text_pole"
                                      value={bulkCommentTrimMode}
                                      onChange={(e) =>
                                        setBulkCommentTrimMode(e.target.value as 'none' | 'start' | 'end')
                                      }
                                      aria-label="Select which part of the title to trim"
                                    >
                                      <option value="none">Do not trim</option>
                                      <option value="start">Delete first characters</option>
                                      <option value="end">Delete last characters</option>
                                    </select>
                                    <input
                                      type="number"
                                      min={0}
                                      className="text_pole"
                                      placeholder="Number of characters"
                                      aria-label="Number of characters to trim"
                                      value={bulkCommentTrimCount}
                                      onChange={(e) => setBulkCommentTrimCount(e.target.value)}
                                      disabled={bulkCommentTrimMode === 'none'}
                                    />
                                  </div>
                                  <p className="menu-field__hint">
                                    Removes characters from the existing title before prefixes or suffixes are
                                    applied.
                                  </p>
                                </div>
                                <div className="menu-field menu-field--wide">
                                  <label className="menu-checkbox">
                                    <input
                                      type="checkbox"
                                      checked={bulkCommentNumberingEnabled}
                                      onChange={(e) => setBulkCommentNumberingEnabled(e.target.checked)}
                                    />
                                    <span className="menu-label">Add numbering</span>
                                  </label>
                                  <div className="menu-inline-fields">
                                    <input
                                      type="number"
                                      className="text_pole"
                                      placeholder="Starting number"
                                      aria-label="Starting number for the counter"
                                      value={bulkCommentNumberStart}
                                      onChange={(e) => setBulkCommentNumberStart(e.target.value)}
                                      disabled={!bulkCommentNumberingEnabled}
                                    />
                                    <select
                                      className="text_pole"
                                      value={bulkCommentNumberDirection}
                                      onChange={(e) => setBulkCommentNumberDirection(e.target.value as 'asc' | 'desc')}
                                      aria-label="Counter direction"
                                      disabled={!bulkCommentNumberingEnabled}
                                    >
                                      <option value="asc">Ascending</option>
                                      <option value="desc">Descending</option>
                                    </select>
                                  </div>
                                  <p className="menu-field__hint">
                                    Use <code>{'{{counter}}'}</code> in your prefix, suffix, or replacement template
                                    (available from the token buttons) to insert the counter value into the entry title.
                                  </p>
                                </div>
                                {bulkCommentMode === 'replace' && (
                                  <div className="menu-field menu-field--wide">
                                    <span className="menu-label">Replacement template</span>
                                    <textarea
                                      className="text_pole"
                                      rows={3}
                                      placeholder="New entry title"
                                      aria-label="Entry title replacement template"
                                      value={bulkCommentReplacement}
                                      onChange={(e) => setBulkCommentReplacement(e.target.value)}
                                    ></textarea>
                                    {renderTokenButtons(
                                      'replacement',
                                      (token) => setBulkCommentReplacement((prev) => prev + token),
                                      'Replacement tokens',
                                    )}
                                  </div>
                                )}
                                <div className="menu-field menu-field--wide">
                                  <p className="menu-field__hint">
                                    Use tokens like <code>{'{{date}}'}</code>, <code>{'{{original}}'}</code>, and{' '}
                                    <code>{'{{content}}'}</code>. Dates are pulled from the entry content in MM/DD/YYYY or
                                    Month DD, YYYY formats. Entries without a detected date are skipped automatically.
                                  </p>
                                </div>
                              </div>
                              <div className="menu-bulk__actions">
                                <STButton
                                  disabled={selectedIds.size === 0}
                                  onClick={handleBulkEditComments}
                                  className="menu_button menu_button--compact"
                                >
                                  <i className="fa-solid fa-pen-to-square" aria-hidden="true"></i>
                                  <span>Apply title changes</span>
                                </STButton>
                              </div>
                            </div>
                          )}
                        </div>
                        <div
                          className={`menu-bulk__section ${openBulkSections.order ? 'menu-bulk__section--open' : ''}`}
                        >
                          <button
                            type="button"
                            className="menu-bulk__toggle"
                            onClick={() => handleBulkSectionToggle('order')}
                            aria-expanded={openBulkSections.order}
                            aria-controls={openBulkSections.order ? bulkOrderPanelId : undefined}
                          >
                            <div className="menu-bulk__title">
                              <i className="fa-solid fa-arrow-down-1-9" aria-hidden="true"></i>
                              <span>Order</span>
                            </div>
                            <i
                              className={`fa-solid ${openBulkSections.order ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                              aria-hidden="true"
                            ></i>
                          </button>
                          {openBulkSections.order && (
                            <div
                              className="menu-bulk__content"
                              id={bulkOrderPanelId}
                              role="region"
                              aria-label="Bulk order updates"
                            >
                              <div className="menu-fields menu-fields--compact menu-fields--order">
                                <div className="menu-field menu-field--order-start">
                                  <span className="menu-label">Start</span>
                                  <input
                                    type="number"
                                    className="text_pole"
                                    placeholder="e.g. 1"
                                    aria-label="Starting order number"
                                    value={bulkOrderStart ?? ''}
                                    onChange={(e) =>
                                      setBulkOrderStart(e.target.value === '' ? undefined : Number(e.target.value))
                                    }
                                  />
                                </div>
                                <div className="menu-field menu-field--order-direction">
                                  <span className="menu-label">Direction</span>
                                  <select
                                    className="text_pole"
                                    value={bulkOrderDirection}
                                    onChange={(e) => setBulkOrderDirection(e.target.value as 'asc' | 'desc')}
                                    aria-label="Bulk order direction"
                                  >
                                    <option value="asc">Low → High</option>
                                    <option value="desc">High → Low</option>
                                  </select>
                                </div>
                              </div>
                              <div className="menu-bulk__actions">
                                <STButton
                                  disabled={selectedIds.size === 0 || bulkOrderStart === undefined}
                                  onClick={handleBulkEditOrder}
                                  className="menu_button menu_button--compact"
                                >
                                  <i className="fa-solid fa-list-check" aria-hidden="true"></i>
                                  <span>Apply order</span>
                                </STButton>
                              </div>
                            </div>
                          )}
                        </div>
                        <div
                          className={`menu-bulk__section ${
                            openBulkSections.position ? 'menu-bulk__section--open' : ''
                          }`}
                        >
                          <button
                            type="button"
                            className="menu-bulk__toggle"
                            onClick={() => handleBulkSectionToggle('position')}
                            aria-expanded={openBulkSections.position}
                            aria-controls={openBulkSections.position ? bulkPositionPanelId : undefined}
                          >
                            <div className="menu-bulk__title">
                              <i className="fa-solid fa-layer-group" aria-hidden="true"></i>
                              <span>Position</span>
                            </div>
                            <i
                              className={`fa-solid ${openBulkSections.position ? 'fa-chevron-up' : 'fa-chevron-down'}`}
                              aria-hidden="true"
                            ></i>
                          </button>
                          {openBulkSections.position && (
                            <div
                              className="menu-bulk__content"
                              id={bulkPositionPanelId}
                              role="region"
                              aria-label="Bulk position updates"
                            >
                              <div className="menu-fields menu-fields--compact">
                                <div className="menu-field">
                                  <span className="menu-label">Position preset</span>
                                  <select
                                    className="text_pole"
                                    value={bulkPosition ?? ''}
                                    onChange={(e) => {
                                      const newPos = e.target.value === '' ? undefined : Number(e.target.value);
                                      setBulkPosition(newPos);
                                      if (newPos !== 4) {
                                        setBulkDepth(null);
                                        setBulkRoleAtDepth(null);
                                      }
                                    }}
                                    aria-label="Bulk position preset"
                                  >
                                    <option value="">Keep current position</option>
                                    {POSITION_OPTIONS.map((opt) => (
                                      <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                                {bulkPosition === 4 && (
                                  <div className="menu-field">
                                    <span className="menu-label">Depth</span>
                                    <input
                                      type="number"
                                      className="text_pole"
                                      placeholder="Depth"
                                      aria-label="Depth at position"
                                      value={bulkDepth ?? ''}
                                      onChange={(e) =>
                                        setBulkDepth(e.target.value === '' ? null : Number(e.target.value))
                                      }
                                    />
                                  </div>
                                )}
                                {bulkPosition === 4 && (
                                  <div className="menu-field">
                                    <span className="menu-label">Role</span>
                                    <select
                                      className="text_pole"
                                      value={bulkRoleAtDepth ?? ''}
                                      onChange={(e) =>
                                        setBulkRoleAtDepth(e.target.value === '' ? null : Number(e.target.value))
                                      }
                                      aria-label="Role at depth"
                                    >
                                      <option value="">Role</option>
                                      {ROLE_AT_DEPTH.map((opt) => (
                                        <option key={opt.value} value={opt.value}>
                                          {opt.label}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                )}
                              </div>
                              <div className="menu-bulk__actions">
                                <STButton
                                  disabled={selectedIds.size === 0}
                                  onClick={handleBulkEditPosition}
                                  className="menu_button menu_button--compact"
                                >
                                  <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
                                  <span>Apply position</span>
                                </STButton>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            ) : null}
            {activeMenuTab === 'categories' ? (
              <div
                className="menu-tab-panel menu-tab-panel--categories"
                role="tabpanel"
                id={categoriesPanelId}
                aria-labelledby={categoriesTabId}
              >
                <div className="category-dashboard">
                  <div className="category-dashboard__body">
                    <section className="category-dashboard__section category-dashboard__section--manager">
                      <h4 className="category-dashboard__section-title">Manage categories</h4>
                      {activeWorld ? (
                        <div
                          className="category-dashboard__manager"
                          role="region"
                          aria-label={`Manage categories for ${activeWorld}`}
                        >
                          <CategoryCreateForm
                            key={activeWorld ?? 'none'}
                            disabled={!activeWorld}
                            onCreate={handleCreateCategory}
                          />
                          {activeCategories.length === 0 ? (
                            <p className="category-dashboard__empty">No categories yet.</p>
                          ) : (
                            <ul className="category-dashboard__list" ref={categoryListRef}>
                              {activeCategories.map((category) => {
                                const previewColor = getCategoryColorValue(category);
                                const previewIcon = sanitizeCategoryIcon(category.icon);
                                const previewStyle = {
                                  '--category-preview-color': previewColor,
                                } as CSSProperties;
                                const isFilterActive = selectedCategoryFilters.has(category.id);
                                const filterToggleTitle = isFilterActive
                                  ? 'Remove from active filters'
                                  : 'Add to active filters';
                                const isExpanded = expandedCategoryPanels[category.id] === true;
                                return (
                                  <li key={category.id} className="category-dashboard__item">
                                    <details
                                      className="category-dashboard__item-panel"
                                      open={isExpanded}
                                      onToggle={(event) =>
                                        setCategoryPanelExpanded(activeWorld, category.id, event.currentTarget.open)
                                      }
                                    >
                                      <summary
                                        className="category-dashboard__item-summary"
                                        data-filter-active={isFilterActive ? 'true' : 'false'}
                                        style={previewStyle}
                                      >
                                        <span
                                          className="category-dashboard__drag-handle"
                                          aria-label="Reorder category"
                                          title="Drag to reorder"
                                        >
                                          <i className="fa-solid fa-grip-vertical" aria-hidden="true"></i>
                                        </span>
                                        <span className="category-dashboard__summary-content">
                                          <span className="category-dashboard__summary-main">
                                            <span
                                              className="category-dashboard__preview"
                                              style={previewStyle}
                                              data-has-icon={previewIcon ? 'true' : 'false'}
                                              aria-hidden="true"
                                            >
                                              {previewIcon ? (
                                                <span className="category-dashboard__preview-icon">{previewIcon}</span>
                                              ) : (
                                                <span className="category-dashboard__preview-dot" />
                                              )}
                                            </span>
                                            <span className="category-dashboard__summary-name">{category.name}</span>
                                          </span>
                                          <label
                                            className="category-dashboard__filter-toggle"
                                            data-active={isFilterActive ? 'true' : 'false'}
                                            title={filterToggleTitle}
                                            onClick={(event) => {
                                              event.stopPropagation();
                                            }}
                                            onPointerDown={(event) => {
                                              event.stopPropagation();
                                            }}
                                            onKeyDown={(event) => event.stopPropagation()}
                                          >
                                            <input
                                              type="checkbox"
                                              checked={isFilterActive}
                                              onChange={(event) =>
                                                setCategoryFilterState(category.id, event.currentTarget.checked)
                                              }
                                              aria-label={`Filter by ${category.name}`}
                                            />
                                            <span
                                              className="category-dashboard__filter-toggle-box"
                                              aria-hidden="true"
                                            />
                                          </label>
                                        </span>
                                        <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                                      </summary>
                                      <div className="category-dashboard__item-body">
                                        <div className="category-dashboard__item-main">
                                          <span
                                            className="category-dashboard__preview"
                                            style={previewStyle}
                                            data-has-icon={previewIcon ? 'true' : 'false'}
                                            aria-hidden="true"
                                          >
                                            {previewIcon ? (
                                              <span className="category-dashboard__preview-icon">{previewIcon}</span>
                                            ) : (
                                              <span className="category-dashboard__preview-dot" />
                                            )}
                                          </span>
                                          <input
                                            key={`${category.id}-${category.name}`}
                                            type="text"
                                            className="text_pole"
                                            defaultValue={category.name}
                                            onBlur={(event) =>
                                              handleRenameCategory(activeWorld, category.id, event.target.value)
                                            }
                                            onKeyDown={(event) => {
                                              if (event.key === 'Enter') {
                                                event.preventDefault();
                                                (event.currentTarget as HTMLInputElement).blur();
                                              }
                                            }}
                                          />
                                        </div>
                                        <div className="category-dashboard__item-controls">
                                          <input
                                            type="text"
                                            className="text_pole category-dashboard__icon-input"
                                            value={category.icon ?? ''}
                                            onChange={(event) =>
                                              handleUpdateCategoryIcon(activeWorld, category.id, event.target.value)
                                            }
                                            placeholder="Icon"
                                            aria-label={`Icon for ${category.name}`}
                                          />
                                          <div className="category-dashboard__color-group">
                                            <input
                                              type="color"
                                              className="category-dashboard__color"
                                              value={category.color ?? CATEGORY_COLOR_FALLBACK}
                                              onChange={(event) =>
                                                handleUpdateCategoryColor(activeWorld, category.id, event.target.value)
                                              }
                                              aria-label={`Color for ${category.name}`}
                                              data-empty={category.color ? 'false' : 'true'}
                                            />
                                            <button
                                              type="button"
                                              className="category-dashboard__color-clear"
                                              onClick={() => handleUpdateCategoryColor(activeWorld, category.id, '')}
                                              disabled={!category.color}
                                              title="Clear color"
                                              aria-label="Clear color"
                                            >
                                              <i className="fa-solid fa-eraser" aria-hidden="true"></i>
                                            </button>
                                          </div>
                                          <button
                                            type="button"
                                            className="category-dashboard__delete"
                                            onClick={() => handleDeleteCategory(activeWorld, category.id)}
                                            title="Remove category"
                                          >
                                            <i className="fa-solid fa-trash" aria-hidden="true"></i>
                                            <span>Remove</span>
                                          </button>
                                        </div>
                                      </div>
                                    </details>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <p className="category-dashboard__placeholder">Select a lorebook to manage categories.</p>
                      )}
                    </section>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </aside>
      <section className="lorebook-editor__content">{entriesContent}</section>
    </div>
  );
};
