import React from 'react';
import HomeCarousel from './HomeCarousel';
import { withRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const LandingPage = props => {
  const imageUrls = [
    'movies/ford.jpg',
    'movies/irishman.jpg',
    'movies/jojo.jpg',
    'movies/joker.jpg',
    'movies/marr.jpg',
    'movies/nin.jpg',
    'movies/onceupon.jpg',
    'movies/parasite.jpg',
    'movies/uncut.jpg',
  ];

  return (
    <div id="landing">
      {!isMobile && <HomeCarousel imageUrls={imageUrls} />}
      <button
        id="home-button"
        className="home-column"
        type="button"
        onClick={() => props.history.push('/survey')}
      >
        Take Survey
      </button>
    </div>
  );
};

export default withRouter(LandingPage);
