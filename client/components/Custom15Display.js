import React from "react";

export const Custom15Display = props => {
  const { nominee, idx } = props;
  return nominee ? (
    <div
      className={
        idx === 0
          ? props.className + " nominee-info-BMPoY" + "1"
          : props.className + " nominee-info-BMPoY"
      }
      onClick={() => props.handleSelect(nominee.id)}
    >
      <h5 className="movie-title-BMPoY">{nominee.movie.title}</h5>
      <h5 className="nominee-name-BMPoY">{nominee.name}</h5>
    </div>
  ) : null;
};

export default Custom15Display;
