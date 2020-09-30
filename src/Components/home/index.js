import React from 'react';
import Featured from './featured';
import Matches from './matches';
import MeetPlayers from './meetPlayers';
import Promotion from './promotion';
import classes from './home.module.css';

const Home = () => {
  return (
    <div className={classes.bck_blue}>
      <Featured />
      <Matches />
      <MeetPlayers />
      <Promotion />
    </div>
  );
};

export default Home;
