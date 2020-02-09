import React from 'react';

const ChoiceDisplay = props => {
  const { category, totalAnswers } = props;
  const { handleClick } = props;
  return (
    <div
      key={category.id}
      className="summary-row"
      onClick={() => handleClick(category.id)}
    >
      <h1 className="nominee">{category.choice && category.choice.name}</h1>
      <div>
        <p>{category.choice && category.choice.movie.title}</p>
        <p>{category.name}</p>
      </div>
      <h4>
        {`${Math.round((100 * category.choice.users.length) / totalAnswers)}%`}
      </h4>
    </div>
  );
};

export default ChoiceDisplay;
