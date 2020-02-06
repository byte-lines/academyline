import React from 'react';
import { withRouter } from 'react-router-dom';
import TopBar from './TopBar';

class Summary extends React.Component {
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
    const { choices } = this.props;
    const { userName, email } = this.state;

    const categories = this.props.categories.map(category => {
      category.choice = category.nominees.find(nominee =>
        choices.includes(nominee.id)
      );
      return category;
    });

    return (
      <React.Fragment>
        <TopBar />
        <div id="summary">
          <div id="summary-list">
            {categories.map(category => (
              <div key={category.id} className="summary-row">
                <h1 className="nominee">
                  {category.choice && category.choice.name}
                </h1>
                <div>
                  <p>{category.choice && category.choice.movie.title}</p>
                  <p>{category.name}</p>
                </div>
                <h4>100%</h4>
              </div>
            ))}
          </div>
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
      </React.Fragment>
    );
  }
}

export default withRouter(Summary);
