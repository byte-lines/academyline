import React from "react";
import { withRouter } from "react-router-dom";

const LandingPage = props => {
  return (
    <div id="landing">
      <h1>Welcome Welcome</h1>
      <button type="button" onClick={() => props.history.push("/survey")}>
        Take Survey
      </button>
    </div>
  );
};

export default withRouter(LandingPage);
