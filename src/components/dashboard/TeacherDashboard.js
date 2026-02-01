import React from 'react';
import { Card } from '../common';
import './DashboardGrid.css';

function TeacherDashboard() {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-grid__row">
        <div className="dashboard-grid__col dashboard-grid__col--12">
          <Card title="Teacher Dashboard - Today's Schedule">
            <div className="role-view-content">
              <h3>Mathematics Department</h3>
              <p>Welcome back, Ms. Johnson! You have 3 classes today.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TeacherDashboard;
