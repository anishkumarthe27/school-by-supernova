import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useDevice } from '../../context/DeviceContext';
import { DEVICE_LABELS } from '../../config/deviceDetection';
import './TopBar.css';

const ROLE_LABELS = {
  superadmin: 'Super Admin',
  admin: 'Administrator',
  teacher: 'Teacher',
  student: 'Student',
  parent: 'Parent',
};

function TopBar({ sidebarCollapsed, onToggleSidebar, currentRole = 'superadmin', userName = 'John Doe' }) {
  const theme = useTheme();
  const { type: deviceType } = useDevice();
  const [searchValue, setSearchValue] = useState('');

  const initials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <nav
      className="topbar"
      style={{
        '--primary': theme.primary,
        '--gray-200': theme.gray200,
        '--gray-500': theme.gray500,
        '--gray-600': theme.gray600,
        '--gray-700': theme.gray700,
        '--error': theme.error,
      }}
    >
      <div className="topbar__left">
        <div
          className="topbar__logo"
          style={{ background: theme.tertiary }}
        >
          SE
        </div>
        <span className="topbar__school-name">SchoolERP Pro</span>
        <button
          type="button"
          className="topbar__menu-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <span className="material-icons-round">
            {sidebarCollapsed ? 'menu_open' : 'menu'}
          </span>
        </button>
      </div>

      <div className="topbar__search">
        <span className="material-icons-round topbar__search-icon">search</span>
        <input
          type="text"
          placeholder="Search students, staff, resources..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="topbar__search-input"
        />
      </div>

      <div className="topbar__right">
        <span className="topbar__device" title={`Viewing as ${DEVICE_LABELS[deviceType] || deviceType}`}>
          {DEVICE_LABELS[deviceType] || deviceType}
        </span>
        <button type="button" className="topbar__icon-btn" aria-label="Help">
          <span className="material-icons-round">help_outline</span>
        </button>
        <button type="button" className="topbar__icon-btn topbar__icon-btn--badge" aria-label="Notifications">
          <span className="material-icons-round">notifications</span>
          <span className="topbar__badge">5</span>
        </button>
        <button type="button" className="topbar__icon-btn" aria-label="Calendar">
          <span className="material-icons-round">calendar_today</span>
        </button>
        <div className="topbar__user">
          <div
            className="topbar__avatar"
            style={{ background: theme.secondary }}
          >
            {initials}
          </div>
          <div className="topbar__user-info">
            <span className="topbar__user-name">{userName}</span>
            <span className="topbar__user-role">
              {ROLE_LABELS[currentRole] || 'Administrator'}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
