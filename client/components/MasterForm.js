import React from 'react';
import axios from 'axios';
import CategoryDisplay from './CategoryDisplay';
import Summary from './Summary';

class MasterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 0, //which step of the form (24/25 total)
    };

    this.previousStep = this.previousStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.numPages = 25;
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
        <button
          id="prev-button"
          className="form-button"
          onClick={() => this.previousStep()}
        >
          &#8592;
        </button>
      );
    }
  }
  showNextButton() {
    const { step } = this.state;
    if (step >= 0 && step < this.numPages) {
      return (
        <button
          id="next-button"
          className="form-button"
          onClick={() => this.nextStep()}
        >
          &#8594;
        </button>
      );
    }
  }

  //Custom components for categories[11, 14, 16, 22, 23]

  render() {
    const { step } = this.state;
    const { categories, choices } = this.props;
    return categories ? (
      <div id="mount">
        {/* <h1 id="masterform-heading"></h1> */}

        <CategoryDisplay
          category={categories[step]}
          handleSelect={nomineeId => this.props.handleSelect(step, nomineeId)}
          choices={choices}
        />
        {step + 1 !== this.numPages ? (
          <h3>
            {step + 1} of {this.numPages - 1}
          </h3>
        ) : (
          <Summary
            choices={choices}
            categories={categories}
            handleSubmit={this.props.handleSubmit}
          />
        )}

        <div id="btn-display">
          {this.showPrevButton()}
          {this.showNextButton()}
        </div>
      </div>
    ) : null;
  }
}

export default MasterForm;
