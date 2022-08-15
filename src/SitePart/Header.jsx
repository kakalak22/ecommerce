import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Searchbar from "../component/Searchbar/Searchbar";
import Topbar from "../component/Topbar/Topbar";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <Topbar />
      <Searchbar />
      <Navbar />
      <Outlet />
    </React.Fragment>
  );
};

export default Header;
