import React from "react";
import Button from "@material-ui/core/Button";
import { FormControl, Input, InputLabel, Container } from "@material-ui/core";

class Submit extends React.Component {
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
    const { userName, email } = this.state;
    return (
      <div id="final-submit">
        <h3 id="submit-header">Enter your info to save your choices!</h3>
        <div id="submit-container">
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="firstName">Username</InputLabel>
            <Input
              placeholder="Enter a Username..."
              type="text"
              value={userName}
              name="userName"
              onChange={this.handleChange}
              required="true"
            />
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              placeholder="Enter your email..."
              type="text"
              value={email}
              name="email"
              onChange={this.handleChange}
              required="true"
            />
          </FormControl>
          <Button
            id="submit-button"
            style={{ marginTop: 32 }}
            size="large"
            variant="contained"
            color="default"
            type="button"
            onClick={() => this.props.handleSubmit(userName, email)}
          >
            Submit
          </Button>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Submit;
