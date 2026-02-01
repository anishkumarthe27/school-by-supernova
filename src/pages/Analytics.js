import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Analytics() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Analytics</h1>
      <Card title="Analytics & Insights">
        <p className="page-placeholder__text">
          Dashboards and analytics for attendance, performance, and trends.
        </p>
      </Card>
    </div>
  );
}

export default Analytics;
