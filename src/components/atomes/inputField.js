import React from "react";

const InputField = (props) => {
  if (props.type === "password") {
    return (
      <div className="mb-4">
        <label
          className="typography-paragraph label-form"
          for="username"
        >
          {props.label}
        </label>
        <input
          className="input-form"
          id={props.id}
          type="password"
          placeholder={props.placeholder}
        />
      </div>
    );
  } else if (props.type === "required") {
    return (
      <div className="mb-4">
        <label
          className="typography-paragraph label-form"
          for="username"
        >
          {props.label}
        </label>

        <input
          className="input-form"
          id={props.id}
          type="text"
          placeholder={props.placeholder}
          required
        />
      </div>
    );
  }
  return (
    <div className="mb-4">
      <label
        className="typography-paragraph label-form"
        for="username"
      >
        {props.label}
      </label>
      <input
        className="input-form"
        id={props.id}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
