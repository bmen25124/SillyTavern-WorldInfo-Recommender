import { ExtendedWIEntry } from '../types.js';

export const MULTI_ASSIGN_TOOLTIP =
  'Tip: Select multiple entries to apply activation mode, category, position, depth, or role changes to all selected cards in this lorebook.';

const ORDER_RANGE_PATTERN = /^(-?\d+)-(-?\d+)$/;

export type PositionSelectOption = {
  value: string;
  label: string;
  position: number;
  roleAtDepth?: number;
};

export const POSITION_SELECT_OPTIONS: PositionSelectOption[] = [
  { value: '0', label: '↑Char', position: 0 },
  { value: '1', label: '↓Char', position: 1 },
  { value: '5', label: '↑EM', position: 5 },
  { value: '6', label: '↓EM', position: 6 },
  { value: '2', label: '↑AN', position: 2 },
  { value: '3', label: '↓AN', position: 3 },
  { value: '4-system', label: '@D⚙️', position: 4, roleAtDepth: 0 },
  { value: '4-assistant', label: '@D🤖', position: 4, roleAtDepth: 2 },
  { value: '4-user', label: '@D🧑', position: 4, roleAtDepth: 1 },
];

export const STRATEGY_OPTIONS = [
  {
    value: 'keywords',
    icon: '🟢',
    label: 'Triggered by keywords',
    description: '🟢 Triggered by keywords (default)',
    constant: false,
    vectorized: false,
  },
  {
    value: 'constant',
    icon: '🔵',
    label: 'Constant (always active)',
    description: '🔵 Constant – always active',
    constant: true,
    vectorized: false,
  },
  {
    value: 'vectorized',
    icon: '🔗',
    label: 'Vectorized (activated by embeddings)',
    description: '🔗 Vectorized – activated by vectorization',
    constant: false,
    vectorized: true,
  },
] as const;

export type StrategyOptionValue = (typeof STRATEGY_OPTIONS)[number]['value'];

export const getStrategyValueForEntry = (
  entry: Pick<ExtendedWIEntry, 'constant' | 'vectorized'>,
): StrategyOptionValue => {
  if (entry.vectorized) {
    return 'vectorized';
  }

  if (entry.constant) {
    return 'constant';
  }

  return 'keywords';
};

export const getPositionSelectValue = (position?: number, roleAtDepth?: number | null): string => {
  if (position == null) {
    return '';
  }

  if (position === 4) {
    switch (roleAtDepth) {
      case 1:
        return '4-user';
      case 2:
        return '4-assistant';
      default:
        return '4-system';
    }
  }

  return String(position);
};

export const getPositionUpdatesForValue = (value: string): Partial<ExtendedWIEntry> | null => {
  if (value === '') {
    return { position: undefined, depth: null, roleAtDepth: null };
  }

  const option = POSITION_SELECT_OPTIONS.find((item) => item.value === value);
  if (!option) {
    return null;
  }

  const updates: Partial<ExtendedWIEntry> = { position: option.position };

  if (option.position === 4) {
    updates.roleAtDepth = option.roleAtDepth ?? null;
  } else {
    updates.depth = null;
    updates.roleAtDepth = null;
  }

  return updates;
};

export const formatOrderValue = (value?: number | null): string => {
  if (value == null || Number.isNaN(value)) {
    return '';
  }

  return String(value);
};

export const parseOrderRangeValue = (value: string): { start: number; end: number } | null => {
  const normalized = value.replace(/\s+/g, '');
  if (!normalized) {
    return null;
  }

  const match = normalized.match(ORDER_RANGE_PATTERN);
  if (!match) {
    return null;
  }

  const start = Number.parseInt(match[1], 10);
  const end = Number.parseInt(match[2], 10);

  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    return null;
  }

  return { start, end };
};
