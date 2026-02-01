import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Calendar() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Calendar</h1>
      <Card title="School Calendar">
        <p className="page-placeholder__text">
          Events, holidays, and schedule view.
        </p>
      </Card>
    </div>
  );
}

export default Calendar;
