import React from 'react';
import { Card, DataTable } from '../components/common';
import './PagePlaceholder.css';

// Dummy staff data
const STAFF_DATA = [
  { id: 1, name: 'Dr. Sarah Johnson', role: 'Mathematics Teacher', department: 'Math', joinDate: '2018-08-01', email: 'sarah.johnson@school.edu', status: 'active' },
  { id: 2, name: 'Mr. Robert Chen', role: 'Science Teacher', department: 'Science', joinDate: '2019-01-15', email: 'robert.chen@school.edu', status: 'active' },
  { id: 3, name: 'Ms. Emily Davis', role: 'English Teacher', department: 'Languages', joinDate: '2017-06-01', email: 'emily.davis@school.edu', status: 'active' },
  { id: 4, name: 'Mr. James Wilson', role: 'History Teacher', department: 'Humanities', joinDate: '2020-03-10', email: 'james.wilson@school.edu', status: 'active' },
  { id: 5, name: 'Dr. Lisa Martinez', role: 'Physics Teacher', department: 'Science', joinDate: '2016-09-01', email: 'lisa.martinez@school.edu', status: 'active' },
  { id: 6, name: 'Mrs. Anna Brown', role: 'Biology Teacher', department: 'Science', joinDate: '2019-08-20', email: 'anna.brown@school.edu', status: 'active' },
  { id: 7, name: 'Mr. David Kim', role: 'PE Instructor', department: 'Sports', joinDate: '2021-01-05', email: 'david.kim@school.edu', status: 'active' },
  { id: 8, name: 'Ms. Rachel Green', role: 'School Counselor', department: 'Admin', joinDate: '2018-04-12', email: 'rachel.green@school.edu', status: 'active' },
];

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'department', label: 'Department' },
  { key: 'email', label: 'Email' },
  { key: 'joinDate', label: 'Join Date' },
  {
    key: 'status',
    label: 'Status',
    render: (val) => (
      <span className="data-table__badge data-table__badge--active">{val}</span>
    ),
  },
];

function Staff() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Staff</h1>
      <Card title="Staff Directory">
        <p className="page-placeholder__text" style={{ marginBottom: '1.5rem' }}>
          Teaching and non-teaching staff, roles, and contact information.
        </p>
        <div className="data-table-wrapper">
          <DataTable columns={columns} data={STAFF_DATA} keyField="id" />
        </div>
      </Card>
    </div>
  );
}

export default Staff;
