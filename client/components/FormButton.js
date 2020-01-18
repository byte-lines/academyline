import React from "react";

const FormButton = props => {
  return (
    <div>
      <button
        id={props.btnText + "-button"}
        type={props.btnText === "Submit" ? "submit" : ""}
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default FormButton;
