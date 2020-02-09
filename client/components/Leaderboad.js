import React from 'react';
import axios from 'axios';

import TopBar from './TopBar';

class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/users');

    const users = data.map(user => {
      const numCorrect = user.nominees.reduce((total, nominee) => {
        return nominee.winner ? total + 1 : total;
      }, 0);
      user.numCorrect = numCorrect;
      return user;
    });

    users.sort((a, b) => {
      return b.numCorrect - a.numCorrect;
    });
    this.setState({
      users,
    });
  }

  render() {
    const users = this.state.users || [];
    return (
      <React.Fragment>
        <TopBar />
        <div id="leaderboard">
          <div className="list-header">
            <h1>Leaderboard</h1>
          </div>
          <div id="leaderboard-list">
            <div className="leaderboard-row">
              <h3 className="place">Place</h3>
              <h3 className="name">Name</h3>
              <h3 className="correct"># Correct</h3>
            </div>
            {users.map((user, i) => {
              return (
                <div className="leaderboard-row" key={user.id}>
                  <h3 className="place">#{i + 1}</h3>
                  <h3 className="name">{user.name}</h3>
                  <h3 className="correct">{user.numCorrect}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Leaderboard;
