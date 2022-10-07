import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { useStore, actions } from "../../store";
import * as categoryServices from "../../services/fakeCategoryService";
import * as itemServices from "../../services/fakeItemsService";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import "./Submenu.scss";
import { useEffect } from "react";

const Submenu = () => {
  const [state, dispatch] = useStore();
  const { isSubmenuOpen } = state;
  const [categories, setCategories] = useState();
  const [cateId, setCateId] = useState("pc");
  const [itemsByCateId, setItemsByCateId] = useState();
  const navigate = useNavigate();
  const urlLocation = useLocation();
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    setCategories(categoryServices.getCategories);
  }, []);

  useEffect(() => {
    if (cateId) setItemsByCateId(itemServices.getItemsByCateId(cateId));
    console.log(itemsByCateId);
    console.log(cateId);
  }, [cateId]);

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
  };

  return (
    <div
      onMouseLeave={() => dispatch(actions.closeSubmenu())}
      className={isSubmenuOpen ? "submenu submenu__active" : "submenu "}
    >
      <div className="submenu__inner">
        <div className="submenu__grid">
          <div className="item1">
            <ul className="list-1">
              {categories &&
                categories.map((cate) => (
                  <li
                    onMouseEnter={() => setCateId(cate.id)}
                    onClick={() => handleCategoryView(cate.id)}
                    key={cate.id}
                  >
                    {cate.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="item2">
            <ul className="list-1">
              {itemsByCateId &&
                itemsByCateId.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => navigate(`/products/${item.id}`)}
                  >
                    {item.name}
                  </li>
                ))}
            </ul>
          </div>
          {/*<div className="item3">
            <ul className="list-1">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="item4">
            <ul className="list-1">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="item5">
            <ul className="list-1">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          <div className="item6">
            <ul className="list-1">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Submenu;
