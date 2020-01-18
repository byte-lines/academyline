import React from "react";
import axios from "axios";

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
  componentDidMount() {
    const categories = await axios.get('/api/categories');
    console.log(categories)
  }
  previousStep() {}
  nextStep() {}
  render() {
    return (
    <div id="mount">
      <h1>HI</h1>
    </div>
    );
  }
}

export default App;
