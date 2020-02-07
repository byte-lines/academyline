import React from "react";

const NomineeDisplay = props => {
  const { nominee, idx, step } = props;
  return nominee ? (
    <div
      className={
        idx === 0
          ? props.className + " nominee-info" + "1"
          : props.className + " nominee-info"
      }
      onClick={() => props.handleSelect(nominee.id)}
    >
      <h4 className="movie-title">{nominee.movie.title}</h4>
      <h5 className="nominee-name">{nominee.name}</h5>
    </div>
  ) : null;
};

export default NomineeDisplay;
