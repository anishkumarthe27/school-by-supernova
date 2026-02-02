import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  DashboardHeader,
  SuperAdminDashboard,
  AdminDashboard,
  TeacherDashboard,
  StudentDashboard,
  ParentDashboard,
} from '../components/dashboard';

const ROLE_VIEWS = {
  superadmin: SuperAdminDashboard,
  admin: AdminDashboard,
  teacher: TeacherDashboard,
  student: StudentDashboard,
  parent: ParentDashboard,
};

function Dashboard() {
  const { currentRole } = useOutletContext();
  const RoleView = ROLE_VIEWS[currentRole] || SuperAdminDashboard;

  return (
    <>
      <DashboardHeader title="School Dashboard" />
      <RoleView />
    </>
  );
}

export default Dashboard;
