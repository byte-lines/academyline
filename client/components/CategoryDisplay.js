import React from "react";
import NomineeDisplay from "./NomineeDisplay";

const CategoryDisplay = props => {
  const { category, choices, step, numPages } = props;
  return category ? (
    <div id="survey-container">
      <div id="category-name-display">
        <h2 className="category-name">{category.name}</h2>
      </div>
      <span id="middle-line"></span>
      <div id="nominees-display">
        {category.nominees.map((nominee, idx) => {
          return (
            <NomineeDisplay
              key={nominee.id}
              idx={idx}
              nominee={nominee}
              className={choices.includes(nominee.id) ? "selected" : ""}
              handleSelect={props.handleSelect}
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default CategoryDisplay;
