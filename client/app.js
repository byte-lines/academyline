import React from 'react';
import axios from 'axios';

import Routes from './routes';
import { withRouter } from 'react-router-dom';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      categories: [],
      choices: [],
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.refresh = this.refresh.bind(this);
    this.logout = this.logout.bind(this);
  }

  async refresh() {
    const me = await axios.get('/auth/me');
    const choices = await axios.get('/api/choices/me');
    let categories = await axios.get('/api/category');

    this.setState({
      categories: categories.data.sort((a, b) => a.pseudoId - b.pseudoId),
      user: me.data,
      choices: choices.data,
    });
  }

  logout() {
    axios.post('/auth/logout').then(async () => {
      const categories = await axios.get('/api/category');
      this.setState({
        user: {},
        choices: [],
        categories: categories.data.sort((a, b) => a.pseudoId - b.pseudoId),
      });
      this.props.history.push('/');
    });
  }

  async componentDidMount() {
    await this.refresh();
  }

  async handleSelect(step, nomineeId) {
    try {
      await axios.post('/api/choices', { categoryIndex: step, nomineeId });
      await this.refresh();
    } catch (err) {
      console.log(err);
    }
  }

  async handleSubmit(userName, email) {
    const { data } = await axios.post('/api/users', {
      userName,
      email,
    });

    this.setState({
      user: data,
    });
  }

  render() {
    const categories = this.state.categories || [];
    const choices = this.state.choices || [];
    const user = this.state.user || {};
    return (
      <div id="mount">
        <Routes
          categories={categories}
          choices={choices}
          user={user}
          handleSelect={this.handleSelect}
          handleSubmit={this.handleSubmit}
          logout={this.logout}
        />
      </div>
    );
  }
}

export default withRouter(App);
