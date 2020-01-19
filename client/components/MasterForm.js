import React from 'react';
import axios from 'axios';

import FormButton from './FormButton';
import CategoryDisplay from './NomineeDisplay';
import Summary from './Summary';

//might have to make this like a MasterForm component and then have app elsewhere for structure's sake
class MasterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '', //session user name
      choices: Array(24).map(() => null), //growing array of selected nominees (objs)
      step: 0, //which step of the form (24/25 total)
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.numPages = 25;
  }

  async handleSubmit(userName, email) {
    const { data } = await axios.post('/api/users', {
      choices: this.state.choices,
      userName,
      email,
    });
  }
  previousStep(event) {
    event.preventDefault();
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }
  nextStep(event) {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }
  showPrevButton() {
    const { step } = this.state;
    if (step > 1 && step <= this.numPages)
      return <FormButton id="prev-button" btnText="Previous" />;
  }
  showNextButton() {
    const { step } = this.state;
    if (step >= 1 && step < this.numPages)
      return <FormButton id="next-button" btnText="Next" />;
  }
  showSubmitButton() {
    const { step } = this.state;
    if (step === this.numPages) return <FormButton btnText="Submit" />;
  }

  render() {
    const { step, choices } = this.state;
    const { categories } = this.props;
    //categories here
    return categories ? (
      <div id="mount">
        <h1>test</h1>
        <CategoryDisplay category={categories[step]} />
        {step === 24 && (
          <Summary
            choices={choices}
            categories={categories}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    ) : null;
  }
}

export default MasterForm;
