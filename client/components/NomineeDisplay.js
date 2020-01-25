import React from "react";

//movie vs person logic

const NomineeDisplay = props => {
  const { nominee, idx } = props;

  return nominee ? (
    <div
      className={"nominee-info" + idx + " " + props.className}
      onClick={() => props.handleSelect(nominee.id)}
    >
      <h4 className="movie-title">{nominee.movie.title}</h4>
      <h5 className="nominee-name">{nominee.name}</h5>
      <br />
    </div>
  ) : null;
};

export default NomineeDisplay;
