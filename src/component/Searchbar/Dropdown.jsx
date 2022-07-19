import React from "react";
import { useEffect, useRef } from "react";
import "./Searchbar.scss";

const Dropdown = ({ isDropdownOpen, location, name }) => {
  const dropdown = useRef(null);

  useEffect(() => {
    dropdown.current.style.left = `${location.left}px`;
    dropdown.current.style.top = `${location.top}px`;
  }, [isDropdownOpen]);

  return (
    <div
      className={isDropdownOpen ? "dropdown show" : "dropdown"}
      ref={dropdown}
    >
      {name}
    </div>
  );
};

export default Dropdown;
