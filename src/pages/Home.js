import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { DashboardHeader } from '../components/dashboard';
import { Card, StatCard } from '../components/common';
import { useTheme } from '../context/ThemeContext';
import './PagePlaceholder.css';

// Dummy data by role
const SUPER_ADMIN_HOME = {
  name: 'Super Admin',
  greeting: 'System overview',
  stats: [
    { title: 'Schools', value: '12', label: 'Active institutions', icon: 'business' },
    { title: 'Admins', value: '24', label: 'School administrators', icon: 'admin_panel_settings' },
    { title: 'Storage', value: '68%', label: 'Used across all schools', icon: 'storage' },
  ],
  recent: [
    { text: 'New school "North High" registered', time: '2h ago' },
    { text: '3 pending role approval requests', time: '5h ago' },
    { text: 'Nightly backup completed successfully', time: 'Yesterday' },
  ],
};

const ADMIN_HOME = {
  name: 'Administrator',
  greeting: 'School administration',
  stats: [
    { title: 'Students', value: '2,847', label: 'Enrolled this year', icon: 'groups' },
    { title: 'Staff', value: '187', label: 'Teaching & support', icon: 'person' },
    { title: 'Attendance', value: '94.7%', label: 'Today\'s average', icon: 'check_circle' },
  ],
  recent: [
    { text: 'Parent-Teacher meeting scheduled for Oct 20', time: '1d ago' },
    { text: 'Fee collection at 87.5% of target', time: '2d ago' },
    { text: 'Science Fair preparation in progress', time: '3d ago' },
  ],
};

const STAFF_HOME = {
  name: 'Staff',
  greeting: 'Your teaching overview',
  stats: [
    { title: 'My Classes', value: '5', label: 'This semester', icon: 'class' },
    { title: 'Students', value: '142', label: 'Under your care', icon: 'people' },
    { title: 'Assignments', value: '3', label: 'Pending grading', icon: 'assignment' },
  ],
  recent: [
    { text: 'Grade 10 Math - Test scheduled for Friday', time: 'Today' },
    { text: 'Staff meeting at 3:00 PM', time: 'Today' },
    { text: 'Parent meeting request from Mrs. Chen', time: 'Yesterday' },
  ],
};

const STUDENT_HOME = {
  name: 'Student',
  greeting: 'Your academic summary',
  stats: [
    { title: 'Class', value: '10-A', label: 'Current section', icon: 'school' },
    { title: 'GPA', value: '3.8', label: 'This term', icon: 'star' },
    { title: 'Assignments', value: '2', label: 'Due this week', icon: 'assignment' },
  ],
  recent: [
    { text: 'Math homework due tomorrow', time: 'Today' },
    { text: 'Science project submission next week', time: '2d ago' },
    { text: 'Sports day on Nov 15', time: '1w ago' },
  ],
};

const ROLE_HOME_DATA = {
  superadmin: SUPER_ADMIN_HOME,
  admin: ADMIN_HOME,
  teacher: STAFF_HOME,
  parent: ADMIN_HOME,
  student: STUDENT_HOME,
};

function Home() {
  const { currentRole } = useOutletContext();
  const theme = useTheme();
  const data = ROLE_HOME_DATA[currentRole] || SUPER_ADMIN_HOME;

  return (
    <>
      <DashboardHeader title="Home" />
      <div
        className="dashboard-grid"
        style={{ '--spacing-lg': theme.spacingLg }}
      >
        <div className="dashboard-grid__row">
          <div className="dashboard-grid__col dashboard-grid__col--12">
            <Card title={`Welcome, ${data.name}`}>
              <p className="page-placeholder__text" style={{ marginBottom: '1rem' }}>
                {data.greeting} — Here is your personalized overview.
              </p>
            </Card>
          </div>
        </div>
        <div className="dashboard-grid__row">
          {data.stats.map((stat, i) => (
            <div key={i} className="dashboard-grid__col dashboard-grid__col--4">
              <StatCard
                title={stat.title}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
              />
            </div>
          ))}
        </div>
        <div className="dashboard-grid__row">
          <div className="dashboard-grid__col dashboard-grid__col--12">
            <Card title="Recent updates">
              <ul className="home-recent-list">
                {data.recent.map((item, i) => (
                  <li key={i} className="home-recent-list__item">
                    <span className="home-recent-list__text">{item.text}</span>
                    <span className="home-recent-list__time">{item.time}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
