import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Students() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Students</h1>
      <Card title="Student Management">
        <p className="page-placeholder__text">
          View and manage student profiles, enrollment, and records.
        </p>
      </Card>
    </div>
  );
}

export default Students;
