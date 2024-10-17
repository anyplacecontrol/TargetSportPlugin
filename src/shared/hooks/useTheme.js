import { createContext, useContext } from 'react';
export const ThemeContext = createContext();

export function useTheme() {
  const context = useContext(ThemeContext);
  const isDarkBackground = context ? context.isDarkBackground : false;
  return { isDarkBackground };
}
