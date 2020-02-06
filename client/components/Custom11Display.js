import React from "react";

const Custom11Display = props => {
  const { nominee, idx, step } = props;
  return nominee ? (
    <div
      className={props.className + " nominee-info"}
      onClick={() => props.handleSelect(nominee.id)}
      // style={{ marginRight: marginLight + 'rem' }}
    >
      <h4 className="movie-title">{nominee.movie.title}</h4>
      <h5 className="nominee-name">
        {nominee.name} <span>{nominee.movie.country}</span>
      </h5>
    </div>
  ) : null;
};

export default Custom11Display;
