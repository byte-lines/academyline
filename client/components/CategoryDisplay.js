import React from 'react';
import NomineeDisplay from './NomineeDisplay';

const CategoryDisplay = props => {
  const { category, choices } = props;
  return category ? (
    <React.Fragment>
      <div>
        <h3>{category.name}</h3>
        {category.nominees.map(nominee => {
          return (
            <NomineeDisplay
              key={nominee.id}
              nominee={nominee}
              className={choices.includes(nominee.id) ? 'selected' : ''}
              handleSelect={props.handleSelect}
            />
          );
        })}
      </div>
    </React.Fragment>
  ) : null;
};

export default CategoryDisplay;
