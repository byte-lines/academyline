import React from "react";
import NomineeDisplay from "./NomineeDisplay";

const CategoryDisplay = props => {
  return (
    <React.Fragment>
      {props.qwerty[props.step].map(nominee => {
        return <NomineeDisplay nominee={nominee} />;
      })}
    </React.Fragment>
  );
};

export default CategoryDisplay;
