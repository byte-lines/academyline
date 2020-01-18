import React from 'react';
import axios from 'axios';

import Routes from './routes';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
      choices: [],
      categories: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/category');
    this.setState({
      categories: data,
    });
  }

  render() {
    const categories = this.state.categories || [];
    return (
      <div id="mount">
        <Routes categories={categories} />
      </div>
    );
  }
}

export default App;
