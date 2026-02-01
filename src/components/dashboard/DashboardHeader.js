import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './DashboardHeader.css';

function DashboardHeader({ title = 'School Dashboard' }) {
  const theme = useTheme();
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div
      className="dashboard-header"
      style={{ fontFamily: theme.fontHeader }}
    >
      <h1 className="dashboard-header__title">{title}</h1>
      <div className="dashboard-header__date">
        <span className="material-icons-round dashboard-header__date-icon">
          calendar_today
        </span>
        <span>{dateStr}</span>
      </div>
    </div>
  );
}

export default DashboardHeader;
