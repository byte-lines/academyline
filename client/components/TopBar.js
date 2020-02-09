import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const TopBar = props => {
  const navTo = page => {
    props.history.push(page);
  };
  const { user } = props;

  return (
    <div id="top-bar" className={props.unload ? 'unload' : ''}>
      {user && user.id && (
        <React.Fragment>
          <h2 onClick={() => navTo('/survey')}>Survey</h2>
          <h2 onClick={() => navTo('/summary')}>Results</h2>
          <h2 onClick={() => navTo('/leaderboard')}>Leaderboard</h2>
          <h2
            onClick={() => {
              props.logout();
            }}
          >
            Start New
          </h2>
        </React.Fragment>
      )}
    </div>
  );
};

export default withRouter(TopBar);
