import React from "react";

const InputField = (props) => {
  if (props.type == "password") {
    return (
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 label-form"
          for="username"
        >
          {props.label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight input-form"
          id={props.id}
          type="password"
          placeholder={props.placeholder}
        />
      </div>
    );
  } else if (props.type == "required") {
    return (
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2 label-form"
          for="username"
        >
          {props.label}
        </label>

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-form"
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
        className="block text-gray-700 text-sm font-bold mb-2 label-form"
        for="username"
      >
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input-form"
        id={props.id}
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
