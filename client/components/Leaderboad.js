import React from 'react';
import axios from 'axios';

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
    this.setState({
      users,
    });
  }

  render() {
    const users = this.state.users || [];
    return (
      <div id="leaderboard">
        {users.map(user => {
          return (
            <h1 key={user.id}>
              {user.name}
              {user.numCorrect}
            </h1>
          );
        })}
      </div>
    );
  }
}

export default Leaderboard;
