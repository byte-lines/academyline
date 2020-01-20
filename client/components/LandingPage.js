import React from "react";
import { withRouter } from "react-router-dom";

const LandingPage = props => {
  return (
    <div id="landing">
      <h1 id="welcome-heading" className="home-column">
        Welcome to the Academyline
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
