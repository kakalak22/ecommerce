import React, { useRef, useState } from "react";
import "./Sidebar.scss";

import { GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";

import { useGlobalContext } from "../../Context";

const SideBar = () => {
  const { isSidemenuOpen, closeSidemenu } = useGlobalContext();
  const [isSubmenuOfLinkOpen, setIsSubmenuOfLinkOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="sidebar__wrapper">
        <div className={isSidemenuOpen ? "sidebar sidebar__active" : "sidebar"}>
          <div className="sidebar__link">
            <a href="">Home</a>
            <GrNext onClick={() => setIsSubmenuOfLinkOpen(true)} />
          </div>
          <div className="sidebar__link">
            <a href="">Shop</a>
            <GrNext />
          </div>
          <div className="sidebar__link">
            <a href="">Product</a>
            <GrNext />
          </div>
          <div className="sidebar__link">
            <a href="">Page</a>
            <GrNext />
          </div>
          <div className="sidebar__link">
            <a href="">Feature</a>
            <GrNext />
          </div>
          <div className="sidebar__link">
            <a href="">Blog</a>
            <GrNext />
          </div>
        </div>
        <div
          onClick={closeSidemenu}
          className={
            isSidemenuOpen
              ? "sidebar__right sidebar__right__active"
              : "sidbar__right"
          }
        >
          {isSidemenuOpen && (
            <AiOutlineClose
              onClick={() => {
                closeSidemenu();
                setIsSubmenuOfLinkOpen(false);
              }}
            />
          )}
        </div>
      </div>
      <div
        className={
          isSubmenuOfLinkOpen
            ? "sidebar__link__submenu sidebar__link__submenu__active"
            : "sidebar__link__submenu"
        }
      >
        <span
          onClick={() => {
            setIsSubmenuOfLinkOpen(false);
          }}
        >
          <AiOutlineArrowLeft /> Back
        </span>
        <a href="">Category</a>
        <a href="">Category</a>
        <a href="">Category</a>
        <a href="">Category</a>
        <a href="">Category</a>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
