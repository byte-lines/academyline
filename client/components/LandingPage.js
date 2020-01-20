import React from "react";
import HomeCarousel from "./HomeCarousel";
import { withRouter } from "react-router-dom";

const LandingPage = props => {
  return (
    <div id="landing">
      <HomeCarousel />
      <h1 id="welcome-heading" className="home-column">
        __Welcome_to_AcademyLine________________
      </h1>
      <button
        id="home-button"
        className="home-column"
        type="button"
        onClick={() => props.history.push("/survey")}
      >
        Take Survey
      </button>
    </div>
  );
};

export default withRouter(LandingPage);
