import React from 'react';
import axios from 'axios';

import Routes from './routes';
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
  }

  async refresh() {
    const me = await axios.get('/auth/me');
    const choices = await axios.get('/api/choices/me');
    const categories = await axios.get('/api/category');
    this.setState({
      categories: categories.data,
      user: me.data,
      choices: choices.data,
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
        />
      </div>
    );
  }
}

export default App;
