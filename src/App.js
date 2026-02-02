import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DeviceProvider } from './context/DeviceContext';
import AppRoutes from './routes/AppRoutes';
import './App.css';

// Basename for GitHub Pages: use first path segment (e.g. /dashboard) when hosted at username.github.io/repo/
function getBasename() {
  if (process.env.PUBLIC_URL && process.env.PUBLIC_URL !== '.') {
    try {
      return new URL(process.env.PUBLIC_URL).pathname.replace(/\/$/, '') || '';
    } catch {
      return '';
    }
  }
  const path = window.location.pathname;
  const match = path.match(/^(\/[^/]+)/);
  return match ? match[1] : '';
}

function App() {
  return (
    <ThemeProvider>
      <DeviceProvider>
        <BrowserRouter basename={getBasename()}>
          <AppRoutes />
        </BrowserRouter>
      </DeviceProvider>
    </ThemeProvider>
  );
}

export default App;
