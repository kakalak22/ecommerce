import React, { useState } from "react";
import "./Navbar.scss";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import Submenu from "../Submenu/Submenu";
import { useGlobalContext } from "../../Context";

const Navbar = () => {
  const { isSubmenuOpen, openSubmenu, closeSubmenu } = useGlobalContext();
  return (
    <React.Fragment>
      <div className="navbar" onMouseEnter={closeSubmenu}>
        <div className="navbar__inner">
          <ul>
            <li>
              <div onMouseEnter={openSubmenu}>
                <span>Home</span>
                <span>
                  {isSubmenuOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </span>
              </div>
            </li>
            <li>
              <div>
                <span>Shop</span>
                <span>
                  <RiArrowDownSLine />
                </span>
              </div>
            </li>
            <li>
              <div>
                <span>Products</span>
                <span>
                  <RiArrowDownSLine />
                </span>
              </div>
            </li>
            <li>
              <div>
                <span>Pages</span>
                <span>
                  <RiArrowDownSLine />
                </span>
              </div>
            </li>
            <li>
              <div>
                <span>Feature</span>
                <span>
                  <RiArrowDownSLine />
                </span>
              </div>
            </li>
            <li>
              <div>
                <span>Blog</span>
                <span>
                  <RiArrowDownSLine />
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <Submenu />
    </React.Fragment>
  );
};

export default Navbar;
