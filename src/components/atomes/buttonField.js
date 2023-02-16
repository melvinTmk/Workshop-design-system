import React from "react";

const ButtonField = (props) => {
  if (props.name === "cancel") {
    return (
      <button
      className="typography-btn button-form btn-cancel"
      type="button" name={props.name}
    >
      {props.text} 
    </button>
    );
  }
  return (
    <button
      className="typography-btn button-form"
      type="button" 
    >
      {props.text}
    </button>
  );
};

export default ButtonField;
