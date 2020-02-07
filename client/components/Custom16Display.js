import React from "react";

export const Custom16Display = props => {
  const { nominee, idx } = props;
  const names = nominee.name.split("+");
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
      <h5 className="nominee-name">
        <span className="nom-info-desc">Production Design: </span> {names[0]}
        <span className="nom-info-desc">, Set Decoration: </span> {names[1]}
      </h5>
    </div>
  ) : null;
};

export default Custom16Display;
