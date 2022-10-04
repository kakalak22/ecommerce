import { useField } from "formik";
import React from "react";

const FormInput = ({ label, ...props }, errorMessage) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error || errorMessage}</div>
      ) : null}
    </React.Fragment>
  );
};

export default FormInput;
