import React from "react";
import "./Navbar.scss";

import { useNavigate } from "react-router-dom";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import Submenu from "../Submenu/Submenu";
import { useStore, actions } from "../../store";

const Navbar = () => {
  const [state, dispatch] = useStore();
  const { isSubmenuOpen } = state;
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div
        className="navbar"
        onMouseEnter={() => dispatch(actions.closeSubmenu())}
      >
        <div className="navbar__inner">
          <ul>
            <li>
              <div onClick={() => navigate("/", { replace: true })}>
                <span>Home</span>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => dispatch(actions.openSubmenu())}
                onClick={() => navigate("/products", { replace: true })}
              >
                <span>Products</span>
                <span>
                  {isSubmenuOpen ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
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
