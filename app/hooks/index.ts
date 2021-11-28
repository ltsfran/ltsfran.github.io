import { useState, useEffect } from 'react';

export const usePreferredMode = (initialMode: string = 'light') => {
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const handlePrefersMode = () => {
      prefersDarkScheme.matches
        ? setMode('dark')
        : setMode('light');
    };

    handlePrefersMode();
    prefersDarkScheme.addEventListener('change', handlePrefersMode);

    return () => prefersDarkScheme.addEventListener('change', handlePrefersMode);
  }, []);

  return { mode, setMode };
};
