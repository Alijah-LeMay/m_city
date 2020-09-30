import React from 'react';
import Stripes from './Stripes';
import Text from './Text';
import classes from './featured.module.css';

const Featured = () => {
  return (
    <div className={classes.featured_wrapper}>
      <Stripes />
      <Text />
    </div>
  );
};

export default Featured;
