import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Sidebar.css';

const navSections = [
  {
    title: 'Main',
    items: [
      { to: '/', icon: 'dashboard', label: 'Dashboard' },
      { to: '/academics', icon: 'school', label: 'Academics' },
      { to: '/students', icon: 'people', label: 'Students' },
    ],
  },
  {
    title: 'Management',
    items: [
      { to: '/staff', icon: 'account_circle', label: 'Staff' },
      { to: '/finance', icon: 'attach_money', label: 'Finance' },
      { to: '/inventory', icon: 'inventory', label: 'Inventory' },
    ],
  },
  {
    title: 'Communication',
    items: [
      { to: '/announcements', icon: 'announcement', label: 'Announcements' },
      { to: '/messages', icon: 'email', label: 'Messages' },
      { to: '/calendar', icon: 'event', label: 'Calendar' },
    ],
  },
  {
    title: 'Reports',
    items: [
      { to: '/analytics', icon: 'assessment', label: 'Analytics' },
      { to: '/reports', icon: 'description', label: 'Reports' },
    ],
  },
];

function Sidebar({ collapsed, onToggle }) {
  const theme = useTheme();

  return (
    <aside
      className={`sidebar ${collapsed ? 'sidebar--collapsed' : ''}`}
      style={{
        '--primary': theme.primary,
        '--gray-100': theme.gray100,
        '--gray-600': theme.gray600,
        '--gray-700': theme.gray700,
      }}
    >
      {navSections.map((section) => (
        <div key={section.title} className="sidebar__section">
          <div className="sidebar__section-title">{section.title}</div>
          {section.items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `sidebar__item ${isActive ? 'sidebar__item--active' : ''}`
              }
              end={item.to === '/'}
            >
              <span className="material-icons-round sidebar__icon">
                {item.icon}
              </span>
              <span className="sidebar__text">{item.label}</span>
            </NavLink>
          ))}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;
