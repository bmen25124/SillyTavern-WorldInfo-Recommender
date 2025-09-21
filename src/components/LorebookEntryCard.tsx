import {
  ChangeEvent,
  CSSProperties,
  FC,
  FocusEvent,
  MouseEvent as ReactMouseEvent,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { STButton } from 'sillytavern-utils-lib/components';
import { ExtendedWIEntry, ROLE_AT_DEPTH } from '../types.js';
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

const COMMIT_DEBOUNCE_MS = 200;

const parseTriggerInput = (value: string): string[] =>
  value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

const normalizeTriggers = (values: string[]): string => values.join(', ');

interface LorebookEntryCardProps {
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
  onAssignOrderRange: (worldName: string, uid: number, start: number, end: number) => void;
}

const LorebookEntryCardComponent: FC<LorebookEntryCardProps> = ({
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
  onAssignOrderRange,
}) => {
  const commentInputRef = useRef<HTMLInputElement | null>(null);
  const [isTriggersExpanded, setIsTriggersExpanded] = useState(false);
  const [isContentExpanded, setIsContentExpanded] = useState(false);
  const triggersRef = useRef<HTMLTextAreaElement | null>(null);
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  const [orderInputValue, setOrderInputValue] = useState(() => formatOrderValue(entry.order));

  const triggerSummary = useMemo(() => entry.key.join(', '), [entry.key]);

  const commentValueRef = useRef(entry.comment ?? '');
  const triggersValueRef = useRef(triggerSummary);
  const contentValueRef = useRef(entry.content);

  const commentTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggersTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const contentTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lastCommittedCommentRef = useRef<string>(commentValueRef.current);
  const lastCommittedTriggersRef = useRef<string>(triggerSummary);
  const lastCommittedContentRef = useRef<string>(contentValueRef.current);

  const adjustTextareaHeight = useCallback((element: HTMLTextAreaElement | null) => {
    if (!element) {
      return;
    }

    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  }, []);

  useEffect(() => {
    const nextComment = entry.comment ?? '';
    lastCommittedCommentRef.current = nextComment;
    commentValueRef.current = nextComment;
    const input = commentInputRef.current;
    if (input && input.value !== nextComment) {
      input.value = nextComment;
    }
  }, [entry.comment, entry.uid]);

  useEffect(() => {
    setOrderInputValue(formatOrderValue(entry.order));
  }, [entry.order, entry.uid]);

  useEffect(() => {
    lastCommittedTriggersRef.current = triggerSummary;
    triggersValueRef.current = triggerSummary;
    const textarea = triggersRef.current;
    if (textarea && textarea.value !== triggerSummary) {
      textarea.value = triggerSummary;
    }
    if (isTriggersExpanded) {
      adjustTextareaHeight(textarea);
    }
  }, [triggerSummary, entry.uid, isTriggersExpanded, adjustTextareaHeight]);

  useEffect(() => {
    lastCommittedContentRef.current = entry.content;
    contentValueRef.current = entry.content;
    const textarea = contentRef.current;
    if (textarea && textarea.value !== entry.content) {
      textarea.value = entry.content;
    }
    if (isContentExpanded) {
      adjustTextareaHeight(textarea);
    }
  }, [entry.content, entry.uid, isContentExpanded, adjustTextareaHeight]);

  const commitComment = useCallback(
    (value: string) => {
      if (value === lastCommittedCommentRef.current) {
        return;
      }
      lastCommittedCommentRef.current = value;
      onChange(worldName, entry.uid, { comment: value });
    },
    [entry.uid, onChange, worldName],
  );

  const scheduleCommentCommit = useCallback(
    (value: string) => {
      if (value === lastCommittedCommentRef.current) {
        if (commentTimeoutRef.current) {
          clearTimeout(commentTimeoutRef.current);
          commentTimeoutRef.current = null;
        }
        return;
      }

      if (commentTimeoutRef.current) {
        clearTimeout(commentTimeoutRef.current);
      }
      commentTimeoutRef.current = setTimeout(() => {
        commentTimeoutRef.current = null;
        commitComment(value);
      }, COMMIT_DEBOUNCE_MS);
    },
    [commitComment],
  );

  const flushComment = useCallback(
    (value?: string) => {
      const nextValue = value ?? commentValueRef.current;
      if (commentTimeoutRef.current) {
        clearTimeout(commentTimeoutRef.current);
        commentTimeoutRef.current = null;
      }
      commitComment(nextValue);
    },
    [commitComment],
  );

  const commitTriggers = useCallback(
    (value: string) => {
      const parsed = parseTriggerInput(value);
      const normalized = normalizeTriggers(parsed);
      if (normalized === lastCommittedTriggersRef.current) {
        return;
      }
      lastCommittedTriggersRef.current = normalized;
      onChange(worldName, entry.uid, { key: parsed });
    },
    [entry.uid, onChange, worldName],
  );

  const scheduleTriggersCommit = useCallback(
    (value: string) => {
      const parsed = parseTriggerInput(value);
      const normalized = normalizeTriggers(parsed);
      if (normalized === lastCommittedTriggersRef.current) {
        if (triggersTimeoutRef.current) {
          clearTimeout(triggersTimeoutRef.current);
          triggersTimeoutRef.current = null;
        }
        return;
      }

      if (triggersTimeoutRef.current) {
        clearTimeout(triggersTimeoutRef.current);
      }
      triggersTimeoutRef.current = setTimeout(() => {
        triggersTimeoutRef.current = null;
        commitTriggers(value);
      }, COMMIT_DEBOUNCE_MS);
    },
    [commitTriggers],
  );

  const flushTriggers = useCallback(
    (value?: string) => {
      const nextValue = value ?? triggersValueRef.current;
      if (triggersTimeoutRef.current) {
        clearTimeout(triggersTimeoutRef.current);
        triggersTimeoutRef.current = null;
      }
      commitTriggers(nextValue);
    },
    [commitTriggers],
  );

  const commitContent = useCallback(
    (value: string) => {
      if (value === lastCommittedContentRef.current) {
        return;
      }
      lastCommittedContentRef.current = value;
      onChange(worldName, entry.uid, { content: value });
    },
    [entry.uid, onChange, worldName],
  );

  const scheduleContentCommit = useCallback(
    (value: string) => {
      if (value === lastCommittedContentRef.current) {
        if (contentTimeoutRef.current) {
          clearTimeout(contentTimeoutRef.current);
          contentTimeoutRef.current = null;
        }
        return;
      }

      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
      }
      contentTimeoutRef.current = setTimeout(() => {
        contentTimeoutRef.current = null;
        commitContent(value);
      }, COMMIT_DEBOUNCE_MS);
    },
    [commitContent],
  );

  const flushContent = useCallback(
    (value?: string) => {
      const nextValue = value ?? contentValueRef.current;
      if (contentTimeoutRef.current) {
        clearTimeout(contentTimeoutRef.current);
        contentTimeoutRef.current = null;
      }
      commitContent(nextValue);
    },
    [commitContent],
  );

  const flushAllPendingChanges = useCallback(() => {
    flushComment();
    flushTriggers();
    flushContent();
  }, [flushComment, flushContent, flushTriggers]);

  const handleSaveClick = useCallback(() => {
    flushAllPendingChanges();
    setTimeout(() => {
      onSave(worldName, entry.uid);
    }, 0);
  }, [flushAllPendingChanges, onSave, worldName, entry.uid]);

  useEffect(() => {
    return () => {
      flushAllPendingChanges();
    };
  }, [flushAllPendingChanges, entry.uid]);

  const handleTriggersFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    setIsTriggersExpanded(true);
    adjustTextareaHeight(event.currentTarget);
  };

  const handleTriggersBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    setIsTriggersExpanded(false);
    event.currentTarget.style.height = '';
  };

  const handleContentFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    setIsContentExpanded(true);
    adjustTextareaHeight(event.currentTarget);
  };

  const handleContentBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    setIsContentExpanded(false);
    event.currentTarget.style.height = '';
  };

  useEffect(() => {
    if (isTriggersExpanded) {
      adjustTextareaHeight(triggersRef.current);
    }
  }, [isTriggersExpanded, adjustTextareaHeight]);

  useEffect(() => {
    if (isContentExpanded) {
      adjustTextareaHeight(contentRef.current);
    }
  }, [isContentExpanded, adjustTextareaHeight]);

  const selectedCategoryOption = useMemo(() => {
    if (!categoryId) {
      return undefined;
    }
    return categoryOptions.find((option) => option.value === categoryId);
  }, [categoryId, categoryOptions]);

  const categoryColorStyle = categoryVisual?.color
    ? ({ '--entry-card-category-color': categoryVisual.color } as CSSProperties)
    : undefined;
  const categoryIcon = categoryVisual?.icon;

  const strategyValue = useMemo(() => getStrategyValueForEntry(entry), [entry.constant, entry.vectorized]);

  const selectedStrategyOption = useMemo(
    () => STRATEGY_OPTIONS.find((option) => option.value === strategyValue) ?? STRATEGY_OPTIONS[0],
    [strategyValue],
  );

  const strategyTooltip = `${selectedStrategyOption.description}. ${MULTI_ASSIGN_TOOLTIP}`;

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

  const positionSelectValue = useMemo(
    () => getPositionSelectValue(entry.position, entry.roleAtDepth),
    [entry.position, entry.roleAtDepth],
  );

  const isAtDepthPosition = entry.position === 4;

  const cardClassName = [
    'entry-card',
    isDirty ? 'entry-card--dirty' : '',
    isSelected ? 'entry-card--selected' : '',
    categoryId ? 'entry-card--categorized' : '',
  ]
    .filter(Boolean)
    .join(' ');

  const buildFieldId = (suffix: string) => `entry-${worldName}-${entry.uid}-${suffix}`;

  const handleOrderInputChange = useCallback(
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

  const handleOrderInputBlur = useCallback(() => {
    setOrderInputValue(formatOrderValue(entry.order));
  }, [entry.order]);

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onCategoryChange(worldName, entry.uid, value === '' ? null : value);
  };

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

  const handleCardClick = useCallback(
    (event: ReactMouseEvent<HTMLElement>) => {
      if (!event.shiftKey) {
        return;
      }

      const target = event.target as HTMLElement | null;
      if (!target || target.closest('input, textarea, select, button, a, [role="button"], [contenteditable="true"]')) {
        return;
      }

      event.preventDefault();
      onToggleSelect(worldName, entry.uid, undefined, { shiftKey: true });
    },
    [entry.uid, onToggleSelect, worldName],
  );

  return (
    <article className={cardClassName} data-uid={entry.uid} style={categoryColorStyle} onClick={handleCardClick}>
      <header className="entry-card__header">
        <div className="entry-card__select">
          <label className="entry-card__select-toggle" htmlFor={buildFieldId('select-toggle')}>
            <input
              id={buildFieldId('select-toggle')}
              type="checkbox"
              checked={isSelected}
              onChange={(event) => onToggleSelect(worldName, entry.uid, event)}
              aria-label={`Select entry ${entry.uid}`}
              title="Shift-click checkboxes or entry cards to select a range"
            />
          </label>
          <div className="entry-card__select-info">
            {isDirty ? (
              <span className="entry-card__badge entry-card__badge--dirty entry-card__badge--compact">Unsaved</span>
            ) : null}
            <span className="entry-card__uid-label">UID {entry.uid}</span>
            <div className="entry-card__metrics">
              <label className="entry-card__metric entry-card__metric--order" htmlFor={buildFieldId('summary-order')}>
                <span>Order</span>
                <input
                  id={buildFieldId('summary-order')}
                  type="text"
                  inputMode="numeric"
                  className="entry-card__quick-input"
                  value={orderInputValue}
                  onChange={handleOrderInputChange}
                  onBlur={handleOrderInputBlur}
                  title="Set the order or assign a range (e.g. 1-10 or 10-1)"
                />
              </label>
              <div className="entry-card__metric entry-card__metric--position">
                <select
                  id={buildFieldId('summary-position')}
                  className="entry-card__quick-input entry-card__quick-input--position"
                  data-position={entry.position != null ? String(entry.position) : 'none'}
                  value={positionSelectValue}
                  onChange={handlePositionChange}
                  aria-label="Entry position"
                  title={`Entry position. ${MULTI_ASSIGN_TOOLTIP}`}
                >
                  <option value=""></option>
                  {POSITION_SELECT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {isAtDepthPosition && (
                <label className="entry-card__metric entry-card__metric--depth" htmlFor={buildFieldId('summary-depth')}>
                  <span>Depth</span>
                  <input
                    id={buildFieldId('summary-depth')}
                    type="number"
                    className="entry-card__quick-input"
                    value={entry.depth ?? ''}
                    onChange={(event) =>
                      onChange(worldName, entry.uid, {
                        depth: event.target.value === '' ? null : Number(event.target.value),
                      })
                    }
                    title={MULTI_ASSIGN_TOOLTIP}
                  />
                </label>
              )}
              {isAtDepthPosition && (
                <label className="entry-card__metric entry-card__metric--role" htmlFor={buildFieldId('summary-role')}>
                  <span>Role</span>
                  <select
                    id={buildFieldId('summary-role')}
                    className="entry-card__quick-input"
                    value={entry.roleAtDepth ?? ''}
                    onChange={(event) =>
                      onChange(worldName, entry.uid, {
                        roleAtDepth: event.target.value === '' ? null : Number(event.target.value),
                      })
                    }
                    title={MULTI_ASSIGN_TOOLTIP}
                  >
                    <option value=""></option>
                    {ROLE_AT_DEPTH.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </label>
              )}
            </div>
          </div>
        </div>
        <div className="entry-card__summary">
          <div className="entry-card__title-row">
            <div className="entry-card__category-control">
              <select
                id={buildFieldId('strategy')}
                className="entry-card__strategy-select"
                aria-label={`Activation mode: ${selectedStrategyOption.label}`}
                title={strategyTooltip}
                value={strategyValue}
                onChange={handleStrategyChange}
                data-mode={strategyValue}
              >
                {STRATEGY_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.icon}
                  </option>
                ))}
              </select>
              {categoryId ? (
                <span
                  className="entry-card__category-marker"
                  style={categoryColorStyle}
                  aria-hidden="true"
                  title={selectedCategoryOption?.label}
                  data-has-icon={categoryIcon ? 'true' : 'false'}
                >
                  {categoryIcon ? (
                    <span className="entry-card__category-marker-icon">{categoryIcon}</span>
                  ) : (
                    <span className="entry-card__category-marker-dot" />
                  )}
                </span>
              ) : null}
              <select
                id={buildFieldId('category')}
                className="entry-card__quick-input entry-card__category-select"
                aria-label="Category"
                value={categoryId ?? ''}
                onChange={handleCategoryChange}
                title={MULTI_ASSIGN_TOOLTIP}
              >
                <option value="">Uncategorized</option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <input
              id={buildFieldId('summary-name')}
              ref={commentInputRef}
              type="text"
              className="entry-card__title-input"
              aria-label="Display name"
              placeholder="Untitled entry"
              defaultValue={commentValueRef.current}
              onChange={(event) => {
                const value = event.target.value;
                commentValueRef.current = value;
                scheduleCommentCommit(value);
              }}
              onBlur={(event) => {
                const value = event.target.value;
                commentValueRef.current = value;
                flushComment(value);
              }}
            />
          </div>
          <div className="entry-card__inline-editor entry-card__inline-editor--triggers">
            <label htmlFor={buildFieldId('triggers')} className="entry-card__inline-label">
              Triggers
            </label>
            <textarea
              id={buildFieldId('triggers')}
              ref={triggersRef}
              className={[
                'entry-card__inline-textarea',
                'entry-card__inline-textarea--triggers',
                isTriggersExpanded ? 'entry-card__inline-textarea--expanded' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              defaultValue={triggersValueRef.current}
              rows={1}
              onFocus={handleTriggersFocus}
              onBlur={(event) => {
                handleTriggersBlur(event);
                const value = event.currentTarget.value;
                triggersValueRef.current = value;
                flushTriggers(value);
              }}
              onChange={(event) => {
                const value = event.currentTarget.value;
                triggersValueRef.current = value;
                adjustTextareaHeight(event.currentTarget);
                scheduleTriggersCommit(value);
              }}
            />
          </div>
          <div className="entry-card__inline-editor entry-card__inline-editor--content">
            <label htmlFor={buildFieldId('content')} className="entry-card__inline-label">
              Content
            </label>
            <textarea
              id={buildFieldId('content')}
              ref={contentRef}
              className={[
                'entry-card__inline-textarea',
                'entry-card__inline-textarea--content',
                isContentExpanded ? 'entry-card__inline-textarea--expanded' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              defaultValue={contentValueRef.current}
              rows={3}
              onFocus={handleContentFocus}
              onBlur={(event) => {
                handleContentBlur(event);
                const value = event.currentTarget.value;
                contentValueRef.current = value;
                flushContent(value);
              }}
              onChange={(event) => {
                const value = event.currentTarget.value;
                contentValueRef.current = value;
                adjustTextareaHeight(event.currentTarget);
                scheduleContentCommit(value);
              }}
            />
          </div>
          <div className="entry-card__actions">
            <STButton
              disabled={!isDirty}
              onClick={handleSaveClick}
              className="menu_button primary"
              title="Save this entry"
            >
              <i className="fa-solid fa-floppy-disk" aria-hidden="true"></i>
              <span>Save</span>
            </STButton>
            <STButton
              disabled={isDeleting}
              onClick={() => onDelete(worldName, entry.uid)}
              className="menu_button ghost"
              title="Delete this entry (create a backup first)"
              aria-busy={isDeleting}
            >
              <i className="fa-solid fa-trash" aria-hidden="true"></i>
              <span>{isDeleting ? 'Deleting…' : 'Delete'}</span>
            </STButton>
          </div>
        </div>
      </header>
    </article>
  );
};

export const LorebookEntryCard = memo(LorebookEntryCardComponent);
LorebookEntryCard.displayName = 'LorebookEntryCard';
