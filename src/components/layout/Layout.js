import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import './Layout.css';

function Layout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentRole, setCurrentRole] = useState('admin');

  return (
    <div className="layout">
      <TopBar
        sidebarCollapsed={sidebarCollapsed}
        onToggleSidebar={() => setSidebarCollapsed((c) => !c)}
        currentRole={currentRole}
      />
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((c) => !c)}
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
