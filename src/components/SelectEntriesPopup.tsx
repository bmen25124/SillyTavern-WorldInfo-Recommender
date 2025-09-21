import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { STButton } from 'sillytavern-utils-lib/components';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';

/**
 * Props for the SelectEntriesPopup component.
 */
interface SelectEntriesPopupProps {
  // All available entries, grouped by world name.
  entriesByWorldName: Record<string, WIEntry[]>;
  // The initially selected entry UIDs.
  initialSelectedUids: Record<string, number[]>;
}

/**
 * The interface for the ref, exposing functions that the parent can call.
 */
export interface SelectEntriesPopupRef {
  getSelection: () => Record<string, number[]>;
}

/**
 * A popup component for selecting specific World Info entries from a list,
 * with filtering and bulk selection capabilities.
 */
export const SelectEntriesPopup = forwardRef<SelectEntriesPopupRef, SelectEntriesPopupProps>(
  ({ entriesByWorldName, initialSelectedUids }, ref) => {
    const [filterText, setFilterText] = useState('');
    const [selectedIds, setSelectedIds] = useState<Set<string>>(() => {
      // Initialize the Set from the initial props
      const initialSet = new Set<string>();
      Object.entries(initialSelectedUids).forEach(([worldName, uids]) => {
        uids.forEach((uid) => initialSet.add(`${worldName}::${uid}`));
      });
      return initialSet;
    });

    // Memoize the filtered list of entries to avoid re-calculating on every render.
    const filteredEntries = useMemo(() => {
      if (!filterText) {
        return entriesByWorldName;
      }
      const lowercasedFilter = filterText.toLowerCase();
      const result: Record<string, WIEntry[]> = {};

      Object.entries(entriesByWorldName).forEach(([worldName, entries]) => {
        const matchingEntries = entries.filter(
          (entry) =>
            entry.comment.toLowerCase().includes(lowercasedFilter) ||
            worldName.toLowerCase().includes(lowercasedFilter),
        );
        if (matchingEntries.length > 0) {
          result[worldName] = matchingEntries;
        }
      });
      return result;
    }, [filterText, entriesByWorldName]);

    // Expose the getSelection function to the parent component via the ref.
    useImperativeHandle(ref, () => ({
      getSelection: () => {
        const newSelectedUids: Record<string, number[]> = {};
        selectedIds.forEach((id) => {
          const [worldName, uidStr] = id.split('::');
          const uid = parseInt(uidStr, 10);
          if (!newSelectedUids[worldName]) {
            newSelectedUids[worldName] = [];
          }
          newSelectedUids[worldName].push(uid);
        });
        return newSelectedUids;
      },
    }));

    const handleToggleSelection = (worldName: string, uid: number) => {
      const id = `${worldName}::${uid}`;
      const newSelectedIds = new Set(selectedIds);
      if (newSelectedIds.has(id)) {
        newSelectedIds.delete(id);
      } else {
        newSelectedIds.add(id);
      }
      setSelectedIds(newSelectedIds);
    };

    const handleSelectAllFiltered = () => {
      const allFilteredIds = new Set<string>();
      Object.entries(filteredEntries).forEach(([worldName, entries]) => {
        entries.forEach((entry) => allFilteredIds.add(`${worldName}::${entry.uid}`));
      });
      setSelectedIds(allFilteredIds);
    };

    const handleDeselectAll = () => {
      setSelectedIds(new Set());
    };

    return (
      <div className="select-entries-popup">
        <h3>Select Entries to Include</h3>
        <div className="controls">
          <input
            type="text"
            className="text_pole"
            placeholder="Filter by name or lorebook..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <STButton onClick={handleSelectAllFiltered}>Select All</STButton>
          <STButton onClick={handleDeselectAll}>Deselect All</STButton>
        </div>
        <div className="entry-list">
          {Object.keys(filteredEntries).length === 0 ? (
            <p>No entries match your filter.</p>
          ) : (
            Object.entries(filteredEntries).map(([worldName, entries]) => (
              <div key={worldName} className="world-group">
                <h4>{worldName}</h4>
                <ul>
                  {entries.map((entry) => (
                    <li key={entry.uid}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedIds.has(`${worldName}::${entry.uid}`)}
                          onChange={() => handleToggleSelection(worldName, entry.uid)}
                        />
                        {entry.comment || `Entry ${entry.uid}`}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
    );
  },
);
