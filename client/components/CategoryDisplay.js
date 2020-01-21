import React from 'react';
import NomineeDisplay from './NomineeDisplay';

const CategoryDisplay = props => {
  const { category, choices } = props;
  return category ? (
    <React.Fragment>
      <div id="category-container">
        <div id="category-display">
          <h2 className="category-name">{category.name}</h2>
          {category.nominees.map(nominee => {
            return (
              <NomineeDisplay
                key={nominee.id}
                nominee={nominee}
                className={choices.includes(nominee.id) ? "selected" : ""}
                handleSelect={props.handleSelect}
              />
            );
          })}
        </div>

      </div>
    </React.Fragment>
  ) : null;
};

export default CategoryDisplay;
