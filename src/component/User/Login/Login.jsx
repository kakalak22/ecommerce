import React, { useState } from "react";
import { Formik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import FormInput from "../../../common/Form/FormInput";
import Button from "../../../common/Form/Button/Button";
import { useNavigate } from "react-router";
import "../User.scss";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [clicked, setClicked] = useState(0);
  const navigate = useNavigate();
  const handleRegister = (values, actions) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        if (userCredential) {
          toast.success("Login successful");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setClicked(clicked + 1);
      });
  };

  return (
    <React.Fragment>
      <div className="user-wrapper">
        <div className="user-wrapper__inner">
          <h1>Login</h1>
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
                  clicked={clicked}
                />
                <p>
                  Doesn't have account yet?{" "}
                  <Link to="/user/register">Register</Link>
                </p>
                <div className="button-container">
                  <Button buttonStyle="primary" type="submit" name="Login" />
                  <Button
                    buttonStyle="secondary"
                    name="Register"
                    onClick={() => navigate("/user/register")}
                  />
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
