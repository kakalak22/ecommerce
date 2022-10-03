import React from "react";
import { Formik, useField, useFormikContext } from "formik";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase-config";
import { useEffect } from "react";

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

const Login = () => {
  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(user.uid);
          // ...
        } else {
          // User is signed out
          // ...
        }
      },
      []
    );
  }, []);
  const handleRegister = (values, actions) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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

export default Login;
