import React, { Component } from 'react';
import Stripes from '../../../Resources/images/stripes.png';
import Tag from '../../ui/tag';
import Reveal from 'react-reveal/Reveal';
import HomeCards from './cards';
import classes from './meetPlayers.module.css';

class MeetPlayers extends Component {
  state = {
    show: false,
  };

  render() {
    return (
      <Reveal
        fraction={0.7}
        onReveal={() => {
          this.setState({
            show: true,
          });
        }}
      >
        <div
          className={classes.home_meetplayers}
          style={{ background: `#ffffff url(${Stripes})` }}
        >
          <div className={classes.container}>
            <div className={classes.home_meetplayers_wrapper}>
              <div className={classes.home_card_wrapper}>
                <HomeCards show={this.state.show} />
              </div>
              <div className={classes.home_text_wrapper}>
                <div className={classes.tag_wrapper}>
                  <Tag
                    bck='#0e1731'
                    size={'100px'}
                    color='#ffffff'
                    responsive
                    responFontSize='9vw'
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px',
                    }}
                  >
                    Meet
                  </Tag>
                </div>
                <div className={classes.tag_wrapper}>
                  <Tag
                    bck='#0e1731'
                    size='100px'
                    color='#ffffff'
                    responsive
                    responFontSize='9vw'
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px',
                    }}
                  >
                    The
                  </Tag>
                </div>
                <div className={classes.tag_wrapper}>
                  <Tag
                    bck='#0e1731'
                    size='100px'
                    color='#ffffff'
                    responsive
                    responFontSize='9vw'
                    add={{
                      display: 'inline-block',
                      marginBottom: '20px',
                    }}
                  >
                    Players
                  </Tag>
                </div>
                <div>
                  <Tag
                    bck='#ffffff'
                    size='27px'
                    color='#0e1731'
                    responsive
                    responFontSize='3vw'
                    link={true}
                    linkto='/the_team'
                    add={{
                      display: 'inline-block',
                      marginBottom: '27px',
                      border: '1px solid #0e1731',
                    }}
                  >
                    Meet them here
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    );
  }
}

export default MeetPlayers;
