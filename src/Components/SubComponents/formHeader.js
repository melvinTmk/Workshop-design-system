import React from "react";

const FormHeader = (props) => {
  return (
    <div className="form-header">
      <h1>{props.title}</h1>
      <p>
        {props.subtitle}
        <span className="subtitle-link">
          <a>{props.subtitleLink}</a>
        </span>
      </p>
    </div>
  );
};

export default FormHeader;
