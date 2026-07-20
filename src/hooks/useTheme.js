import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState('dark');
  
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return { theme, setTheme };
}
