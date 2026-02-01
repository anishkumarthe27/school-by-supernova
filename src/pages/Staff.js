import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Staff() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Staff</h1>
      <Card title="Staff Management">
        <p className="page-placeholder__text">
          Manage teaching and non-teaching staff, roles, and attendance.
        </p>
      </Card>
    </div>
  );
}

export default Staff;
