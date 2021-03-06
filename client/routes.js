import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";

import MasterForm from "./components/MasterForm";
import LandingPage from "./components/LandingPage";
import Summary from "./components/Summary";
import Compare from "./components/Compare";
import Leaderboard from "./components/Leaderboad";
import Login from "./components/Login";

class Routes extends React.Component {
  render() {
    const { categories, choices, user } = this.props;
    const { handleSelect, handleSubmit, logout } = this.props;
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
              user={user}
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
              logout={logout}
            />
          )}
        />
        {/* <Route
          path="/compare"
          render={() => (
            <Compare categories={categories} choices={choices} user={user} />
          )}
        /> */}
        <Route
          path="/leaderboard"
          render={() => (
            <Leaderboard categories={categories} user={user} logout={logout} />
          )}
        />
        <Route
          path="/login"
          render={() => <Login setUser={this.props.setUser} />}
        />
        <Route render={() => <LandingPage logout={logout} user={user} />} />
      </Switch>
    );
  }
}

export default Routes;
