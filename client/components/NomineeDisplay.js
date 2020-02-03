import React from 'react';

//movie vs person logic

const NomineeDisplay = props => {
  const { nominee, idx } = props;
  // const marginLight = -2 * idx;

  return nominee ? (
    <div
      className={props.className + ' nominee-info'}
      onClick={() => props.handleSelect(nominee.id)}
      // style={{ marginRight: marginLight + 'rem' }}
    >
      <h4 className="movie-title">{nominee.movie.title}</h4>
      <h5 className="nominee-name">{nominee.name}</h5>
    </div>
  ) : null;
};

export default NomineeDisplay;
