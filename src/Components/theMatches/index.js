import React, { Component } from 'react';
import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

import LeagueTable from './table';
import MatchesList from './matchesList';

import classes from './thematches.module.css';

class TheMatches extends Component {
  state = {
    loading: true,
    matches: [],
    filterMatches: [],
    playedFilter: 'All',
    resultFilter: 'All',
  };

  componentDidMount() {
    firebaseMatches.once('value').then((snapshot) => {
      const matches = firebaseLooper(snapshot);

      this.setState({
        loading: false,
        matches: reverseArray(matches),
        filterMatches: reverseArray(matches),
      });
    });
  }

  showPlayed = (played) => {
    const list = this.state.matches.filter((match) => {
      return match.final === played;
    });

    this.setState({
      filterMatches: played === 'All' ? this.state.matches : list,
      playedFilter: played,
      resultFilter: 'All',
    });
  };

  showResult = (result) => {
    const list = this.state.matches.filter((match) => {
      return match.result === result;
    });

    this.setState({
      filterMatches: result === 'All' ? this.state.matches : list,
      playedFilter: 'All',
      resultFilter: result,
    });
  };

  render() {
    const state = this.state;
    return (
      <div className={classes.the_matches_container}>
        <div className={classes.the_matches_wrapper}>
          <div className={classes.left}>
            <div className={classes.match_filters}>
              <div className={classes.match_filters_box}>
                <div className={classes.tag}>Show Match</div>
                <div className={classes.cont}>
                  <div
                    className={
                      state.playedFilter === 'All'
                        ? classes.option_active
                        : classes.option
                    }
                    onClick={() => this.showPlayed('All')}
                  >
                    All
                  </div>
                  <div
                    className={
                      state.playedFilter === 'Yes'
                        ? classes.option_active
                        : classes.option
                    }
                    onClick={() => this.showPlayed('Yes')}
                  >
                    Played
                  </div>
                  <div
                    className={
                      state.playedFilter === 'No'
                        ? classes.option_active
                        : classes.option
                    }
                    onClick={() => this.showPlayed('No')}
                  >
                    Not played
                  </div>
                </div>
              </div>
              <div className={classes.match_filters_box}>
                <div className={classes.tag}>Result game</div>
                <div className={classes.cont}>
                  <div
                    className={
                      state.resultFilter === 'All'
                        ? classes.option_active
                        : classes.option
                    }
                    onClick={() => this.showResult('All')}
                  >
                    All
                  </div>
                  <div
                    className={
                      state.resultFilter === 'W'
                        ? classes.option_active
                        : classes.option
                    }
                    onClick={() => this.showResult('W')}
                  >
                    W
                  </div>
                  <div
                    // `option ${
                    //   state.resultFilter === 'L' ? 'active' : ''
                    // }`
                    className={
                      state.resultFilter === 'L'
                        ? classes.option_active
                        : classes.option
                    }
                    onClick={() => this.showResult('L')}
                  >
                    L
                  </div>
                  <div
                    // `option ${
                    //   state.resultFilter === 'D' ? 'active' : ''
                    // }`
                    className={
                      state.resultFilter === 'D'
                        ? classes.option_active
                        : classes.option
                    }
                    onClick={() => this.showResult('D')}
                  >
                    D
                  </div>
                </div>
              </div>
            </div>
            <MatchesList matches={state.filterMatches} />
          </div>
          <div className={classes.right}>
            <LeagueTable />
          </div>
        </div>
      </div>
    );
  }
}

export default TheMatches;
