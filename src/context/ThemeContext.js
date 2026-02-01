import React, { createContext, useContext } from 'react';

/**
 * Theme context: green primary, gradient greens for secondary/tertiary.
 * Use useTheme() in any component for colors and shared variables.
 */
const defaultTheme = {
  // Primary: green
  primary: '#2E7D32',
  primaryLight: '#4CAF50',
  primaryDark: '#1B5E20',
  // Secondary & tertiary: gradient greens
  secondary: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
  tertiary: 'linear-gradient(135deg, #1B5E20 0%, #388E3C 50%, #66BB6A 100%)',
  // Semantic
  success: '#4CAF50',
  warning: '#FF9800',
  error: '#F44336',
  info: '#2196F3',
  // Neutrals
  warmGray: '#F5F7FA',
  gray100: '#f8f9fa',
  gray200: '#e9ecef',
  gray300: '#dee2e6',
  gray400: '#ced4da',
  gray500: '#adb5bd',
  gray600: '#6c757d',
  gray700: '#495057',
  gray800: '#343a40',
  gray900: '#212529',
  // Typography
  fontHeader: "'Inter', sans-serif",
  fontBody: "'Roboto', sans-serif",
  // Spacing
  spacingXs: '0.5rem',
  spacingSm: '1rem',
  spacingMd: '1.5rem',
  spacingLg: '2rem',
  spacingXl: '3rem',
  // Shadows
  shadowSm: '0 2px 4px rgba(0,0,0,0.05)',
  shadowMd: '0 4px 6px rgba(0,0,0,0.07)',
  shadowLg: '0 10px 15px rgba(0,0,0,0.1)',
  // Radius
  radiusSm: '6px',
  radiusMd: '10px',
  radiusLg: '16px',
};

const ThemeContext = createContext(defaultTheme);

export function ThemeProvider({ children, theme = defaultTheme }) {
  return (
    <ThemeContext.Provider value={{ ...defaultTheme, ...theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return defaultTheme;
  }
  return context;
}

export default ThemeContext;
