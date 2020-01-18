import React from "react";

const NomineeDisplay = props => {
  return (
    <div>
      {/* something like this for movie vs. person */}
      {/* simple SCSS grid */}
      <div>{isMovieCategory ? props.nominee.imgURL : props.movieURL}</div>
      <div>{props.nominee.name}</div>
    </div>
  );
};

export default NomineeDisplay;
