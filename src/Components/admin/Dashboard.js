import React from 'react';
import AdminLayout from '../../Hoc/AdminLayout';
import classes from './admin.module.css';
const Dashboard = () => {
  return (
    <AdminLayout>
      <div className={classes.user_dashboard}>
        <div>This is your dashboard.</div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
