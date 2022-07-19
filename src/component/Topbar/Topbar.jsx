import React from "react";
import "./Topbar.scss";

import { GrLocation } from "react-icons/gr";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__left">
          <AiOutlineInstagram />
          <AiOutlineFacebook />
          <AiOutlineTwitter />
        </div>
        <div className="topbar__right">
          <div className="topbar__location">
            <GrLocation />
            <span>Find a store</span>
          </div>
          <span>Language</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
