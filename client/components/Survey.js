import React from 'react';

import NomineeDisplay from './NomineeDisplay';

class Survey extends React.Component {
  constructor() {
    super();
    this.state = {
      step: 0,
    };

    this.changeStep = this.changeStep.bind(this);
  }

  changeStep(newStep) {
    this.setState({
      step: newStep,
    });
  }

  render() {
    const categories = this.props.categories || [];
    const { step } = this.state;
    return (
      <div id="survey">
        <NomineeDisplay category={categories[step] || {}} />
        <button
          type="button"
          onClick={() => this.changeStep(this.state.step - 1)}
        >
          back
        </button>
        <button
          type="button"
          onClick={() => this.changeStep(this.state.step + 1)}
        >
          next
        </button>
      </div>
    );
  }
}

export default Survey;
