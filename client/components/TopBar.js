import React from 'react';
import { withRouter } from 'react-router-dom';

const TopBar = props => {
  const navTo = page => {
    props.history.push(page);
  };
  return (
    <div id="top-bar" className={props.unload ? 'unload' : ''}>
      <h2 onClick={() => navTo('/summary')}>Summary</h2>
      <h2 onClick={() => navTo('/leaderboard')}>Leaderboard</h2>
      <h2 onClick={() => navTo('/survey')}>Survey</h2>
    </div>
  );
};

export default withRouter(TopBar);
