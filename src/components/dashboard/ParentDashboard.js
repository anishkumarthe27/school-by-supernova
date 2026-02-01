import React from 'react';
import { Card } from '../common';
import './DashboardGrid.css';

function ParentDashboard() {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-grid__row">
        <div className="dashboard-grid__col dashboard-grid__col--12">
          <Card title="Parent Dashboard - Child Overview">
            <div className="role-view-content">
              <h3>Parent Portal</h3>
              <p>Viewing information for: Emily Chen (Grade 8)</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ParentDashboard;
