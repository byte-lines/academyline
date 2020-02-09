import React from 'react';
import ChoiceDisplay from './ChoiceDisplay';

import { withRouter } from 'react-router-dom';

const Compare = props => {
  const { choices, categories } = props;

  const compareArray = JSON.parse(JSON.stringify(categories));

  const userCategories = props.categories.map(category => {
    category.choice = category.nominees.find(nominee =>
      choices.includes(nominee.id)
    );
    return category;
  });

  const compareUserId = 5;
  const compareCategories = props.categories.map(category => {
    const compCat = {};
    compCat.nominees = category.nominees;
    compCat.name = category.name;
    compCat.choice = category.nominees.find(nominee =>
      nominee.users.map(user => user.id).includes(compareUserId)
    );
    return compCat;
  });

  const handleClick = categoryId => {
    const categoryIds = categories.map(category => category.id);
    props.history.push(`/survey#${categoryIds.indexOf(categoryId) + 1}`);
  };

  return (
    <div id="compare">
      <div id="compare-list">
        {userCategories.map((category, i) => {
          const totalAnswers = category.nominees.reduce(
            (total, nominee) => total + nominee.users.length,
            0
          );

          return (
            <React.Fragment key={category.id}>
              {category.choice ? (
                <ChoiceDisplay
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
              )}
              <br />
              {compareCategories[i].choice ? (
                <ChoiceDisplay
                  category={compareCategories[i]}
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
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Compare);
