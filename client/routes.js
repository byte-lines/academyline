import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import MasterForm from './components/MasterForm';
import LandingPage from './components/LandingPage';
import Summary from './components/Summary';
import Compare from './components/Compare';

class Routes extends React.Component {
  render() {
    const { categories, choices, user } = this.props;
    const { handleSelect, handleSubmit } = this.props;
    return (
      <Switch>
        <Route
          path="/survey"
          render={() => (
            <MasterForm
              categories={categories}
              choices={choices}
              handleSelect={handleSelect}
              handleSubmit={handleSubmit}
            />
          )}
        />
        <Route
          path="/summary"
          render={() => (
            <Summary
              categories={categories}
              choices={choices}
              user={user}
              handleSubmit={handleSubmit}
            />
          )}
        />
        <Route
          path="/compare"
          render={() => (
            <Compare categories={categories} choices={choices} user={user} />
          )}
        />
        <Route component={LandingPage} />
      </Switch>
    );
  }
}

export default Routes;
