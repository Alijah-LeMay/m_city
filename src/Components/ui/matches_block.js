import React from 'react';
import classes from './UI.module.css';

const MatchesBlock = ({ match }) => {
  return (
    <div className={classes.match_block}>
      <div className={classes.match_date}>
        {match.final ? match.date : `Match not played yet: ${match.date}`}
      </div>
      <div className={classes.match_wrapper}>
        <div className={classes.match_top}>
          <div className={classes.left}>
            <div
              className={classes.icon}
              style={{
                background: `url(/images/team_icons/${match.localThmb}.png)`,
              }}
            ></div>
            <div className={classes.team_name}>{match.local}</div>
          </div>
          <div className={classes.right}>
            {match.final ? match.resultLocal : '-'}
          </div>
        </div>
        <div className={classes.match_bottom}>
          <div className={classes.left}>
            <div
              className={classes.icon}
              style={{
                background: `url(/images/team_icons/${match.awayThmb}.png)`,
              }}
            ></div>
            <div className={classes.team_name}>{match.away}</div>
          </div>
          <div className={classes.right}>
            {match.final ? match.resultAway : '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesBlock;
