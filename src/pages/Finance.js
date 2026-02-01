import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Finance() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Finance</h1>
      <Card title="Finance & Fees">
        <p className="page-placeholder__text">
          Fee collection, expenses, payroll, and financial reports.
        </p>
      </Card>
    </div>
  );
}

export default Finance;
