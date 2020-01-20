import React from "react";
import FormButton from "./FormButton";
import CategoryDisplay from "./CategoryDisplay";

//might have to make this like a MasterForm component and then have app elsewhere for structure's sake
class MasterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "", //session user name
      selectedChoices: Array(24).fill(null), //growing array of selected nominees (objs)
      step: 0 //which step of the form (24/25 total)
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.numPages = 25;
  }
  handleSelect(nomineeId) {
    const { step, selectedChoices } = this.state;
    const newChoices = selectedChoices;
    newChoices[step] = nomineeId;
    this.setState({
      selectedChoices: newChoices
    });
  }
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

  render() {
    const { step, selectedChoices } = this.state;
    const { categories } = this.props;
    return categories ? (
      <div id="mount">
        {console.log(this.state.selectedChoices)}
        <h1 id="masterform-heading">OSCARS SURVEY</h1>
        {step + 1 !== this.numPages ? (
          <h3>
            {step + 1} of {this.numPages - 1}
          </h3>
        ) : (
          <h5>done son</h5>
        )}
        <CategoryDisplay
          category={categories[step]}
          handleSelect={this.handleSelect}
          selectedChoices={selectedChoices}
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
