import React from 'react';
import { Card, DataTable } from '../components/common';
import './PagePlaceholder.css';

// Dummy data: at least 5 staff with class-level performance
const STAFF_CLASS_PERFORMANCE = [
  { id: 1, staffName: 'Dr. Sarah Johnson', subject: 'Mathematics', classLevel: 'Grade 10', avgScore: 87, passRate: 94, students: 32 },
  { id: 2, staffName: 'Mr. Robert Chen', subject: 'Science', classLevel: 'Grade 9', avgScore: 82, passRate: 91, students: 28 },
  { id: 3, staffName: 'Ms. Emily Davis', subject: 'English', classLevel: 'Grade 11', avgScore: 89, passRate: 97, students: 30 },
  { id: 4, staffName: 'Mr. James Wilson', subject: 'History', classLevel: 'Grade 8', avgScore: 78, passRate: 88, students: 35 },
  { id: 5, staffName: 'Dr. Lisa Martinez', subject: 'Physics', classLevel: 'Grade 12', avgScore: 85, passRate: 93, students: 26 },
  { id: 6, staffName: 'Mrs. Anna Brown', subject: 'Biology', classLevel: 'Grade 10', avgScore: 84, passRate: 90, students: 29 },
];

const columns = [
  { key: 'staffName', label: 'Staff Name' },
  { key: 'subject', label: 'Subject' },
  { key: 'classLevel', label: 'Class Level' },
  { key: 'avgScore', label: 'Avg Score (%)' },
  { key: 'passRate', label: 'Pass Rate (%)' },
  { key: 'students', label: 'Students' },
];

function Academics() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Academics</h1>
      <Card title="Staff & Class Level Performance">
        <p className="page-placeholder__text" style={{ marginBottom: '1.5rem' }}>
          Overview of teaching staff and their class-level performance metrics.
        </p>
        <div className="data-table-wrapper">
          <DataTable columns={columns} data={STAFF_CLASS_PERFORMANCE} keyField="id" />
        </div>
      </Card>
    </div>
  );
}

export default Academics;
