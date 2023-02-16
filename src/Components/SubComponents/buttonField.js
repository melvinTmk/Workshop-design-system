import React from "react";

const ButtonField = (props) => {
  if (props.name == "cancel") {
    return (
      <button
      className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline button-form btn-cancel"
      type="button" name={props.name}
    >
      {props.text} 
    </button>
    );
  }
  return (
    <button
      className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline button-form"
      type="button" 
    >
      {props.text}
    </button>
  );
};

export default ButtonField;
