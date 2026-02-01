import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Reports() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Reports</h1>
      <Card title="Reports">
        <p className="page-placeholder__text">
          Generate and export academic, financial, and administrative reports.
        </p>
      </Card>
    </div>
  );
}

export default Reports;
