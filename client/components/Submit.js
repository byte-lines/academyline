import React from 'react';

class Submit extends React.Component {
  constructor() {
    super();
    this.state = { userName: '', email: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const { userName, email } = this.state;
    return (
      <div id="final-submit">
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          value={userName}
          name="userName"
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          value={email}
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
    );
  }
}

export default Submit;
