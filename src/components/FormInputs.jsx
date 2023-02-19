import React from "react";
import "../styles/096 form-input.styles.scss";

const FormInputs = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor="dname"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInputs;
