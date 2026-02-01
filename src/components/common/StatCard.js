import React from 'react';
import Card from './Card';
import { useTheme } from '../../context/ThemeContext';
import './StatCard.css';

function StatCard({ title, value, label, trend, trendUp, icon }) {
  const theme = useTheme();

  return (
    <Card
      className="stat-card"
      title={title}
      actions={
        icon ? (
          <span
            className="material-icons-round stat-card__icon"
            style={{ color: theme.info }}
          >
            {icon}
          </span>
        ) : null
      }
    >
      <div
        className="stat-card__value"
        style={{ fontFamily: theme.fontHeader }}
      >
        {value}
      </div>
      {label && <div className="stat-card__label">{label}</div>}
      {trend && (
        <div
          className={`stat-card__trend ${trendUp ? 'stat-card__trend--up' : 'stat-card__trend--down'}`}
        >
          <span className="material-icons-round stat-card__trend-icon">
            {trendUp ? 'trending_up' : 'trending_down'}
          </span>
          <span>{trend}</span>
        </div>
      )}
    </Card>
  );
}

export default StatCard;
