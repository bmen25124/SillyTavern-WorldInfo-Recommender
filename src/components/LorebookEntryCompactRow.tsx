import {
  ChangeEvent,
  CSSProperties,
  FC,
  MouseEvent as ReactMouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ExtendedWIEntry } from '../types.js';
import {
  MULTI_ASSIGN_TOOLTIP,
  POSITION_SELECT_OPTIONS,
  STRATEGY_OPTIONS,
  StrategyOptionValue,
  formatOrderValue,
  getPositionSelectValue,
  getPositionUpdatesForValue,
  getStrategyValueForEntry,
  parseOrderRangeValue,
} from './lorebookEntryUtils.js';

interface LorebookEntryCompactRowProps {
  entry: ExtendedWIEntry;
  worldName: string;
  isSelected: boolean;
  isDirty?: boolean;
  onToggleSelect: (
    worldName: string,
    uid: number,
    event?: ChangeEvent<HTMLInputElement>,
    options?: { shiftKey?: boolean; exclusive?: boolean },
  ) => void;
  onChange: (worldName: string, uid: number, changes: Partial<ExtendedWIEntry>) => void;
  onSave: (worldName: string, uid: number) => void | Promise<void>;
  onDelete: (worldName: string, uid: number) => void | Promise<void>;
  isDeleting?: boolean;
  categoryOptions: { value: string; label: string }[];
  categoryId?: string | null;
  categoryVisual?: { icon?: string; color?: string };
  onCategoryChange: (worldName: string, uid: number, categoryId: string | null) => void;
  categoryVisualsById: Record<string, { icon?: string; color?: string }>;
  onAssignOrderRange: (worldName: string, uid: number, start: number, end: number) => void;
  isExpanded: boolean;
  onToggleExpanded: (worldName: string, uid: number, nextExpanded: boolean) => void;
}

const parseTriggerInput = (value: string): string[] =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

