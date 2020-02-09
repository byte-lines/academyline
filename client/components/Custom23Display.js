import React from 'react';

export const Custom23Display = props => {
  const { nominee, idx } = props;
  const title = nominee.movie.title;
  const uniqueCase = nominee.name.split(' & ');
  return nominee ? (
    <div
      className={
        idx === 0
          ? props.className + ' nominee-info' + '1'
          : props.className + ' nominee-info'
      }
      onClick={() => props.handleSelect(nominee.id)}
    >
      <h4 className="movie-title">{nominee.movie.title}</h4>
      {title === 'Parasite' ? (
        <h5 className="nominee-name">
          <span className="nom-info-desc">Screenplay by</span> {nominee.name}
          <span className="nom-info-desc">, Story by</span> {uniqueCase[0]}
        </h5>
      ) : (
        <h5 className="nominee-name">
          <span className="nom-info-desc">Written by</span> {nominee.name}
        </h5>
      )}
    </div>
  ) : null;
};

export default Custom23Display;
