import { FC, useMemo, useState } from 'react';
import { WIEntry } from 'sillytavern-utils-lib/types/world-info';
import { CompareStatePopup } from './CompareStatePopup.js';

interface CurrentStatePopupProps {
  currentState: WIEntry;
  initialState: WIEntry;
}

export const CurrentStatePopup: FC<CurrentStatePopupProps> = ({ currentState, initialState }) => {
  const [showDiff, setShowDiff] = useState(false);

  const fields = useMemo(
    () => [
      { label: 'Name', value: currentState.comment },
      { label: 'Triggers', value: currentState.key.join(', ') },
      { label: 'Content', value: currentState.content },
    ],
    [currentState],
  );

  return (
    <div className="current-state-popup">
      <div className="popup_header">
        <h3>{showDiff ? 'Comparing with Original State' : 'Current Entry State'}</h3>
        <div className="popup_header_buttons">
          <label className="checkbox_label">
            <input type="checkbox" checked={showDiff} onChange={(e) => setShowDiff(e.target.checked)} />
            Compare with Original
          </label>
        </div>
      </div>

      <div className="current-state-content">
        {showDiff ? (
          <CompareStatePopup sessionType="entry" before={initialState} after={currentState} />
        ) : (
          fields.map(({ label, value }) => (
            <div key={label} className="state-field">
              <label>{label}</label>
              <div className="state-value">{value || <span className="subtle-text">empty</span>}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
