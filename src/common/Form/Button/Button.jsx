import React from "react";
import "./Button.scss";

const Button = ({ name, type }) => {
  return (
    <button
      className={type === "submit" ? "form-button-submit" : "form-button-reset"}
      type={type}
    >
      {name}
    </button>
  );
};

export default Button;
