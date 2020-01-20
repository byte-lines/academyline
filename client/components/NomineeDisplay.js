import React from "react";

//movie vs person logic

const NomineeDisplay = props => {
  const { nominee } = props;

  return nominee ? (
    <div
      className={"nominee-info " + props.className}
      onClick={() => props.handleSelect(nominee.id)}
    >
      <div>{nominee.image || "image placeholder"}</div>
      <div>
        <strong>{nominee.name}</strong> for <i>{nominee.movie.title}</i>
      </div>
      <br />
    </div>
  ) : null;
};

export default NomineeDisplay;
