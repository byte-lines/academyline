import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "",
      choices: [],
      nominees: [],
      step: 0
    };
  }
  render() {
    return <div id="mount"></div>;
  }
}

export default App;
