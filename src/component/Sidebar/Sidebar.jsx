import React, { useState } from "react";
import "./Sidebar.scss";

import { GrNext } from "react-icons/gr";
import { AiOutlineArrowLeft, AiOutlineClose } from "react-icons/ai";
import { useStore, actions } from "../../store";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import * as cateServices from "../../services/fakeCategoryService";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { toast } from "react-toastify";

const SideBar = () => {
  const [state, dispatch] = useStore();
  const [categories, setCategories] = useState([]);
  const { isSidemenuOpen, user } = state;
  const [isSubmenuOfLinkOpen, setIsSubmenuOfLinkOpen] = useState(false);
  const navigate = useNavigate();
  const urlLocation = useLocation();
  const [search, setSearch] = useSearchParams();

  const handleCategoryView = (cateId) => {
    if (urlLocation.pathname === "/products") {
      const searchParamKeys = [];
      search.forEach((value, key) => {
        searchParamKeys.push(key);
      });
      searchParamKeys.forEach((key) => search.delete(key));
      dispatch(actions.handlePriceRange([0, 90000000]));
      document
        .querySelectorAll("input[type=checkbox]")
        .forEach((el) => (el.checked = false));
      search.set("categories", cateId);
      setSearch(search);
    } else {
      navigate("/products", {
        state: {
          cateId: cateId,
        },
      });
    }
    dispatch(actions.closeSidemenu());
    setIsSubmenuOfLinkOpen(false);
  };

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
          <div className="sidebar__link">
            {user?.email === "" ? (
              <Link
                to={"/user/login"}
                replace={true}
                onClick={() => dispatch(actions.closeSidemenu())}
              >
                Login
              </Link>
            ) : (
              <Link
                to={"/user"}
                replace={true}
                onClick={() => dispatch(actions.closeSidemenu())}
              >
                User
              </Link>
            )}
          </div>
          <div className="sidebar__link">
            {user?.email === "" ? (
              <Link
                to={"/user/register"}
                replace={true}
                onClick={() => dispatch(actions.closeSidemenu())}
              >
                Register
              </Link>
            ) : (
              <Link
                to={"/"}
                onClick={() => {
                  signOut(auth);
                  dispatch(actions.closeSidemenu());
                  toast.success("Log out successful");
                }}
              >
                Log out
              </Link>
            )}
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
            <p key={index} onClick={() => handleCategoryView(cate.id)}>
              {cate.name}
            </p>
          ))}
      </div>
    </React.Fragment>
  );
};

export default SideBar;
