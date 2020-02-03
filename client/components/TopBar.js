import React from 'react';

const TopBar = props => {
  return <div id="top-bar" className={props.unload ? 'unload' : ''} />;
};

export default TopBar;
