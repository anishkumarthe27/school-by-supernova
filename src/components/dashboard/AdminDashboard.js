import React from 'react';
import { Card, StatCard, DataTable } from '../common';
import { useTheme } from '../../context/ThemeContext';
import './DashboardGrid.css';

const pendingApprovals = [
  { id: 1, type: 'Leave Application', submittedBy: 'Sarah Johnson', date: 'Oct 12, 2023', status: 'pending' },
  { id: 2, type: 'Purchase Request', submittedBy: 'Robert Chen', date: 'Oct 11, 2023', status: 'pending' },
  { id: 3, type: 'Event Permission', submittedBy: 'Student Council', date: 'Oct 10, 2023', status: 'pending' },
  { id: 4, type: 'Curriculum Change', submittedBy: 'Math Department', date: 'Oct 9, 2023', status: 'overdue' },
];

const upcomingEvents = [
  { id: 1, event: 'Parent-Teacher Meeting', date: 'Oct 20, 2023', location: 'Main Auditorium', status: 'active' },
  { id: 2, event: 'Science Fair', date: 'Oct 25, 2023', location: 'Science Block', status: 'active' },
  { id: 3, event: 'Staff Development Day', date: 'Nov 2, 2023', location: 'Conference Room', status: 'pending' },
  { id: 4, event: 'Annual Sports Day', date: 'Nov 15, 2023', location: 'School Ground', status: 'active' },
];

const approvalColumns = [
  { key: 'type', label: 'Request Type' },
  { key: 'submittedBy', label: 'Submitted By' },
  { key: 'date', label: 'Date' },
  {
    key: 'status',
    label: 'Status',
    render: (val) => (
      <span className={`data-table__badge data-table__badge--${val}`}>
        {val === 'overdue' ? 'Overdue' : 'Pending'}
      </span>
    ),
  },
];

const eventColumns = [
  { key: 'event', label: 'Event' },
  { key: 'date', label: 'Date' },
  { key: 'location', label: 'Location' },
  {
    key: 'status',
    label: 'Status',
    render: (val) => (
      <span className={`data-table__badge data-table__badge--${val}`}>
        {val === 'active' ? 'Confirmed' : 'Planning'}
      </span>
    ),
  },
];

function QuickActionButton({ icon, label, colorClass }) {
  const theme = useTheme();
  return (
    <button
      type="button"
      className="quick-action-btn"
      style={{
        '--gray-100': theme.gray100,
        '--radius-md': theme.radiusMd,
      }}
    >
      <span className={`material-icons-round quick-action-btn__icon ${colorClass}`}>
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}

function AdminDashboard() {
  const theme = useTheme();

  return (
    <div
      className="dashboard-grid"
      style={{
        '--spacing-lg': theme.spacingLg,
      }}
    >
      <div className="dashboard-grid__row">
        <div className="dashboard-grid__col dashboard-grid__col--3">
          <StatCard
            title="Total Students"
            value="2,847"
            label="Enrolled this academic year"
            trend="+5.2% from last year"
            trendUp
            icon="groups"
          />
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--3">
          <StatCard
            title="Staff"
            value="187"
            label="Teaching & non-teaching"
            trend="+3 new hires"
            trendUp
            icon="person"
          />
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--3">
          <StatCard
            title="Attendance Today"
            value="94.7%"
            label="School-wide average"
            trend="-1.3% from yesterday"
            trendUp={false}
            icon="check_circle"
          />
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--3">
          <StatCard
            title="Fee Collection"
            value="87.5%"
            label="Of quarterly target"
            trend="On track for target"
            trendUp
            icon="attach_money"
          />
        </div>
      </div>

      <div className="dashboard-grid__row">
        <div className="dashboard-grid__col dashboard-grid__col--8">
          <Card
            title="Attendance Trend (Last 30 Days)"
            actions={
              <button type="button" className="card__action-btn" aria-label="More">
                <span className="material-icons-round">more_vert</span>
              </button>
            }
          >
            <div className="chart-placeholder">
              <div className="chart-placeholder__icon">📊</div>
              <div>Attendance visualization chart would appear here</div>
              <div className="chart-placeholder__hint">(Line chart showing daily attendance %)</div>
            </div>
          </Card>
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--4">
          <Card title="Quick Actions">
            <div className="quick-actions">
              <QuickActionButton icon="add_circle" label="Add New Student" colorClass="text-info" />
              <QuickActionButton icon="description" label="Generate Reports" colorClass="text-success" />
              <QuickActionButton icon="campaign" label="Send Announcement" colorClass="text-warning" />
              <QuickActionButton icon="event" label="Schedule Meeting" colorClass="text-error" />
            </div>
          </Card>
        </div>
      </div>

      <div className="dashboard-grid__row">
        <div className="dashboard-grid__col dashboard-grid__col--6">
          <Card
            title="Pending Approvals"
            actions={
              <button type="button" className="card__action-btn" aria-label="Refresh">
                <span className="material-icons-round">refresh</span>
              </button>
            }
          >
            <DataTable columns={approvalColumns} data={pendingApprovals} keyField="id" />
          </Card>
        </div>
        <div className="dashboard-grid__col dashboard-grid__col--6">
          <Card
            title="Upcoming Events"
            actions={
              <button type="button" className="card__action-btn" aria-label="Add">
                <span className="material-icons-round">add</span>
              </button>
            }
          >
            <DataTable columns={eventColumns} data={upcomingEvents} keyField="id" />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
