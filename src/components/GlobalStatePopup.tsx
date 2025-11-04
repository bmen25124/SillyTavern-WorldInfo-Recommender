import { FC, useState } from 'react';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { CompareStatePopup } from './CompareStatePopup.js';

interface GlobalStatePopupProps {
  currentState: Record<string, WIEntry[]>;
  initialState: Record<string, WIEntry[]>;
}

export const GlobalStatePopup: FC<GlobalStatePopupProps> = ({ currentState, initialState }) => {
  const [showDiff, setShowDiff] = useState(false);

  return (
    <div className="current-state-popup global-state-popup">
      <div className="popup_header">
        <h3>{showDiff ? 'Comparing with Original State' : 'Current Suggested Entries'}</h3>
        <div className="popup_header_buttons">
          <label className="checkbox_label">
            <input type="checkbox" checked={showDiff} onChange={(e) => setShowDiff(e.target.checked)} />
            Compare with Original
          </label>
        </div>
      </div>

      <div className="current-state-content">
        {showDiff ? (
          <CompareStatePopup sessionType="global" before={initialState} after={currentState} />
        ) : (
          Object.entries(currentState).map(([worldName, entries]) => (
            <div key={worldName} className="world-group">
              <h4>{worldName}</h4>
              {entries.length === 0 ? (
                <p className="subtle-text">No entries in this world.</p>
              ) : (
                entries.map((entry) => (
                  <div key={entry.uid} className="state-field-group">
                    <div className="state-field">
                      <label>Name</label>
                      <div className="state-value">{entry.comment || <span className="subtle-text">empty</span>}</div>
                    </div>
                    <div className="state-field">
                      <label>Triggers</label>
                      <div className="state-value">
                        {(entry.key || []).join(', ') || <span className="subtle-text">empty</span>}
                      </div>
                    </div>
                    <div className="state-field">
                      <label>Content</label>
                      <div className="state-value">{entry.content || <span className="subtle-text">empty</span>}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
