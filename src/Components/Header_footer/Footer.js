import React from 'react';
import { CityLogo } from '../ui/icons';
import classes from './header_footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.bck_blue}>
      <div className={classes.footer_logo}>
        <CityLogo width='70px' height='70px' link={true} linkTo='/' />
      </div>
      <div className={classes.footer_discl}>
        Manchester city 2018. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
