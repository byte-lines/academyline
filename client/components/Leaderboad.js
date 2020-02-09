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
          <h1>Leaderboard</h1>
          {users.map(user => {
            return (
              <div className="leaderboard-row" key={user.id}>
                <h3>{user.name}</h3>
                <h3>{user.numCorrect}</h3>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default Leaderboard;
