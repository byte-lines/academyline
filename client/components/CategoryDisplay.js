import React from "react";
import NomineeDisplay from "./NomineeDisplay";
import Custom11Display from "./Custom11Display";
import Summary from "./Summary";
// import Custom14Display from "./Custom14Display";

const CategoryDisplay = props => {
  const { category, categories, choices, step, numPages } = props;
  const customSteps = [11, 14, 15, 16, 22, 23];
  return category ? (
    <div id="survey-container">
      <div id="category-name-display">
        <h2 className="category-name">{category.name}</h2>
      </div>
      {/* <span id="middle-line"></span> */}
      <div id="nominees-display">
        {category.nominees.map((nominee, idx) => {
          return step === 11 ? (
            <Custom11Display
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? "selected" : ""}
              handleSelect={props.handleSelect}
            />
          ) : step === 14 ? (
            // <Custom14Display
            //   key={nominee.id}
            //   idx={idx}
            //   step={step}
            //   nominee={nominee}
            //   className={choices.includes(nominee.id) ? "selected" : ""}
            //   handleSelect={props.handleSelect}
            // />
            "suh"
          ) : step === 16 ? (
            // <Custom16Display
            //   key={nominee.id}
            //   idx={idx}
            //   step={step}
            //   nominee={nominee}
            //   className={choices.includes(nominee.id) ? "selected" : ""}
            //   handleSelect={props.handleSelect}
            // />
            "suhhh"
          ) : step === 22 ? (
            "22"
          ) : step === 23 ? (
            "23"
          ) : (
            <NomineeDisplay
              key={nominee.id}
              idx={idx}
              step={step}
              nominee={nominee}
              className={choices.includes(nominee.id) ? "selected" : ""}
              handleSelect={props.handleSelect}
            />
          );
        })}
      </div>
    </div>
  ) : null;
};

export default CategoryDisplay;
