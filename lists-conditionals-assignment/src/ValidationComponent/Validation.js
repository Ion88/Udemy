import React from "react";

const validation = (props) => {
  let validationMessage = "Text long enough";

  if (props.inputLength <= 5) {
    validationMessage = "Test too short";
  }

  return <div>{validationMessage}</div>;
};

export default validation;
