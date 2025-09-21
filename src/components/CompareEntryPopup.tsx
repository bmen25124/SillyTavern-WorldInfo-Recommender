import { FC, useMemo } from 'react';
import { diffWords } from 'diff';
import { POSITION_OPTIONS, ROLE_AT_DEPTH, ExtendedWIEntry } from '../types.js';

interface CompareEntryPopupProps {
  originalEntry: ExtendedWIEntry;
  newEntry: ExtendedWIEntry;
}

export const CompareEntryPopup: FC<CompareEntryPopupProps> = ({ originalEntry, newEntry }) => {
  const generateDiffHtml = (original: string, updated: string) => {
    const diff = diffWords(original ?? '', updated ?? '');
    let originalHtml = '';
    let newHtml = '';

    diff.forEach((part) => {
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
  };

  const contentDiff = useMemo(
    () => generateDiffHtml(originalEntry.content, newEntry.content),
    [originalEntry.content, newEntry.content],
  );
  const commentDiff = useMemo(
    () => generateDiffHtml(originalEntry.comment, newEntry.comment),
    [originalEntry.comment, newEntry.comment],
  );
  const idChanged = originalEntry.uid !== newEntry.uid;
  const positionChanged = originalEntry.position !== newEntry.position;
  const depthChanged = originalEntry.depth !== newEntry.depth;
  const roleChanged = originalEntry.roleAtDepth !== newEntry.roleAtDepth;

  const getPositionLabel = (pos?: number) =>
    POSITION_OPTIONS.find((p) => p.value === pos)?.label ?? 'N/A';

  const getRoleLabel = (role?: number | null) =>
    ROLE_AT_DEPTH.find((r) => r.value === role)?.label ?? 'N/A';

  const commonStyle = {
    whiteSpace: 'pre-wrap' as const,
    fontFamily: 'monospace',
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxHeight: '400px',
    overflowY: 'auto' as const,
  };

  return (
    <div className="compare-popup" style={{ padding: '10px' }}>
      <h3>Compare Changes</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {/* ID Row */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: '1' }}>
            <h4>Original ID</h4>
            <div
              style={{
                ...commonStyle,
                color: idChanged ? 'red' : 'grey',
                backgroundColor: idChanged ? '#ffebe9' : undefined,
              }}
            >
              {originalEntry.uid}
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <h4>New ID</h4>
            <div
              style={{
                ...commonStyle,
                color: idChanged ? 'green' : 'grey',
                backgroundColor: idChanged ? '#e6ffed' : undefined,
              }}
            >
              {newEntry.uid}
            </div>
          </div>
        </div>

        {/* Position Row */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: '1' }}>
            <h4>Original Position</h4>
            <div
              style={{
                ...commonStyle,
                color: positionChanged ? 'red' : 'grey',
                backgroundColor: positionChanged ? '#ffebe9' : undefined,
              }}
            >
              {getPositionLabel(originalEntry.position)}
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <h4>New Position</h4>
            <div
              style={{
                ...commonStyle,
                color: positionChanged ? 'green' : 'grey',
                backgroundColor: positionChanged ? '#e6ffed' : undefined,
              }}
            >
              {getPositionLabel(newEntry.position)}
            </div>
          </div>
        </div>

        {/* Depth Row */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: '1' }}>
            <h4>Original Depth</h4>
            <div
              style={{
                ...commonStyle,
                color: depthChanged ? 'red' : 'grey',
                backgroundColor: depthChanged ? '#ffebe9' : undefined,
              }}
            >
              {originalEntry.depth ?? 'N/A'}
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <h4>New Depth</h4>
            <div
              style={{
                ...commonStyle,
                color: depthChanged ? 'green' : 'grey',
                backgroundColor: depthChanged ? '#e6ffed' : undefined,
              }}
            >
              {newEntry.depth ?? 'N/A'}
            </div>
          </div>
        </div>

        {/* Role Row */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: '1' }}>
            <h4>Original Role</h4>
            <div
              style={{
                ...commonStyle,
                color: roleChanged ? 'red' : 'grey',
                backgroundColor: roleChanged ? '#ffebe9' : undefined,
              }}
            >
              {getRoleLabel(originalEntry.roleAtDepth)}
            </div>
          </div>
          <div style={{ flex: '1' }}>
            <h4>New Role</h4>
            <div
              style={{
                ...commonStyle,
                color: roleChanged ? 'green' : 'grey',
                backgroundColor: roleChanged ? '#e6ffed' : undefined,
              }}
            >
              {getRoleLabel(newEntry.roleAtDepth)}
            </div>
          </div>
        </div>

        {/* Comment Row */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: '1' }}>
            <h4>Original Comment</h4>
            <div style={commonStyle} dangerouslySetInnerHTML={{ __html: commentDiff.originalHtml }} />
          </div>
          <div style={{ flex: '1' }}>
            <h4>New Comment</h4>
            <div style={commonStyle} dangerouslySetInnerHTML={{ __html: commentDiff.newHtml }} />
          </div>
        </div>

        {/* Content Row */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ flex: '1' }}>
            <h4>Original Content</h4>
            <div style={commonStyle} dangerouslySetInnerHTML={{ __html: contentDiff.originalHtml }} />
          </div>
          <div style={{ flex: '1' }}>
            <h4>New Content (Suggestion)</h4>
            <div style={commonStyle} dangerouslySetInnerHTML={{ __html: contentDiff.newHtml }} />
          </div>
        </div>
      </div>
    </div>
  );
};
