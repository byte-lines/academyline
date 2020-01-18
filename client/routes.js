import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import Survey from './components/Survey';
import LandingPage from './components/LandingPage';

class Routes extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <Switch>
        <Route
          path="/survey"
          render={() => <Survey categories={categories} />}
        />
        <Route component={LandingPage} />
      </Switch>
    );
  }
}

export default Routes;
