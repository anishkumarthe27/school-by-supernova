import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Academics() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Academics</h1>
      <Card title="Academic Management">
        <p className="page-placeholder__text">
          Manage courses, classes, curriculum, timetables, and grades.
        </p>
      </Card>
    </div>
  );
}

export default Academics;
