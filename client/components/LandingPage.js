import React, { useState } from 'react';
import HomeCarousel from './HomeCarousel';
import TopBar from './TopBar';
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
    'movies/littlewomen.png',
  ];

  for (let i = imageUrls.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [imageUrls[i], imageUrls[j]] = [imageUrls[j], imageUrls[i]];
  }

  const changePage = newPage => {
    // triggerUnload(true);
    // setTimeout(() => props.history.push(newPage), 800);
    props.history.push(newPage);
  };

  const { logout, user } = props;

  return (
    <React.Fragment>
      <TopBar logout={logout} user={user} />
      <div id="landing" className={''}>
        {!isMobile && <HomeCarousel imageUrls={imageUrls} />}
        <div id="title">
          <h1 className="main">OSCARS</h1>
          <h1 className="year">'19</h1>
        </div>
        <button
          id="home-button"
          className="next-button"
          type="button"
          onClick={() => changePage('/survey')}
        >
          <span id="take-survey-arrow">&#10230;</span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
