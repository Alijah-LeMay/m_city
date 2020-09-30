import React from 'react';
import classes from './UI.module.css';

const PlayerCard = (props) => {
  return (
    <div className={classes.player_card_wrapper}>
      <div
        className={classes.player_card_thmb}
        style={{ background: `#f2f9ff url(${props.bck})` }}
      ></div>
      <div className={classes.player_card_nfo}>
        <div className={classes.player_card_number}>{props.number}</div>
        <div className={classes.player_card_name}>
          <span>{props.name}</span>
          <span>{props.lastname}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
