import React from 'react';
import axios from 'axios';

import Routes from './routes';
import TopBar from './components/TopBar';
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
  }

  async componentDidMount() {
    const me = await axios.get('/auth/me');
    const choices = await axios.get('/api/choices/me');
    const categories = await axios.get('/api/category');
    this.setState({
      categories: categories.data,
      user: me.data,
      choices: choices.data,
    });
  }

  async handleSelect(step, nomineeId) {
    try {
      await axios.post('/api/choices', { categoryIndex: step, nomineeId });
      const { choices } = this.state;

      const newChoices = choices;
      newChoices[step] = nomineeId;
      this.setState({
        choices: newChoices,
      });
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

    return (
      <div id="mount">
        <Routes
          categories={categories}
          choices={choices}
          handleSelect={this.handleSelect}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
