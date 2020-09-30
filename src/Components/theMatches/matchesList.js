import React, { Component } from 'react';
import { easePolyOut } from 'd3-ease';
import NodeGroup from 'react-move/NodeGroup';
import classes from './thematches.module.css';

class MatchesList extends Component {
  state = {
    matcheslist: [],
  };

  static getDerivedStateFromProps(props, state) {
    return (state = {
      matcheslist: props.matches,
    });
  }

  showMatches = () =>
    this.state.matcheslist ? (
      <NodeGroup
        data={this.state.matcheslist}
        keyAccessor={(d) => d.id}
        start={() => ({
          opacity: 0,
          x: -200,
        })}
        enter={(d, i) => ({
          opacity: [1],
          x: [0],
          timing: { duration: 500, delay: i * 50, ease: easePolyOut },
        })}
        update={(d, i) => ({
          opacity: [1],
          x: [0],
          timing: { duration: 500, delay: i * 50, ease: easePolyOut },
        })}
        leave={(d, i) => ({
          opacity: [0],
          x: [-200],
          timing: { duration: 500, delay: i * 50, ease: easePolyOut },
        })}
      >
        {(nodes) => (
          <div>
            {nodes.map(({ key, data, state: { x, opacity } }) => (
              <div
                key={key}
                className={classes.match_box_big}
                style={{
                  opacity,
                  transform: `translate(${x}px)`,
                }}
              >
                <div className={classes.block_wraper}>
                  <div className={classes.block}>
                    <div className={classes.icon_wrapper}>
                      <div
                        className={classes.icon}
                        style={{
                          background: `url(/images/team_icons/${data.localThmb}.png)`,
                        }}
                      ></div>
                    </div>

                    <div className={classes.team}>{data.local}</div>
                    <div className={classes.result}>{data.resultLocal}</div>
                  </div>
                  <div className={classes.block}>
                    <div className={classes.icon_wrapper}>
                      <div
                        className={classes.icon}
                        style={{
                          background: `url(/images/team_icons/${data.awayThmb}.png)`,
                        }}
                      ></div>
                    </div>
                    <div className={classes.team}>{data.away}</div>
                    <div className={classes.result}>{data.resultAway}</div>
                  </div>
                </div>
                <div className={classes.block_wraper_nfo}>
                  <div>
                    <strong>Date:</strong> {data.date}
                  </div>
                  <div>
                    <strong>Stadium:</strong> {data.stadium}
                  </div>
                  <div>
                    <strong>Referee:</strong> {data.referee}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </NodeGroup>
    ) : null;

  render() {
    console.log(this.state.matcheslist);
    return <div>{this.showMatches()}</div>;
  }
}

export default MatchesList;
