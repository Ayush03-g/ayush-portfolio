import { useState, useMemo } from 'react';
import { AppContext } from '@/context/AppContext';

export function AppProvider({ children }) {
  const [isBootComplete, setIsBootComplete] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const value = useMemo(() => ({
    isBootComplete, setIsBootComplete,
    audioEnabled, setAudioEnabled,
    assetsLoaded, setAssetsLoaded,
    isLoading, setIsLoading
  }), [isBootComplete, audioEnabled, assetsLoaded, isLoading]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
