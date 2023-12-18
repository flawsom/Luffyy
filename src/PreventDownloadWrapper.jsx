import React, { useEffect } from 'react';

function PreventDownloadWrapper({ children }) {
  useEffect(() => {
    const preventContextMenu = (event) => {
      event.preventDefault();
    };

    const preventRightClick = (event) => {
      if (event.button === 2) {
        event.preventDefault();
        return false;
      }
    };

    const preventDrag = (event) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('mousedown', preventRightClick);
    document.addEventListener('dragstart', preventDrag);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('mousedown', preventRightClick);
      document.removeEventListener('dragstart', preventDrag);
    };
  }, []);

  return <>{children}</>;
}

export default PreventDownloadWrapper;