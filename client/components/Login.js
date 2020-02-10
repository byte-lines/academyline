import React from "react";
import { FormControl, Input, InputLabel, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { userName: "", email: "", error: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleReturn = this.handleReturn.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleReturn() {
    this.props.history.goBack();
  }

  async handleLogin() {
    try {
      const user = await axios.post("/auth/login", {
        userName: this.state.userName,
        email: this.state.email
      });
      this.props.setUser(user.data);
      this.props.history.push("/summary");
    } catch (err) {
      this.setState({ error: "Your info did not match one in our records" });
    }
  }
  render() {
    const { userName, email } = this.state;
    return (
      <div className="final-submit">
        <div id="top-bar">
          <h2
            size="medium"
            variant="contained"
            onClick={() => this.handleReturn()}
          >
            &#8592; Return to home
          </h2>
        </div>
        <h3 className="submit-header login-info">
          ONLY ENTER INFO IF YOU'VE ALREADY SUBMITTED YOUR CHOICES
        </h3>
        <div className="submit-container">
          <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="firstName">Username</InputLabel>
            <Input
              placeholder="Your Username..."
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
              placeholder="Your email..."
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
            onClick={() => this.handleLogin(userName, email)}
          >
            Login
          </Button>
          {/* </div> */}
          <div>{this.state.error}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
