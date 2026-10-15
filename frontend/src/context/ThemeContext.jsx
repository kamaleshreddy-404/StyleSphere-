import React, { createContext, useContext } from 'react';

const ThemeContext = createContext({ isDark: false });

export const ThemeProvider = ({ children }) => <>{children}</>;

export const useTheme = () => useContext(ThemeContext);
