import React from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  DashboardHeader,
  AdminDashboard,
  TeacherDashboard,
  StudentDashboard,
  ParentDashboard,
} from '../components/dashboard';
import { RoleSelector } from '../components/common';

const ROLE_VIEWS = {
  admin: AdminDashboard,
  teacher: TeacherDashboard,
  student: StudentDashboard,
  parent: ParentDashboard,
};

function Dashboard() {
  const { currentRole, setCurrentRole } = useOutletContext();
  const RoleView = ROLE_VIEWS[currentRole] || AdminDashboard;

  return (
    <>
      <DashboardHeader title="School Dashboard" />
      <RoleSelector currentRole={currentRole} onRoleChange={setCurrentRole} />
      <RoleView />
    </>
  );
}

export default Dashboard;
