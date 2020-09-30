import React from 'react';
import AdminNav from '../Components/admin/nav/AdminNav';
import classes from './hoc.module.css';
const AdminLayout = (props) => {
  return (
    <div className={classes.admin_container}>
      <div className={classes.admin_left_nav}>
        <AdminNav />
      </div>
      <div className={classes.admin_right}>{props.children}</div>
    </div>
  );
};

export default AdminLayout;
