import React from "react";

export const Custom14Display = props => {
  const { nominee, idx } = props;
  let uniqueCase = [];
  if (idx === 1) {
    uniqueCase = nominee.name.split("+");
  }
  return nominee ? (
    <div
      className={
        idx === 0
          ? props.className + " nominee-info" + "1"
          : props.className + " nominee-info"
      }
      onClick={() => props.handleSelect(nominee.id)}
      // style={{ marginRight: marginLight + 'rem' }}
    >
      <h4 className="movie-title">
        <span className="original-song">{nominee.movie.originalSong}</span>{" "}
        <span className="conjunction-span"> from </span>
        {nominee.movie.title}
      </h4>
      {uniqueCase.length ? (
        <h5 className="nominee-name">
          <span className="nom-info-desc">Music by</span> {uniqueCase[0]}
          <span className="nom-info-desc">, Lyric by</span> {uniqueCase[1]}
        </h5>
      ) : (
        <h5 className="nominee-name">
          <span className="nom-info-desc">Music and Lyric by</span>{" "}
          {nominee.name}
        </h5>
      )}
    </div>
  ) : null;
};

export default Custom14Display;
