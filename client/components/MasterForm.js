import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CategoryDisplay from './CategoryDisplay';

class MasterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      step: 0, //indicates which step of the form (24/25 total)
    };
    this.previousStep = this.previousStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.numPages = 25;
  }

  componentDidMount() {
    this.setState({
      step: +this.props.history.location.hash.slice(1) - 1,
    });
  }

  previousStep() {
    const { step } = this.state;
    this.props.history.push(`/survey#${step}`);
    this.setState({ step: step - 1 });
  }
  nextStep() {
    const { step } = this.state;
    if (step + 2 === this.numPages) {
      this.props.history.push('/summary');
    } else {
      this.props.history.push(`/survey#${step + 2}`);
      this.setState({ step: step + 1 });
    }
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
          <span>Prev </span>
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
          <span>Next </span>
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
        {step + 1 !== this.numPages ? (
          <div>
            <div id="btn-display">
              <div className="prev-button-container">
                {this.showPrevButton()}
              </div>
              <div className="next-button-container">
                {this.showNextButton()}
              </div>
            </div>
            <div id="step-number">
              <h3>
                {step + 1} of {this.numPages - 1}
              </h3>
            </div>
          </div>
        ) : (
          ''
        )}

        <CategoryDisplay
          category={categories[step]}
          handleSelect={nomineeId => this.props.handleSelect(step, nomineeId)}
          choices={choices}
          step={step}
          numPages={this.numPages}
        />
      </div>
    ) : null;
  }
}

export default withRouter(MasterForm);
