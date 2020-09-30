import React from 'react';
import PromotionAnimation from './Animation';
import Enroll from './Enroll';
import classes from './promotions.module.css';

const Promotion = () => {
  return (
    <div
      className={classes.promotion_wrapper}
      style={{ background: '#ffffff' }}
    >
      <div className={classes.container}>
        <PromotionAnimation />
        <Enroll />
      </div>
    </div>
  );
};

export default Promotion;
