import React from 'react';
import { Card } from '../components/common';
import './PagePlaceholder.css';

function Inventory() {
  return (
    <div className="page-placeholder">
      <h1 className="page-placeholder__title">Inventory</h1>
      <Card title="Inventory Management">
        <p className="page-placeholder__text">
          Track school assets, supplies, and equipment.
        </p>
      </Card>
    </div>
  );
}

export default Inventory;
