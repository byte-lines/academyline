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
  ];

  const [unload, triggerUnload] = useState(false);

  const changePage = newPage => {
    // triggerUnload(true);
    // setTimeout(() => props.history.push(newPage), 800);
    props.history.push(newPage);
  };

  return (
    <React.Fragment>
      <TopBar unload={unload} />
      <div id="landing" className={unload ? 'unload' : ''}>
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
          Take Survey
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(LandingPage);
