import React from 'react';
import { withRouter } from 'react-router-dom';

const SummaryList = props => {
  const { categories } = props;

  const handleClick = categoryId => {
    const categoryIds = categories.map(category => category.id);
    props.history.push(`/survey#${categoryIds.indexOf(categoryId) + 1}`);
  };
  return (
    <div id="summary-list">
      {categories.map(category => {
        const totalAnswers = category.nominees.reduce(
          (total, nominee) => total + nominee.users.length,
          0
        );
        return category.choice ? (
          <div
            key={category.id}
            className="summary-row"
            onClick={() => handleClick(category.id)}
          >
            <h1 className="nominee">
              {category.choice && category.choice.name}
            </h1>
            <div>
              <p>{category.choice && category.choice.movie.title}</p>
              <p>{category.name}</p>
            </div>
            <h4>{`${(category.choice.users.length / totalAnswers) * 100}%`}</h4>
          </div>
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
  );
};

export default withRouter(SummaryList);
