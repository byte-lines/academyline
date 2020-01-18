import React from "react";
import axios from "axios";
import FormButton from './FormButton'
import CategoryDisplay from './NomineeDisplay'

//might have to make this like a MasterForm component and then have app elsewhere for structure's sake
class MasterForm extends React.Component {
  constructor() {
    super();
    this.state = {
      user: "", //session user name
      selectedChoices: [], //growing array of selected nominees (objs)
      nominees: [], //all nominees? from db (eager loaded on categories)
      step: 0 //which step of the form (24/25 total)
    };
    this.handleChoicesSubmit = this.handleChoicesSubmit.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.numPages = 25
  }
  componentDidMount() {
    const categories = await axios.get('/api/categories');
    console.log(categories)
  }
  handleChoicesSubmit(event) {
    event.preventDefault()
  }
  previousStep(event) {
    event.preventDefault()
    const { step } = this.state
    this.setState({step: step - 1})
  }
  nextStep(event) {
    const { step } = this.state
    this.setState({step: step + 1})
  }
  showPrevButton() {
    const { step } = this.state;
    if (step > 1 && step <= this.numPages) return <FormButton id='prev-button' btnText='Previous' />
  }
  showNextButton() {
    const { step } = this.state;
    if (step >= 1 && step < this.numPages) return <FormButton id='next-button' btnText='Next' />
  }
  showSubmitButton() {
    const { step } = this.state;
    if (step === this.numPages) return <FormButton btnText='Submit' />
  }

  render() {
    const {step} = this.state
    //categories here
    return (
    <div id="mount">
      <h1>test</h1>
      <CategoryDisplay category={this.categories[step]}/>
    </div>
    );
  }
}

export default MasterForm;
