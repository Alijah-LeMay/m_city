import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import Animate from 'react-move/Animate';
import classes from './featured.module.css';

class Stripes extends Component {
  state = {
    stripes: [
      {
        background: '#98c5e9',
        left: '50',
        // left: 120
        rotate: 25,
        top: -260,
        delay: 0,
      },
      {
        background: '#ffffff',
        left: '160',
        // left: 360,
        rotate: 25,
        top: -397,
        delay: 200,
      },
      {
        background: '#98c5e9',
        left: '270',
        // left: 600,
        rotate: 25,
        top: -498,
        delay: 400,
      },
    ],
  };

  showStripes = () =>
    this.state.stripes.map((stripe, i) => (
      <Animate
        key={i}
        show={true}
        start={{
          background: '#ffffff',
          opacity: 0,
          left: 0,
          rotate: 0,
          top: 0,
        }}
        enter={{
          background: stripe.background,
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          top: [stripe.top],
          timing: { delay: stripe.delay, duration: 200, ease: easePolyOut },
          events: {
            end() {
              // console.log('animation finished')
            },
          },
        }}
      >
        {({ opacity, left, rotate, top, background }) => {
          return (
            <div
              className={classes.stripe}
              style={{
                background,
                opacity,
                transform: `rotate(${rotate}deg) translate(${left}%,${top}px)`,
              }}
            ></div>
          );
        }}
      </Animate>
    ));
  render() {
    return (
      <div className={classes.featured_stripes_wrapper}>
        <div className={classes.featured_stripes}>{this.showStripes()}</div>
      </div>
    );
  }
}

export default Stripes;
