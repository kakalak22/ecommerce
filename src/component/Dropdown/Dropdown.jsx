import React from "react";
import { useEffect, useRef } from "react";
import "./Dropdown.scss";

const Dropdown = ({ isDropdownOpen, location, name, nameOfClass }) => {
  const dropdown = useRef(null);

  useEffect(() => {
    dropdown.current.style.left = `${location.left}px`;
    dropdown.current.style.top = `${location.top}px`;
    if (location.left === null) {
      dropdown.current.style.left = "-50px";
      dropdown.current.style.top = "";
    }
  }, [isDropdownOpen, location]);

  return (
    <div
      className={isDropdownOpen ? `${nameOfClass} show` : nameOfClass}
      ref={dropdown}
    >
      {name}
    </div>
  );
};

export default Dropdown;
