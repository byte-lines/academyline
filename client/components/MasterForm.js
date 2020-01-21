import React from 'react';
import axios from 'axios';
import CategoryDisplay from './CategoryDisplay';
import Summary from './Summary';

class MasterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '', //session user name
      choices: Array(24).fill(null), //growing array of selected nominees (objs)
      step: 0, //which step of the form (24/25 total)
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.numPages = 25;
  }

  async handleSubmit(userName, email) {
    console.log(userName, email);
    const { data } = await axios.post('/api/users', {
      choices: this.state.choices,
      userName,
      email,
    });
  }
  handleSelect(nomineeId) {
    const { step, choices } = this.state;
    const newChoices = choices;
    newChoices[step] = nomineeId;
    this.setState({
      choices: newChoices,
    });
  }
  previousStep() {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }
  nextStep() {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }
  showPrevButton() {
    const { step } = this.state;
    if (step > 0 && step <= this.numPages) {
      return (
        <button id="prev-button" onClick={() => this.previousStep()}>
          Previous
        </button>
      );
    }
  }
  showNextButton() {
    const { step } = this.state;
    if (step >= 0 && step < this.numPages) {
      return (
        <button id="next-button" onClick={() => this.nextStep()}>
          Next
        </button>
      );
    }
  }

  //Custom components for categories[11, 14, 16, 22, 23]

  render() {
    const { step, choices } = this.state;
    const { categories } = this.props;
    return categories ? (
      <div id="mount">
        <h1 id="masterform-heading">OSCARS SURVEY</h1>
        {step + 1 !== this.numPages ? (
          <h3>
            {step + 1} of {this.numPages - 1}
          </h3>
        ) : (
          <Summary
            choices={choices}
            categories={categories}
            handleSubmit={this.handleSubmit}
          />
        )}
        <CategoryDisplay
          category={categories[step]}
          handleSelect={this.handleSelect}
          choices={choices}
        />

        <div id="btn-display">
          {this.showPrevButton()}
          {this.showNextButton()}
        </div>
      </div>
    ) : null;
  }
}

export default MasterForm;
