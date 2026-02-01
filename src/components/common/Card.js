import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Card.css';

function Card({ title, children, actions, className = '' }) {
  const theme = useTheme();

  return (
    <div
      className={`card ${className}`}
      style={{
        '--radius-lg': theme.radiusLg,
        '--shadow-md': theme.shadowMd,
        '--shadow-lg': theme.shadowLg,
        '--gray-200': theme.gray200,
        '--gray-900': theme.gray900,
      }}
    >
      {(title || actions) && (
        <div className="card__header">
          {title && <h3 className="card__title">{title}</h3>}
          {actions && <div className="card__actions">{actions}</div>}
        </div>
      )}
      <div className="card__body">{children}</div>
    </div>
  );
}

export default Card;
