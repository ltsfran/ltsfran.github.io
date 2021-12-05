import { useState, useEffect } from 'react';

export const usePreferredMode = (initialMode: string = 'light') => {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const handlePrefersMode = () => {
      const modeStorage = localStorage.getItem('mode');
      const isDarkModeStorage: boolean = modeStorage === 'dark';

      if (modeStorage) {
        isDarkModeStorage
          ? setMode('dark')
          : setMode('light');
      } else {
        prefersDarkScheme.matches
          ? setMode('dark')
          : setMode('light');
      }
    };

    handlePrefersMode();
    prefersDarkScheme.addEventListener('change', handlePrefersMode);

    return () => prefersDarkScheme.addEventListener('change', handlePrefersMode);
  }, []);

  return { mode, setMode };
};
