import React from 'react';
import { Card, DataTable } from '../components/common';
import './PagePlaceholder.css';
import './Analytics.css';

// Dummy data for charts and tables
const ATTENDANCE_BY_MONTH = [
  { month: 'Aug', attendance: 92 },
  { month: 'Sep', attendance: 94 },
  { month: 'Oct', attendance: 93 },
  { month: 'Nov', attendance: 95 },
  { month: 'Dec', attendance: 94 },
  { month: 'Jan', attendance: 96 },
];

const FEE_COLLECTION = [
  { grade: 'Grade 8', collected: 85 },
  { grade: 'Grade 9', collected: 92 },
  { grade: 'Grade 10', collected: 88 },
  { grade: 'Grade 11', collected: 95 },
  { grade: 'Grade 12', collected: 90 },
];

const STUDENTS_BY_GRADE = [
  { name: 'Grade 8', value: 420, color: '#2E7D32' },
  { name: 'Grade 9', value: 380, color: '#4CAF50' },
  { name: 'Grade 10', value: 395, color: '#66BB6A' },
  { name: 'Grade 11', value: 365, color: '#81C784' },
  { name: 'Grade 12', value: 340, color: '#A5D6A7' },
];

const REPORT_SUMMARY = [
  { id: 1, report: 'Monthly Attendance', period: 'Jan 2024', status: 'Generated' },
  { id: 2, report: 'Fee Collection', period: 'Q4 2023', status: 'Generated' },
  { id: 3, report: 'Academic Performance', period: 'Term 1', status: 'Pending' },
  { id: 4, report: 'Staff Attendance', period: 'Jan 2024', status: 'Generated' },
];

const reportColumns = [
  { key: 'report', label: 'Report' },
  { key: 'period', label: 'Period' },
  {
    key: 'status',
    label: 'Status',
    render: (val) => (
      <span className={`data-table__badge data-table__badge--${val === 'Generated' ? 'active' : 'pending'}`}>
        {val}
      </span>
    ),
  },
];

// SVG line chart: scale attendance (85-100) to y coordinates
function LineChartSimple({ data, width = 400, height = 200 }) {
  const padding = { top: 20, right: 20, bottom: 30, left: 40 };
  const innerW = width - padding.left - padding.right;
  const innerH = height - padding.top - padding.bottom;
  const minY = 85;
  const maxY = 100;
  const points = data
    .map((d, i) => {
      const x = padding.left + (i / (data.length - 1)) * innerW;
      const y = padding.top + innerH - ((d.attendance - minY) / (maxY - minY)) * innerH;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      <line x1={padding.left} y1={padding.top} x2={padding.left} y2={padding.top + innerH} stroke="#dee2e6" strokeWidth="1" />
      <line x1={padding.left} y1={padding.top + innerH} x2={padding.left + innerW} y2={padding.top + innerH} stroke="#dee2e6" strokeWidth="1" />
      <polyline fill="none" stroke="#2E7D32" strokeWidth="2" points={points} />
      {data.map((d, i) => {
        const x = padding.left + (i / (data.length - 1)) * innerW;
        const y = padding.top + innerH - ((d.attendance - minY) / (maxY - minY)) * innerH;
        return <circle key={i} cx={x} cy={y} r="4" fill="#2E7D32" />;
      })}
      {data.map((d, i) => {
        const x = padding.left + (i / (data.length - 1)) * innerW;
        return (
          <text key={i} x={x} y={height - 5} textAnchor="middle" fontSize="11" fill="#6c757d">{d.month}</text>
        );
      })}
    </svg>
  );
}

// Horizontal bar chart with divs
function BarChartSimple({ data }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {data.map((row, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ width: 70, fontSize: 13, color: '#495057' }}>{row.grade}</span>
          <div style={{ flex: 1, height: 24, background: '#e9ecef', borderRadius: 4, overflow: 'hidden' }}>
            <div
              style={{
                width: `${row.collected}%`,
                height: '100%',
                background: '#2E7D32',
                borderRadius: 4,
              }}
            />
          </div>
          <span style={{ width: 36, fontSize: 13, fontWeight: 600, color: '#212529' }}>{row.collected}%</span>
        </div>
      ))}
    </div>
  );
}

// Donut chart with SVG circles
function DonutChartSimple({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0);
  let offset = 0;
  const segments = data.map((d, i) => {
    const pct = d.value / total;
    const dashArray = `${pct * 100} ${100 - pct * 100}`;
    const dashOffset = -offset * 100;
    offset += pct;
    return { ...d, dashArray, dashOffset };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 16px' }}>
      <svg width="100%" height="160" viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet">
        <circle cx="100" cy="80" r="50" fill="#f8f9fa" stroke="#e9ecef" strokeWidth="20" />
        {segments.map((seg, i) => (
          <circle
            key={i}
            cx="100"
            cy="80"
            r="40"
            fill="none"
            stroke={seg.color}
            strokeWidth="20"
            strokeDasharray={seg.dashArray}
            strokeDashoffset={seg.dashOffset}
            transform="rotate(-90 100 80)"
          />
        ))}
      </svg>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', justifyContent: 'center' }}>
        {data.map((d, i) => (
          <span key={i} style={{ fontSize: 12, display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: d.color }} />
            {d.name}: {d.value}
          </span>
        ))}
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="page-placeholder analytics-page">
      <h1 className="page-placeholder__title">Reports & Analytics</h1>

      <div className="analytics-grid">
        <div className="analytics-grid__chart">
          <Card title="Attendance Trend (Last 6 Months)">
            <div style={{ height: 280, minHeight: 200 }}>
              <LineChartSimple data={ATTENDANCE_BY_MONTH} width={600} height={260} />
            </div>
          </Card>
        </div>
        <div className="analytics-grid__donut">
          <Card title="Students by Grade">
            <div style={{ height: 280, minHeight: 200 }}>
              <DonutChartSimple data={STUDENTS_BY_GRADE} />
            </div>
          </Card>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="analytics-grid__bars">
          <Card title="Fee Collection by Grade (%)">
            <div style={{ padding: '8px 0' }}>
              <BarChartSimple data={FEE_COLLECTION} />
            </div>
          </Card>
        </div>
        <div className="analytics-grid__table">
          <Card title="Report Summary">
            <div className="data-table-wrapper">
              <DataTable columns={reportColumns} data={REPORT_SUMMARY} keyField="id" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
