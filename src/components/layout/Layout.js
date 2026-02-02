import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useDevice } from '../../context/DeviceContext';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './Layout.css';

function Layout() {
  const { type: deviceType, isMobile, isTablet, uiHints } = useDevice();
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(uiHints?.sidebarDefaultCollapsed ?? false);
  const [currentRole, setCurrentRole] = useState('superadmin');

  const isOverlayMode = isMobile || isTablet;
  const showBackdrop = isOverlayMode && !sidebarCollapsed;

  useEffect(() => {
    if (isOverlayMode) setSidebarCollapsed(true);
  }, [isOverlayMode]);

  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      if (isOverlayMode) setSidebarCollapsed(true);
    }
  }, [location.pathname, isOverlayMode]);

  const closeSidebar = useCallback(() => {
    if (isOverlayMode) setSidebarCollapsed(true);
  }, [isOverlayMode]);

  const toggleSidebar = useCallback(() => {
    setSidebarCollapsed((c) => !c);
  }, []);

  return (
    <div className="layout" data-device={deviceType}>
      <TopBar
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={toggleSidebar}
        currentRole={currentRole}
      />
      {showBackdrop && (
        <div
          className="layout__backdrop layout__backdrop--visible"
          onClick={closeSidebar}
          onKeyDown={(e) => e.key === 'Escape' && closeSidebar()}
          role="button"
          tabIndex={0}
          aria-label="Close menu"
        />
      )}
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={toggleSidebar}
        onNavigate={closeSidebar}
        currentRole={currentRole}
        isOverlayMode={isOverlayMode}
      />
      <main
        className={`layout__main ${sidebarCollapsed ? 'layout__main--expanded' : ''}`}
      >
        <Outlet context={{ currentRole, setCurrentRole }} />
      </main>
    </div>
  );
}

export default Layout;
