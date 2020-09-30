import React from 'react';
import classes from './UI.module.css';

const NotFound = () => {
  return (
    <div className={classes.not_found_container}>
      <div>Sorry :(</div>
      <div>Page not found</div>
    </div>
  );
};

export default NotFound;
