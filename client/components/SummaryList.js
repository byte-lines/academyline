import React from "react";
import { withRouter } from "react-router-dom";
import ChoiceDisplay from "./ChoiceDisplay";
const SummaryList = props => {
  const { categories, user } = props;

  const handleClick = categoryId => {
    const categoryIds = categories.map(category => category.id);
    props.history.push(`/survey#${categoryIds.indexOf(categoryId) + 1}`);
  };
  return (
    <div>
      <div id="summary-list-header">
        <h3>Results for {user.name}</h3>
        <h3>Correct: __</h3>
      </div>
      <div id="summary-list">
        {categories.map(category => {
          const totalAnswers = category.nominees.reduce(
            (total, nominee) => total + nominee.users.length,
            0
          );
          return category.choice ? (
            <ChoiceDisplay
              handleClick={handleClick}
              category={category}
              totalAnswers={totalAnswers}
            />
          ) : (
            <div
              key={category.id}
              className="summary-row unselected"
              onClick={() => handleClick(category.id)}
            >
              <p>{category.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(SummaryList);
