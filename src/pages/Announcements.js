import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Announcements() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Announcements</h1>
      <Card title="Announcements">
        <p className="page-placeholder__text">
          Create and manage school-wide announcements.
        </p>
      </Card>
    </div>
  );
}

export default Announcements;
