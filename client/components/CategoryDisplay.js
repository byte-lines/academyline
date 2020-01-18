import React from "react";
import NomineeDisplay from "./NomineeDisplay";

const CategoryDisplay = props => {
  const { category } = props;
  return category ? (
    <React.Fragment>
      <div>
        <h3>{category.name}</h3>
        {category.nominees.map(nominee => {
          return <NomineeDisplay nominee={nominee} />;
        })}
      </div>
    </React.Fragment>
  ) : null;
};

export default CategoryDisplay;
