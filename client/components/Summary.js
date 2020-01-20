import React from "react";
import { withRouter } from "react-router-dom";

class Summary extends React.Component {
  constructor() {
    super();
    this.state = { userName: "", email: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { choices, categories } = this.props;
    const { userName, email } = this.state;
    return (
      <div id="summary">
        {choices.map(choice => (
          <h2>{choice.name}</h2>
        ))}
        <div id="final-submit">
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            value={this.state.userName}
            name="userName"
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <button
            type="button"
            onClick={() => this.props.handleSubmit(userName, email)}
          >
            Submit
          </button>
        </div>
      </div>
    ) : null;
  }
}

export default withRouter(Summary);
