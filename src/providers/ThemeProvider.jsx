import { createContext, useMemo } from 'react';
import { useTheme } from '@/hooks/useTheme';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const { theme, setTheme } = useTheme();

  const value = useMemo(() => ({
    theme,
    setTheme
  }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
