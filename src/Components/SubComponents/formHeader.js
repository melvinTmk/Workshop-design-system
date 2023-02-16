import React from "react";

const FormHeader = (props) => {
  return (
    <div className="form-header">
      <h1 className="typography-heading-1">{props.title}</h1>
      <p className="typography-paragraph">
        {props.subtitle}
        <span className="typography-link subtitle-link">
          <a>{props.subtitleLink}</a>
        </span>
      </p>
    </div>
  );
};

export default FormHeader;