export const LorebookEntryCompactRow: FC<LorebookEntryCompactRowProps> = ({
  entry,
  worldName,
  isSelected,
  isDirty,
  onToggleSelect,
  onChange,
  onSave,
  onDelete,
  isDeleting,
  categoryOptions,
  categoryId,
  categoryVisual,
  onCategoryChange,
  categoryVisualsById,
  onAssignOrderRange,
  isExpanded,
  onToggleExpanded,
}) => {
  const [orderInputValue, setOrderInputValue] = useState(() => formatOrderValue(entry.order));

  const strategyValue = getStrategyValueForEntry(entry);
  const positionSelectValue = getPositionSelectValue(entry.position, entry.roleAtDepth);
  const isAtDepthPosition = entry.position === 4;
  const triggerSummary = useMemo(() => entry.key.join(', '), [entry.key]);

  useEffect(() => {
    setOrderInputValue(formatOrderValue(entry.order));
  }, [entry.order, entry.uid]);

  const detailsPanelId = useMemo(() => `compact-entry-${entry.uid}-details`, [entry.uid]);
  const triggersFieldId = useMemo(() => `compact-entry-${entry.uid}-triggers`, [entry.uid]);
  const contentFieldId = useMemo(() => `compact-entry-${entry.uid}-content`, [entry.uid]);

  const categoryColorStyle = useMemo<CSSProperties | undefined>(() => {
    if (!categoryVisual?.color) {
      return undefined;
    }

    return { '--entry-card-category-color': categoryVisual.color } as CSSProperties;
  }, [categoryVisual?.color]);

  const categoryIcon = categoryVisual?.icon;

  const selectedCategoryOption = useMemo(() => {
    if (!categoryId) {
      return undefined;
    }

    return categoryOptions.find((option) => option.value === categoryId);
  }, [categoryId, categoryOptions]);

  const baseCategoryTitle = selectedCategoryOption?.label ?? 'Uncategorized';
  const categoryTitle = categoryIcon ? `${categoryIcon} ${baseCategoryTitle}` : baseCategoryTitle;

  const selectedStrategyOption = useMemo(
    () => STRATEGY_OPTIONS.find((option) => option.value === strategyValue) ?? STRATEGY_OPTIONS[0],
    [strategyValue],
  );

  const strategyTooltip = `${selectedStrategyOption.description}. ${MULTI_ASSIGN_TOOLTIP}`;

  const rowClassName = [
    'compact-entry',
    isDirty ? 'compact-entry--dirty' : '',
    isSelected ? 'compact-entry--selected' : '',
    categoryId ? 'compact-entry--categorized' : '',
    isExpanded ? 'compact-entry--expanded' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const handleOrderChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const nextValue = event.target.value;
      setOrderInputValue(nextValue);

      const trimmed = nextValue.trim();
      if (trimmed === '') {
        onChange(worldName, entry.uid, { order: undefined });
        return;
      }

      const range = parseOrderRangeValue(trimmed);
      if (range) {
        onAssignOrderRange(worldName, entry.uid, range.start, range.end);
        return;
      }

      const parsed = Number(trimmed);
      if (Number.isFinite(parsed)) {
        onChange(worldName, entry.uid, { order: parsed });
      }
    },
    [entry.uid, onAssignOrderRange, onChange, worldName],
  );

  const handleOrderBlur = useCallback(() => {
    setOrderInputValue(formatOrderValue(entry.order));
  }, [entry.order]);

  const handleCategoryChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      onCategoryChange(worldName, entry.uid, value === '' ? null : value);
    },
    [entry.uid, onCategoryChange, worldName],
  );

  const handleStrategyChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value as StrategyOptionValue;
      const option = STRATEGY_OPTIONS.find((item) => item.value === value);
      if (!option) {
        return;
      }

      onChange(worldName, entry.uid, { constant: option.constant, vectorized: option.vectorized });
    },
    [entry.uid, onChange, worldName],
  );

  const handlePositionChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const updates = getPositionUpdatesForValue(event.target.value);
      if (!updates) {
        return;
      }

      onChange(worldName, entry.uid, updates);
    },
    [entry.uid, onChange, worldName],
  );

  const handleTriggersChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      const parsed = parseTriggerInput(event.target.value);
      onChange(worldName, entry.uid, { key: parsed });
    },
    [entry.uid, onChange, worldName],
  );

  const handleContentChange = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>) => {
      onChange(worldName, entry.uid, { content: event.target.value });
    },
    [entry.uid, onChange, worldName],
  );

  const handleToggleExpanded = useCallback(() => {
    onToggleExpanded(worldName, entry.uid, !isExpanded);
  }, [entry.uid, isExpanded, onToggleExpanded, worldName]);

  const handleRowClick = useCallback(
    (event: ReactMouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLElement | null;
      if (!target || target.closest('input, select, button, a, [role="button"], [contenteditable="true"]')) {
        return;
      }

      event.preventDefault();

      if (event.shiftKey) {
        onToggleSelect(worldName, entry.uid, undefined, { shiftKey: true });
        return;
      }

      onToggleSelect(worldName, entry.uid, undefined, { exclusive: true });
    },
    [entry.uid, onToggleSelect, worldName],
  );

  return (
    <div className={rowClassName} data-uid={entry.uid} style={categoryColorStyle} onClick={handleRowClick}>
      <label className="compact-entry__checkbox">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(event) => onToggleSelect(worldName, entry.uid, event)}
          aria-label={`Select entry ${entry.uid}`}
          title="Shift-click to select a range"
        />
      </label>
      <div className="compact-entry__category" title={categoryTitle} style={categoryColorStyle}>
        <span
          className="compact-entry__category-visual"
          data-has-icon={categoryIcon ? 'true' : 'false'}
          aria-hidden="true"
        >
          {categoryIcon ? <span>{categoryIcon}</span> : <span className="compact-entry__category-dot" />}
        </span>
        <select aria-label="Entry category" value={categoryId ?? ''} onChange={handleCategoryChange}>
          <option value="">Uncategorized</option>
          {categoryOptions.map((option) => {
            const optionIcon = categoryVisualsById[option.value]?.icon;
            const optionLabel = optionIcon ? `${optionIcon} ${option.label}` : option.label;
            return (
              <option key={option.value} value={option.value}>
                {optionLabel}
              </option>
            );
          })}
        </select>
      </div>
      <div className="compact-entry__strategy">
        <select
          aria-label={`Activation mode: ${selectedStrategyOption.label}`}
          title={strategyTooltip}
          value={strategyValue}
          onChange={handleStrategyChange}
        >
          {STRATEGY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.icon}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        inputMode="numeric"
        className="compact-entry__order"
        aria-label="Order"
        value={orderInputValue}
        onChange={handleOrderChange}
        onBlur={handleOrderBlur}
        title="Set the order or assign a range (e.g. 1-10 or 10-1)"
      />
      <div className="compact-entry__position">
        <select aria-label="Entry position" value={positionSelectValue} onChange={handlePositionChange}>
          <option value=""></option>
          {POSITION_SELECT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <input
        type="number"
        className="compact-entry__depth"
        aria-label="Depth"
        placeholder="—"
        value={entry.depth ?? ''}
        disabled={!isAtDepthPosition}
        title={
          isAtDepthPosition ? 'Depth (only used for Depth positions)' : 'Depth available when Position is set to Depth'
        }
        onChange={(event) =>
          onChange(worldName, entry.uid, {
            depth: event.target.value === '' ? null : Number(event.target.value),
          })
        }
      />
      <input
        type="text"
        className="compact-entry__title"
        aria-label="Entry title"
        placeholder="Untitled entry"
        value={entry.comment ?? ''}
        onChange={(event) => onChange(worldName, entry.uid, { comment: event.target.value })}
      />
      <button
        type="button"
        className="compact-entry__icon-button compact-entry__icon-button--toggle"
        onClick={handleToggleExpanded}
        aria-expanded={isExpanded}
        aria-controls={detailsPanelId}
        title={isExpanded ? 'Collapse entry details' : 'Expand entry details'}
      >
        <i className={`fa-solid ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'}`} aria-hidden="true"></i>
        <span className="compact-entry__visually-hidden">{isExpanded ? 'Collapse details' : 'Expand details'}</span>
      </button>
      <button
        type="button"
        className="compact-entry__icon-button compact-entry__icon-button--save"
        onClick={() => {
          void onSave(worldName, entry.uid);
        }}
        disabled={!isDirty}
        title="Save entry"
      >
        <i className="fa-solid fa-floppy-disk" aria-hidden="true"></i>
        <span className="compact-entry__visually-hidden">Save</span>
      </button>
      <button
        type="button"
        className="compact-entry__icon-button compact-entry__icon-button--delete"
        onClick={() => {
          void onDelete(worldName, entry.uid);
        }}
        disabled={Boolean(isDeleting)}
        aria-busy={isDeleting}
        title="Delete entry"
      >
        <i className="fa-solid fa-trash" aria-hidden="true"></i>
        <span className="compact-entry__visually-hidden">Delete</span>
      </button>
      {isExpanded ? (
        <div
          className="compact-entry__details"
          id={detailsPanelId}
          role="group"
          aria-label={`Entry ${entry.uid} details`}
        >
          <div className="compact-entry__details-column">
            <label className="compact-entry__details-label" htmlFor={triggersFieldId}>
              Triggers
            </label>
            <textarea
              id={triggersFieldId}
              className="compact-entry__details-input compact-entry__details-input--triggers"
              value={triggerSummary}
              onChange={handleTriggersChange}
              placeholder="keyword1, keyword2"
              rows={2}
            />
          </div>
          <div className="compact-entry__details-column">
            <label className="compact-entry__details-label" htmlFor={contentFieldId}>
              Content
            </label>
            <textarea
              id={contentFieldId}
              className="compact-entry__details-input compact-entry__details-input--content"
              value={entry.content ?? ''}
              onChange={handleContentChange}
              placeholder="Lore entry text"
              rows={3}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
