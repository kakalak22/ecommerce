import React from "react";
import "./Button.scss";

const Button = ({ buttonStyle, name, type, onClick }) => {
  return (
    <button
      className={
        buttonStyle === "primary" ? "form-button-submit" : "form-button-reset"
      }
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
