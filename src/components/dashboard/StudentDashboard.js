import React from 'react';
import { Card } from '../common';
import './DashboardGrid.css';

function StudentDashboard() {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-grid__row">
        <div className="dashboard-grid__col dashboard-grid__col--12">
          <Card title="Student Dashboard - Your Academic Summary">
            <div className="role-view-content">
              <h3>Grade 10 - Section A</h3>
              <p>Welcome back, Alex! You have 2 assignments due this week.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
