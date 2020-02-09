import React from "react";
import {
  Container,
  Header,
  Input,
  Label,
  Button,
  Form,
  Segment,
  Icon
} from "semantic-ui-react";

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
      <Container>
        <Segment>
          <Header size="medium">
            Submit your info and we will email you if you won!!
          </Header>
          <Form>
            <Form.Input
              fluid="false"
              focus
              size="large"
              placeholder="Enter a Username..."
              icon="user"
              iconPosition="left"
              value={userName}
              name="userName"
              onChange={this.handleChange}
            ></Form.Input>
            <Form.Input
              fluid="false"
              label="Email Address here"
              focus
              size="large"
              placeholder="Your Email"
              icon="at"
              iconPosition="left"
              type="text"
              value={email}
              name="email"
              onChange={this.handleChange}
            />
            <Button
              id="submit-button"
              type="button"
              onClick={() => this.props.handleSubmit(userName, email)}
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </Container>
    );
  }
}

export default Submit;
