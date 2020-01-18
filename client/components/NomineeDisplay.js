import React from "react";

//movie vs person logic

const NomineeDisplay = props => {
  console.log(props);
  const { nominee } = props;

  return nominee ? (
    <div className="nominee-info">
      <div>{nominee.image || "image placeholder"}</div>
      <div>
        <strong>{nominee.name}</strong> for <i>{nominee.movie.title}</i>
      </div>
      <div>{}</div>
      <h1>yo</h1>
    </div>
  ) : null;
};

export default NomineeDisplay;
