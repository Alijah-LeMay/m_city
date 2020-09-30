import React from 'react';
import { Link } from 'react-router-dom';

import Radium from 'radium';

const Tag = (props) => {
  let rStyle = {
    background: props.bck,
    fontSize: props.size,
    color: props.color,
    padding: '5px 10px',
    display: 'inline-block',
    fontFamily: 'Righteous',
    ...props.add,
  };
  if (props.responsive) {
    rStyle = {
      background: props.bck,
      fontSize: props.size,
      color: props.color,
      padding: '5px 10px',
      display: 'inline-block',
      fontFamily: 'Righteous',
      ...props.add,
      '@media (max-width: 1100px)': {
        fontSize: props.responFontSize,
      },
    };
  }

  const template = <div style={rStyle}>{props.children}</div>;

  if (props.link) {
    return <Link to={props.linkto}>{template}</Link>;
  } else {
    return template;
  }
};

export default Radium(Tag);
