import React from 'react';

export const Custom22Display = props => {
  const { nominee, idx } = props;
  const title = nominee.movie.title;
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
      {title === 'The Irishman' || title === 'Jojo Rabbit' ? (
        <h5 className="nominee-name">
          <span className="nom-info-desc">Screenplay by</span> {nominee.name}
        </h5>
      ) : title === 'Little Women' ? (
        <h5 className="nominee-name">
          <span className="nom-info-desc">Written for the screen by</span>{' '}
          {nominee.name}
        </h5>
      ) : (
        <h5 className="nominee-name">
          <span className="nom-info-desc">Written by</span> {nominee.name}
        </h5>
      )}
    </div>
  ) : null;
};

export default Custom22Display;
