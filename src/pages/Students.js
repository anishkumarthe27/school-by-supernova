import React, { useState } from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

// Dummy data: classes and sections with students
const CLASSES = ['Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
const SECTIONS_BY_CLASS = {
  'Grade 8': ['Section A', 'Section B', 'Section C'],
  'Grade 9': ['Section A', 'Section B'],
  'Grade 10': ['Section A', 'Section B', 'Section C'],
  'Grade 11': ['Section A', 'Section B'],
  'Grade 12': ['Section A', 'Section B'],
};

// Dummy students per class-section
const STUDENTS_BY_SECTION = {
  'Grade 8-Section A': [
    { id: 1, name: 'Alex Thompson', rollNo: '8A01', attendance: 95 },
    { id: 2, name: 'Emma Wilson', rollNo: '8A02', attendance: 92 },
    { id: 3, name: 'Noah Brown', rollNo: '8A03', attendance: 88 },
    { id: 4, name: 'Olivia Davis', rollNo: '8A04', attendance: 97 },
  ],
  'Grade 8-Section B': [
    { id: 5, name: 'Liam Martinez', rollNo: '8B01', attendance: 90 },
    { id: 6, name: 'Ava Garcia', rollNo: '8B02', attendance: 94 },
    { id: 7, name: 'Ethan Lee', rollNo: '8B03', attendance: 91 },
  ],
  'Grade 8-Section C': [
    { id: 8, name: 'Sophia Kim', rollNo: '8C01', attendance: 89 },
    { id: 9, name: 'Mason Taylor', rollNo: '8C02', attendance: 93 },
  ],
  'Grade 9-Section A': [
    { id: 10, name: 'Isabella Clark', rollNo: '9A01', attendance: 96 },
    { id: 11, name: 'William White', rollNo: '9A02', attendance: 87 },
    { id: 12, name: 'Mia Harris', rollNo: '9A03', attendance: 94 },
  ],
  'Grade 9-Section B': [
    { id: 13, name: 'James Anderson', rollNo: '9B01', attendance: 91 },
    { id: 14, name: 'Charlotte Lewis', rollNo: '9B02', attendance: 98 },
  ],
  'Grade 10-Section A': [
    { id: 15, name: 'Benjamin Walker', rollNo: '10A01', attendance: 93 },
    { id: 16, name: 'Amelia Hall', rollNo: '10A02', attendance: 90 },
    { id: 17, name: 'Lucas Young', rollNo: '10A03', attendance: 95 },
  ],
  'Grade 10-Section B': [
    { id: 18, name: 'Harper King', rollNo: '10B01', attendance: 88 },
    { id: 19, name: 'Henry Wright', rollNo: '10B02', attendance: 92 },
  ],
  'Grade 10-Section C': [
    { id: 20, name: 'Evelyn Scott', rollNo: '10C01', attendance: 97 },
    { id: 21, name: 'Alexander Green', rollNo: '10C02', attendance: 89 },
  ],
  'Grade 11-Section A': [
    { id: 22, name: 'Abigail Adams', rollNo: '11A01', attendance: 94 },
    { id: 23, name: 'Jack Nelson', rollNo: '11A02', attendance: 91 },
  ],
  'Grade 11-Section B': [
    { id: 24, name: 'Emily Hill', rollNo: '11B01', attendance: 96 },
    { id: 25, name: 'Daniel Baker', rollNo: '11B02', attendance: 90 },
  ],
  'Grade 12-Section A': [
    { id: 26, name: 'Elizabeth Carter', rollNo: '12A01', attendance: 98 },
    { id: 27, name: 'David Mitchell', rollNo: '12A02', attendance: 93 },
  ],
  'Grade 12-Section B': [
    { id: 28, name: 'Sofia Roberts', rollNo: '12B01', attendance: 92 },
    { id: 29, name: 'Joseph Turner', rollNo: '12B02', attendance: 95 },
  ],
};

function StudentCard({ student }) {
  return (
    <div
      className="student-card"
      style={{
        background: 'white',
        borderRadius: '12px',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 600,
          fontSize: '16px',
        }}
      >
        {student.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, color: '#212529' }}>{student.name}</div>
        <div style={{ fontSize: '13px', color: '#6c757d' }}>
          Roll: {student.rollNo} · Attendance: {student.attendance}%
        </div>
      </div>
    </div>
  );
}

function Students() {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const sections = selectedClass ? (SECTIONS_BY_CLASS[selectedClass] || []) : [];
  const sectionKey = selectedClass && selectedSection ? `${selectedClass}-${selectedSection}` : '';
  const students = sectionKey ? (STUDENTS_BY_SECTION[sectionKey] || []) : [];

  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Students</h1>
      <Card title="Student Directory">
        <p className="page-placeholder__text" style={{ marginBottom: '1.5rem' }}>
          Select class and section to view students.
        </p>
        <div className="students-filters">
          <div className="students-filters__field">
            <label htmlFor="students-class">Class</label>
            <select
              id="students-class"
              value={selectedClass}
              onChange={(e) => {
                setSelectedClass(e.target.value);
                setSelectedSection('');
              }}
            >
              <option value="">Select class</option>
              {CLASSES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="students-filters__field">
            <label htmlFor="students-section">Section</label>
            <select
              id="students-section"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              disabled={!selectedClass}
            >
              <option value="">Select section</option>
              {sections.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        {students.length > 0 && (
          <div className="students-cards-grid">
            {students.map((s) => (
              <StudentCard key={s.id} student={s} />
            ))}
          </div>
        )}
        {selectedSection && students.length === 0 && (
          <p className="page-placeholder__text">No students in this section.</p>
        )}
      </Card>
    </div>
  );
}

export default Students;
