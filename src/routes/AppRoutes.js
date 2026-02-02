import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Academics from '../pages/Academics';
import Students from '../pages/Students';
import Staff from '../pages/Staff';
import Finance from '../pages/Finance';
import Inventory from '../pages/Inventory';
import Announcements from '../pages/Announcements';
import Messages from '../pages/Messages';
import Calendar from '../pages/Calendar';
import Analytics from '../pages/Analytics';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="academics" element={<Academics />} />
        <Route path="students" element={<Students />} />
        <Route path="staff" element={<Staff />} />
        <Route path="finance" element={<Finance />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="announcements" element={<Announcements />} />
        <Route path="messages" element={<Messages />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
