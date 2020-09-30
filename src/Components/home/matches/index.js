import React from 'react';
import Tag from '../../ui/tag';
import Blocks from './Blocks';
import classes from './matches.module.css';

const MatchesHome = () => {
  return (
    <div className={classes.home_matches_wrapper}>
      <div className={classes.container_matches}>
        <Tag bck='#0e1731' size='50px' color='#ffffff'>
          Matches
        </Tag>

        <Blocks />
        <div className={classes.matches_button_wrapper}>
          <Tag
            bck='#ffffff'
            size='22px'
            color='#0e1731'
            link={true}
            linkto='/the_matches'
          >
            See more matches
          </Tag>
        </div>
      </div>
    </div>
  );
};

export default MatchesHome;
