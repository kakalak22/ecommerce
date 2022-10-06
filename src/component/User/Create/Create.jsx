import React from "react";
import { Formik, useField, useFormikContext } from "formik";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../../firebase-config";
import "../User.scss";
import Button from "../../../common/Form/Button/Button";
import FormInput from "../../../common/Form/FormInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Create = () => {
  const [errorMessage, setErrorMessage] = useState();

  const handleRegister = (values, actions) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(toast.success("Account registered successful"))
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <React.Fragment>
      <div className="user-wrapper">
        <div className="user-wrapper__inner">
          <h1>Register</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values, actions) => handleRegister(values, actions)}
          >
            {(props) => (
              <form className="user-form" onSubmit={props.handleSubmit}>
                <FormInput label="Email" name="email" type="email" />
                <FormInput
                  label="Password"
                  name="password"
                  type="password"
                  errorMessage={errorMessage}
                />
                <p>
                  Already have password ? <Link to="/user/login">Login</Link>
                </p>
                <div className="button-container">
                  <Button type="submit" buttonStyle="primary" name="Register" />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Create;
