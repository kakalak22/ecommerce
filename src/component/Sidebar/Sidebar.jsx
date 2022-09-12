import React, { useRef, useState } from "react";
import "./Sidebar.scss";

import { GrNext, GrPrevious } from "react-icons/gr";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { useStore, actions } from "../../store";
import { Link, useNavigate } from "react-router-dom";
import * as cateServices from "../../services/fakeCategoryService";
import { useEffect } from "react";

const SideBar = () => {
  const [state, dispatch] = useStore();
  const [categories, setCategories] = useState([]);
  const { isSidemenuOpen } = state;
  const [isSubmenuOfLinkOpen, setIsSubmenuOfLinkOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const newCategories = cateServices.getCategories();
    setCategories(newCategories);
  }, []);

  return (
    <React.Fragment>
      <div className="sidebar__wrapper">
        <div className={isSidemenuOpen ? "sidebar sidebar__active" : "sidebar"}>
          <div className="sidebar__link">
            <Link
              to={"/"}
              replace={true}
              onClick={() => dispatch(actions.closeSidemenu())}
            >
              Home
            </Link>
          </div>
          <div className="sidebar__link">
            <Link
              to={"/products"}
              replace={true}
              onClick={() => dispatch(actions.closeSidemenu())}
            >
              Products
            </Link>
            <GrNext onClick={() => setIsSubmenuOfLinkOpen(true)} />
          </div>
        </div>
        <div
          onClick={() => dispatch(actions.closeSidemenu())}
          className={
            isSidemenuOpen
              ? "sidebar__right sidebar__right__active"
              : "sidbar__right"
          }
        >
          {isSidemenuOpen && (
            <AiOutlineClose
              onClick={() => {
                dispatch(actions.closeSidemenu());
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
        {categories.length > 0 &&
          categories.map((cate, index) => (
            <p
              key={index}
              onClick={() => {
                navigate("/products", {
                  state: {
                    cateId: cate.id,
                  },
                });
                dispatch(actions.closeSidemenu());
                setIsSubmenuOfLinkOpen(false);
              }}
            >
              {cate.name}
            </p>
          ))}
      </div>
    </React.Fragment>
  );
};

export default SideBar;
