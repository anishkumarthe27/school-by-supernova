import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './RoleSelector.css';

const ROLES = [
  { id: 'admin', label: 'Administrator' },
  { id: 'teacher', label: 'Teacher' },
  { id: 'student', label: 'Student' },
  { id: 'parent', label: 'Parent' },
];

function RoleSelector({ currentRole, onRoleChange }) {
  const theme = useTheme();

  return (
    <div
      className="role-selector"
      style={{
        '--primary': theme.primary,
        '--radius-sm': theme.radiusSm,
        '--radius-md': theme.radiusMd,
        '--shadow-sm': theme.shadowSm,
      }}
    >
      {ROLES.map((role) => (
        <button
          key={role.id}
          type="button"
          className={`role-selector__btn ${currentRole === role.id ? 'role-selector__btn--active' : ''}`}
          onClick={() => onRoleChange(role.id)}
        >
          {role.label}
        </button>
      ))}
    </div>
  );
}

export default RoleSelector;
