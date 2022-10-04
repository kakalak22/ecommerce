import { updateProfile } from "firebase/auth";
import { Formik } from "formik";
import React from "react";
import Button from "../../common/Form/Button/Button";
import FormInput from "../../common/Form/FormInput";
import { auth } from "../../firebase-config";
import { useStore } from "../../store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./User.scss";

const User = () => {
  const [state, dispatch] = useStore();
  const { user } = state;

  const handleUpdateProfile = (values, actions) => {
    updateProfile(auth.currentUser, {
      displayName: values.displayName,
    })
      .then(() => toast("Profile updated"))
      .catch((error) => console.log(error));
  };
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
              </form>
            )}
          </Formik>
        </div>
      </div>
    </React.Fragment>
  );
};

export default User;
