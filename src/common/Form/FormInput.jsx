import { useField } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const FormInput = ({ clicked, errorMessage, label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  useEffect(() => {
    const message = errorMessage
      ?.slice(errorMessage.indexOf("/") + 1, errorMessage.indexOf(")"))
      .replaceAll("-", " ");
    helpers.setError(message);
  }, [errorMessage, clicked]);

  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
};

export default FormInput;
