import React from "react";
import { Formik, useField, useFormikContext } from "formik";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../../firebase-config";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
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

const Create = () => {
  const handleRegister = (values, actions) => {
    try {
      createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, actions) => handleRegister(values, actions)}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <MyTextInput label="email" name="email" type="email" />
            <MyTextInput label="password" name="password" type="password" />
            <button type="submit"> Register </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Create;
