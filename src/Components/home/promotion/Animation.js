import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Jersey from '../../../Resources/images/jersey.jpg';
import classes from './promotions.module.css';

const PromotionAnimation = () => {
  return (
    <div className={classes.promotion_animation}>
      <div className={classes.left}>
        <Zoom>
          <div className={classes.promotion_banner}>
            <span className={classes.promotion_banner_first}>Win a </span>
            <span>Jersey</span>
          </div>
        </Zoom>
      </div>
      <div className={classes.right}>
        <Zoom>
          <div style={{ background: `url(${Jersey}) no-repeat` }}></div>
        </Zoom>
      </div>
    </div>
  );
};

export default PromotionAnimation;
