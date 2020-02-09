import React from "react";

const ChoiceDisplay = props => {
  const { category, totalAnswers } = props;
  const { handleClick } = props;
  return (
    <div
      key={category.id}
      className="summary-row"
      onClick={() => handleClick(category.id)}
    >
      <h1 className="nominee">
        <span>{category.pseudoId}.</span>{" "}
        {category.choice && category.choice.name}
      </h1>
      <div className="choice-info">
        <p>
          {category.choice && category.choice.movie.title}{" "}
          <span>
            Chosen by{" "}
            {`${Math.round(
              (100 * category.choice.users.length) / totalAnswers
            )}%`}
          </span>
        </p>
        <p>{category.name}</p>
      </div>
    </div>
  );
};

export default ChoiceDisplay;
