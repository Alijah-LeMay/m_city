import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import classes from './featured.module.css';

import FeaturedPlayer from '../../../Resources/images/featured_player.png';

class Text extends Component {
  animateNumber = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        rotate: 0,
      }}
      enter={{
        opacity: [1],
        rotate: [360],
        timing: { duration: 1000, ease: easePolyOut },
      }}
    >
      {({ opacity, rotate }) => {
        return (
          <div className={classes.featured_number_wrapper}>
            <div
              className={classes.featured_number}
              style={{
                opacity,
                transform: `translate(260px,170px) rotateY(${rotate}deg)`,
              }}
            >
              3
            </div>
          </div>
        );
      }}
    </Animate>
  );

  animateFirst = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 450,
      }}
      enter={{
        opacity: [1],
        x: [233],
        y: [450],
        timing: { duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div className={classes.featured_first_wrapper}>
            <div
              className={classes.featured_first}
              style={{
                opacity,
                transform: `translate(${x}px,${y}px)`,
              }}
            >
              League
            </div>
          </div>
        );
      }}
    </Animate>
  );

  animateSecond = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
        x: 503,
        y: 586,
      }}
      enter={{
        opacity: [1],
        x: [233],
        y: [586],
        timing: { delay: 300, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity, x, y }) => {
        return (
          <div className={classes.featured_second_wrapper}>
            <div
              className={classes.featured_second}
              style={{
                opacity,
                transform: `translate(${x}px,${y}px)`,
              }}
            >
              Championships
            </div>
          </div>
        );
      }}
    </Animate>
  );

  animatePlayer = () => (
    <Animate
      show={true}
      start={{
        opacity: 0,
      }}
      enter={{
        opacity: [1],
        timing: { delay: 800, duration: 500, ease: easePolyOut },
      }}
    >
      {({ opacity }) => {
        return (
          <div className={classes.featured_player_wrapper}>
            <div
              className={classes.featured_player}
              style={{
                opacity,
                background: `url(${FeaturedPlayer})`,
                transform: `translate(550px,201px)`,
              }}
            ></div>
          </div>
        );
      }}
    </Animate>
  );

  render() {
    return (
      <div className={classes.featured_text}>
        {this.animatePlayer()}
        {this.animateNumber()}
        {this.animateFirst()}
        {this.animateSecond()}
      </div>
    );
  }
}

export default Text;
