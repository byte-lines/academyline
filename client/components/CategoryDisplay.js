import React from "react";
import NomineeDisplay from "./NomineeDisplay";

const CategoryDisplay = props => {
  const { category } = props;
  return category ? (
    <React.Fragment>
      <div>
        {category.name}
        {category.nominees.map(nominee => {
          return <NomineeDisplay nominee={nominee} />;
        })}
      </div>
      <h1>yo</h1>
    </React.Fragment>
  ) : null;
};

export default CategoryDisplay;
