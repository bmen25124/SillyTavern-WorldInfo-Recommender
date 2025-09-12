import { FC, useMemo } from 'react';
import { diffWords } from 'diff';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { t } from '../i18n.js';

interface CompareEntryPopupProps {
  originalEntry: WIEntry;
  newEntry: WIEntry;
}

export const CompareEntryPopup: FC<CompareEntryPopupProps> = ({ originalEntry, newEntry }) => {
  // useMemo will calculate the diff only when the entries change.
  const diffResult = useMemo(() => {
    const diff = diffWords(originalEntry.content, newEntry.content);
    let originalHtml = '';
    let newHtml = '';

    diff.forEach((part) => {
      // Style based on whether the part was added, removed, or is common
      const style = part.added
        ? 'color: green; background-color: #e6ffed;'
        : part.removed
          ? 'color: red; background-color: #ffebe9;'
          : 'color: grey;';

      const span = `<span style="${style}">${part.value}</span>`;

      if (!part.added) {
        originalHtml += span;
      }
      if (!part.removed) {
        newHtml += span;
      }
    });

    return { originalHtml, newHtml };
  }, [originalEntry, newEntry]);

  return (
    <div className="compare-popup" style={{ padding: '10px' }}>
      <h3>{t('compareChanges')}</h3>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        {/* Original Content Column */}
        <div style={{ flex: '1' }}>
          <h4>{t('originalContent')}</h4>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              fontFamily: 'monospace',
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              maxHeight: '400px',
              overflowY: 'auto',
            }}
            dangerouslySetInnerHTML={{ __html: diffResult.originalHtml }}
          />
        </div>

        {/* New Content Column */}
        <div style={{ flex: '1' }}>
          <h4>{t('newContentSuggestion')}</h4>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              fontFamily: 'monospace',
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              maxHeight: '400px',
              overflowY: 'auto',
            }}
            dangerouslySetInnerHTML={{ __html: diffResult.newHtml }}
          />
        </div>
      </div>
    </div>
  );
};
