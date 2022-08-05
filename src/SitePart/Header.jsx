import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Searchbar from "../component/Searchbar/Searchbar";
import Topbar from "../component/Topbar/Topbar";

const Header = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Searchbar />
      <Navbar />
    </React.Fragment>
  );
};

export default Header;
