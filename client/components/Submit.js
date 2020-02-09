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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: "auto",
            padding: 20,
            width: 400,
            height: 400
          }}
        >
          <Container id="submit-container" maxWidth="sm">
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
                placeholder="Your Email"
                type="text"
                value={email}
                name="email"
                onChange={this.handleChange}
                required
              />
            </FormControl>
            <Button
              variant="contained"
              color="default"
              id="submit-button"
              type="button"
              onClick={() => this.props.handleSubmit(userName, email)}
            >
              Submit
            </Button>
            {/* </div> */}
          </Container>
        </div>
      </div>
    );
  }
}

export default Submit;
