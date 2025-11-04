import { FC, useMemo } from 'react';
import { diffWords } from 'diff';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { ReviseState, ReviseSessionType } from '../revise-types';

interface CompareStatePopupProps {
  sessionType: ReviseSessionType;
  before: ReviseState;
  after: ReviseState;
}

const DiffView: FC<{ originalContent: string; newContent: string }> = ({ originalContent, newContent }) => {
  const diffResult = useMemo(() => {
    const diff = diffWords(originalContent, newContent);
    let originalHtml = '';
    let newHtml = '';

    diff.forEach((part) => {
      const sanitizedValue = part.value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
        .replace(/\n/g, '<br>');

      const style = part.added
        ? 'color: green; background-color: #e6ffed;'
        : part.removed
          ? 'color: red; background-color: #ffebe9;'
          : 'color: grey;';

      const span = `<span style="${style}">${sanitizedValue}</span>`;

      if (!part.added) {
        originalHtml += span;
      }
      if (!part.removed) {
        newHtml += span;
      }
    });

    return { originalHtml, newHtml };
  }, [originalContent, newContent]);

  return (
    <div className="compare-state-diff-grid">
      <div className="content" dangerouslySetInnerHTML={{ __html: diffResult.originalHtml }} />
      <div className="content" dangerouslySetInnerHTML={{ __html: diffResult.newHtml }} />
    </div>
  );
};

const SingleEntryDiff: FC<{ before: WIEntry; after: WIEntry }> = ({ before, after }) => {
  const changedFields = useMemo(() => {
    const changes: { label: string; before: string; after: string }[] = [];
    if (!before || !after) return changes;

    if ((before.comment || '') !== (after.comment || '')) {
      changes.push({ label: 'Name', before: before.comment || '', after: after.comment || '' });
    }
    if ((before.key || []).join(', ') !== (after.key || []).join(', ')) {
      changes.push({ label: 'Triggers', before: (before.key || []).join(', '), after: (after.key || []).join(', ') });
    }
    if ((before.content || '') !== (after.content || '')) {
      changes.push({ label: 'Content', before: before.content || '', after: after.content || '' });
    }
    return changes;
  }, [before, after]);

  return (
    <>
      {changedFields.map(({ label, before, after }) => (
        <div key={label} className="compare-state-item">
          <h4>{label}</h4>
          <div className="compare-state-header">
            <span>Before</span>
            <span>After</span>
          </div>
          <DiffView originalContent={before} newContent={after} />
        </div>
      ))}
    </>
  );
};

const GlobalDiff: FC<{ before: Record<string, WIEntry[]>; after: Record<string, WIEntry[]> }> = ({ before, after }) => {
  const { added, removed, changed } = useMemo(() => {
    const validBefore = before || {};
    // Use a composite key (worldName::uid) to ensure uniqueness across all lorebooks.
    const beforeMap = new Map<string, { worldName: string; entry: WIEntry }>();
    Object.entries(validBefore).forEach(([worldName, entries]) => {
      entries.forEach((entry) => {
        const compositeKey = `${worldName}::${entry.uid}`;
        beforeMap.set(compositeKey, { worldName, entry });
      });
    });

    const addedEntries: { worldName: string; entry: WIEntry }[] = [];
    const removedEntries: { worldName: string; entry: WIEntry }[] = [];
    const changedEntries: { worldName: string; before: WIEntry; after: WIEntry }[] = [];

    const afterEntriesList = Object.entries(after || {}).flatMap(([worldName, entries]) =>
      entries.map((entry) => ({ worldName, entry })),
    );

    for (const { worldName, entry } of afterEntriesList) {
      const compositeKey = `${worldName}::${entry.uid}`;
      if (beforeMap.has(compositeKey)) {
        const beforeData = beforeMap.get(compositeKey)!;
        const beforeEntry = beforeData.entry;
        if (
          beforeEntry.comment !== entry.comment ||
          beforeEntry.content !== entry.content ||
          (beforeEntry.key || []).join(',') !== (entry.key || []).join(',')
        ) {
          changedEntries.push({ worldName, before: beforeEntry, after: entry });
        }
        beforeMap.delete(compositeKey);
      } else {
        addedEntries.push({ worldName, entry });
      }
    }

    beforeMap.forEach(({ worldName, entry }) => {
      removedEntries.push({ worldName, entry });
    });

    return { added: addedEntries, removed: removedEntries, changed: changedEntries };
  }, [before, after]);

  const hasChanges = added.length > 0 || removed.length > 0 || changed.length > 0;

  return (
    <div className="global-diff">
      {!hasChanges ? (
        <p className="subtle" style={{ textAlign: 'center' }}>
          No changes were detected in the entries for this step.
        </p>
      ) : (
        <>
          {added.length > 0 && (
            <div className="diff-section">
              <h4>Added Entries ({added.length})</h4>
              {added.map(({ worldName, entry }) => (
                <div key={`${worldName}::${entry.uid}`} className="diff-entry added">
                  <div className="diff-entry-header">
                    {entry.comment} <span>(in {worldName})</span>
                  </div>
                  <div className="diff-entry-content">{entry.content}</div>
                </div>
              ))}
            </div>
          )}
          {removed.length > 0 && (
            <div className="diff-section">
              <h4>Removed Entries ({removed.length})</h4>
              {removed.map(({ worldName, entry }) => (
                <div key={`${worldName}::${entry.uid}`} className="diff-entry removed">
                  <div className="diff-entry-header">
                    {entry.comment} <span>(from {worldName})</span>
                  </div>
                  <div className="diff-entry-content">{entry.content}</div>
                </div>
              ))}
            </div>
          )}
          {changed.length > 0 && (
            <div className="diff-section">
              <h4>Changed Entries ({changed.length})</h4>
              {changed.map(({ worldName, before, after }) => (
                <div key={`${worldName}::${after.uid}`} className="diff-entry changed">
                  <div className="diff-entry-header">
                    {after.comment} <span>(in {worldName})</span>
                  </div>
                  <SingleEntryDiff before={before} after={after} />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export const CompareStatePopup: FC<CompareStatePopupProps> = ({ sessionType, before, after }) => {
  if (!before && !after) {
    return (
      <div className="compare-state-popup">
        <h3>Changes in this step</h3>
        <p className="subtle" style={{ textAlign: 'center' }}>
          No state information available for this step.
        </p>
      </div>
    );
  }

  return (
    <div className="compare-state-popup">
      <h3>Changes in this step</h3>
      <div className="compare-state-list">
        {sessionType === 'global' ? (
          <GlobalDiff before={before as Record<string, WIEntry[]>} after={after as Record<string, WIEntry[]>} />
        ) : (
          <SingleEntryDiff before={before as WIEntry} after={after as WIEntry} />
        )}
      </div>
    </div>
  );
};
