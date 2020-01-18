import React from "react";
import FormButton from "./FormButton";
import CategoryDisplay from "./CategoryDisplay";

//might have to make this like a MasterForm component and then have app elsewhere for structure's sake
class MasterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "", //session user name
      selectedChoices: [], //growing array of selected nominees (objs)
      step: 5 //which step of the form (24/25 total)
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChoicesSubmit = this.handleChoicesSubmit.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.numPages = 25;
  }
  handleSelect(event) {}
  previousStep(event) {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }
  nextStep(event) {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }
  showPrevButton() {
    const { step } = this.state;
    if (step > 0 && step <= this.numPages)
      return (
        <button id="prev-button" onClick={() => this.previousStep()}>
          Previous
        </button>
      );
  }
  showNextButton() {
    const { step } = this.state;
    if (step >= 0 && step < this.numPages)
      return (
        <button id="next-button" onClick={() => this.nextStep()}>
          Next
        </button>
      );
  }
  showSubmitButton() {
    const { step } = this.state;
    if (step === this.numPages - 1) return <button></button>;
  }
  handleChoicesSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { step } = this.state;
    const { categories } = this.props;
    return categories ? (
      <div id="mount">
        <h1 id="masterform-heading">Test</h1>
        <CategoryDisplay category={categories[step]} />
        <p>{step + 1}</p>
        <div id="btn-display">
          {this.showPrevButton()}
          {this.showNextButton()}
          {this.showSubmitButton()}
        </div>
      </div>
    ) : null;
  }
}

export default MasterForm;
