import React, { Component } from 'react';
import PlayerCard from '../ui/playerCard';
import Fade from 'react-reveal/Fade';

import Stripes from '../../Resources/images/stripes.png';
import { firebasePlayers, firebase } from '../../firebase';
import { firebaseLooper } from '../ui/misc';
import { Promise } from 'core-js';
import classes from './theteam.module.css';

// If for some reason there is no image on a players state, this will break the app,therefore no teams will be rendered

class TheTeam extends Component {
  state = {
    loading: true,
    players: [],
  };

  componentDidMount() {
    firebasePlayers.once('value').then((snapshot) => {
      const players = firebaseLooper(snapshot);
      let promises = [];

      for (let key in players) {
        promises.push(
          new Promise((resolve, reject) => {
            firebase
              .storage()
              .ref('players')
              .child(players[key].image)
              .getDownloadURL()
              .then((url) => {
                players[key].url = url;
                resolve();
              });
          })
        );
      }

      Promise.all(promises).then(() => {
        this.setState({
          loading: false,
          players,
        });
      });
    });
  }

  showplayersByCategory = (category) =>
    this.state.players
      ? this.state.players.map((player, i) => {
          return player.position === category ? (
            <Fade left delay={i * 20} key={i}>
              <div className={classes.item}>
                <PlayerCard
                  number={player.number}
                  name={player.name}
                  lastname={player.lastname}
                  bck={player.url}
                />
              </div>
            </Fade>
          ) : null;
        })
      : null;

  render() {
    return (
      <div
        className={classes.the_team_container}
        style={{
          background: `url(${Stripes}) repeat`,
        }}
      >
        {!this.state.loading ? (
          <div>
            <div className={classes.team_category_wrapper}>
              <div className={classes.title}>Keepers</div>
              <div className={classes.team_cards}>
                {this.showplayersByCategory('Keeper')}
              </div>
            </div>

            <div className={classes.team_category_wrapper}>
              <div className={classes.title}>Defence</div>
              <div className={classes.team_cards}>
                {this.showplayersByCategory('Defence')}
              </div>
            </div>

            <div className={classes.team_category_wrapper}>
              <div className={classes.title}>Midfield</div>
              <div className={classes.team_cards}>
                {this.showplayersByCategory('Midfield')}
              </div>
            </div>

            <div className={classes.team_category_wrapper}>
              <div className={classes.title}>Strikers</div>
              <div className={classes.team_cards}>
                {this.showplayersByCategory('Striker')}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default TheTeam;
