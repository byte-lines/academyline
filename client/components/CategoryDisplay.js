import React from 'react';
import NomineeDisplay from './NomineeDisplay';
import Custom11Display from './Custom11Display';
import Custom14Display from './Custom14Display';
import Custom15Display from './Custom15Display';
import Custom16Display from './Custom16Display';
import Custom22Display from './Custom22Display';
import Custom23Display from './Custom23Display';

const CategoryDisplay = props => {
  const { category, categories, choices, step, numPages } = props;
  const customSteps = [11, 14, 15, 16, 22, 23];
  let nominees = [];
  if (category && category.nominees) {
    nominees = category.nominees.sort((a, b) => a.id - b.id);
  }
  return category ? (
    <div id="survey-container">
      <div id="category-name-display">
        <h2 className="category-name">{category.name}</h2>
      </div>
      <div id="step-number">
        <h3>
          {step + 1}/{numPages - 1}
        </h3>
      </div>
      <div id="nominees-display">
        {nominees.map((nominee, idx) => {
          return step === 11 ? (
            <Custom11Display
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? 'selected' : ''}
              handleSelect={props.handleSelect}
            />
          ) : step === 14 ? (
            <Custom14Display
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? 'selected' : ''}
              handleSelect={props.handleSelect}
            />
          ) : step === 15 ? (
            <Custom15Display
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? 'selected' : ''}
              handleSelect={props.handleSelect}
            />
          ) : step === 16 ? (
            <Custom16Display
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? 'selected' : ''}
              handleSelect={props.handleSelect}
            />
          ) : step === 22 ? (
            <Custom22Display
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? 'selected' : ''}
              handleSelect={props.handleSelect}
            />
          ) : step === 23 ? (
            <Custom23Display
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? 'selected' : ''}
              handleSelect={props.handleSelect}
            />
          ) : (
            <NomineeDisplay
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? 'selected' : ''}
              handleSelect={props.handleSelect}
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default CategoryDisplay;
