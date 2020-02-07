import React from 'react';
import { withRouter } from 'react-router-dom';
import TopBar from './TopBar';
import SummaryList from './SummaryList';
import Submit from './Submit';

const Summary = props => {
  const { choices, user } = props;

  const categories = props.categories.map(category => {
    category.choice = category.nominees.find(nominee =>
      choices.includes(nominee.id)
    );
    return category;
  });

  return (
    <React.Fragment>
      <TopBar />
      <div id="summary">
        {user.id && <SummaryList categories={categories} />}
        {!user.id && <Submit handleSubmit={props.handleSubmit} />}
      </div>
    </React.Fragment>
  );
};

export default withRouter(Summary);
