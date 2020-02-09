import React from "react";
import { FormControl, Input, InputLabel, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import axios from "axios";

class Login extends React.Component {
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
      async handleLogin() {
        await axios.post('/auth/login', {userName: this.state.userName, email: this.state.email})
      }
      render() {
        const { userName, email } = this.state;
        return (
          <div id="login">
            <Button size='large' variant='contained'>
                Start New &#8594;
            </Button>
            <h3 id="submit-header">ONLY ENTER INFO IF YOU'VE ALREADY SUBMITTED</h3>
            <div id="submit-container">
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
    
    export default Login;
}
