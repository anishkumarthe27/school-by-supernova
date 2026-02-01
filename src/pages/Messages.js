import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Messages() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Messages</h1>
      <Card title="Messages">
        <p className="page-placeholder__text">
          Internal messaging between staff, students, and parents.
        </p>
      </Card>
    </div>
  );
}

export default Messages;
