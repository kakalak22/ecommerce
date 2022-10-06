import { signOut, updateProfile } from "firebase/auth";
import { Formik } from "formik";
import React from "react";
import Button from "../../common/Form/Button/Button";
import FormInput from "../../common/Form/FormInput";
import { auth } from "../../firebase-config";
import { useStore } from "../../store";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import "./User.scss";

const User = () => {
  const [state, dispatch] = useStore();
  const { user } = state;
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth)
      .then(toast.success("Log out successful"))
      .then(
        setTimeout(() => {
          navigate("/login");
        }, 2000)
      );
  };

  const handleUpdateProfile = (values, actions) => {
    updateProfile(auth.currentUser, {
      displayName: values.displayName,
    })
      .then(() => toast.success("Profile updated"))
      .catch((error) => console.log(error));
  };
  return (
    <React.Fragment>
      <div className="user-wrapper">
        <div className="user-wrapper__inner">
          <h1>User Profile</h1>
          <Formik
            initialValues={{
              email: user.email,
              displayName: user.displayName,
            }}
            onSubmit={(values, actions) => handleUpdateProfile(values, actions)}
          >
            {(props) => (
              <form className="user-form" onSubmit={props.handleSubmit}>
                <FormInput label="Email" name="email" type="email" />
                <FormInput
                  label="Display Name"
                  name="displayName"
                  type="text"
                />
                <FormInput label="Photo Url" name="photoUrl" type="text" />
                <Button type="submit" name="Update" />
                <Button type="reset" name="Log out" onClick={handleLogOut} />
              </form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;
