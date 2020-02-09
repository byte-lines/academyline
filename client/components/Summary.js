import React from "react";
import { withRouter } from "react-router-dom";
import TopBar from "./TopBar";
import SummaryList from "./SummaryList";
import Submit from "./Submit";

const Summary = props => {
  const { choices, user, logout } = props;

  const categories = props.categories.map(category => {
    category.choice = category.nominees.find(nominee =>
      choices.includes(nominee.id)
    );
    return category;
  });

  return (
    <React.Fragment>
      <TopBar logout={logout} user={user} />
      <div id="summary">
        {user.id && <SummaryList categories={categories} user={user} />}
        {!user.id && <Submit handleSubmit={props.handleSubmit} />}
      </div>
    </React.Fragment>
  );
};

export default withRouter(Summary);
