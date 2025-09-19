import React, { useState } from 'react';
import { Popup } from 'sillytavern-utils-lib/components';
import { POPUP_TYPE } from 'sillytavern-utils-lib/types/popup';
import { MainPopup } from './MainPopup.js';

export const PopupManager = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // This function will be exposed to the global scope to be called by vanilla JS
  const openPopup = () => setIsPopupVisible(true);
  const closePopup = () => setIsPopupVisible(false);

  // Expose the open function to the outside world
  // @ts-ignore
  window.openWorldInfoRecommenderPopup = openPopup;

  if (!isPopupVisible) {
    return null; // Don't render anything if the popup is closed
  }

  return (
    <Popup
      content={<MainPopup onClose={closePopup} />}
      type={POPUP_TYPE.DISPLAY}
      onComplete={closePopup} // The popup component now controls closing
      options={{
        large: true,
        wide: true,
      }}
    />
  );
};
