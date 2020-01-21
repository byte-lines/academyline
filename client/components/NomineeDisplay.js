import React from "react";

//movie vs person logic

const NomineeDisplay = props => {
  const { nominee } = props;

  return nominee ? (
    <div
      className={"nominee-info " + props.className}
      onClick={() => props.handleSelect(nominee.id)}
    >
      <strong>{nominee.name}</strong>
      <i>{nominee.movie.title}</i>
      <br />
    </div>
  ) : null;
};

export default NomineeDisplay;
