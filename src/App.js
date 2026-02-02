import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { DeviceProvider } from './context/DeviceContext';
import AppRoutes from './routes/AppRoutes';
import './App.css';

// Basename for GitHub Pages: use PUBLIC_URL path (e.g. /school-by-supernova) when set at build time
function getBasename() {
  const pub = process.env.PUBLIC_URL;
  if (pub && pub !== '.') {
    if (pub.startsWith('/')) return pub.replace(/\/$/, '') || '';
    try {
      return new URL(pub).pathname.replace(/\/$/, '') || '';
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
