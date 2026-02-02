import React from 'react';
import { Card, StatCard, DataTable } from '../common';
import { useTheme } from '../../context/ThemeContext';
import './DashboardGrid.css';

const systemOverview = [
  { id: 1, metric: 'Schools', value: '12', status: 'active' },
  { id: 2, metric: 'Active Users', value: '3,240', status: 'active' },
  { id: 3, metric: 'Storage Used', value: '68%', status: 'warning' },
  { id: 4, metric: 'API Health', value: '99.9%', status: 'active' },
];

const recentActivity = [
  { id: 1, action: 'New school onboarded', by: 'System', time: '2 hours ago' },
  { id: 2, action: 'Admin role updated', by: 'Super Admin', time: '5 hours ago' },
  { id: 3, action: 'Backup completed', by: 'System', time: 'Yesterday' },
];

const overviewColumns = [
  { key: 'metric', label: 'Metric' },
  { key: 'value', label: 'Value' },
  {
    key: 'status',
    label: 'Status',
    render: (val) => (
      <span className={`data-table__badge data-table__badge--${val}`}>
        {val === 'active' ? 'Active' : 'Warning'}
      </span>
    ),
  },
];

const activityColumns = [
  { key: 'action', label: 'Action' },
  { key: 'by', label: 'By' },
  { key: 'time', label: 'Time' },
];

function SuperAdminDashboard() {
  const theme = useTheme();

  return (
    <div
      className="dashboard-grid"
      style={{ '--spacing-lg': theme.spacingLg }}
    >
      <div className="dashboard-grid__row">
        <div className="dashboard-grid__col dashboard-grid__col--3">
          <StatCard
            title="Total Schools"
            value="12"
            label="Across all regions"
            trend="+2 this year"
            trendUp
            icon="business"
          />
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--3">
          <StatCard
            title="Super Admins"
            value="3"
            label="System administrators"
            trend="Active"
            trendUp
            icon="admin_panel_settings"
          />
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--3">
          <StatCard
            title="System Uptime"
            value="99.9%"
            label="Last 30 days"
            trend="Stable"
            trendUp
            icon="dns"
          />
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--3">
          <StatCard
            title="Pending Approvals"
            value="7"
            label="School & role requests"
            trend="Review required"
            trendUp={false}
            icon="pending_actions"
          />
        </div>
      </div>

      <div className="dashboard-grid__row">
        <div className="dashboard-grid__col dashboard-grid__col--6">
          <Card title="System Overview">
            <div className="data-table-wrapper">
              <DataTable columns={overviewColumns} data={systemOverview} keyField="id" />
            </div>
          </Card>
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--6">
          <Card title="Recent Activity">
            <div className="data-table-wrapper">
              <DataTable columns={activityColumns} data={recentActivity} keyField="id" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminDashboard;
