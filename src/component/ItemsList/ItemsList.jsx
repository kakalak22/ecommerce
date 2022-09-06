import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../store/Context";
import "./ItemsList.scss";
import TwoThumbs from "./TwoThumbs";
import ReactStars from "react-rating-stars-component";
import { IoStarOutline, IoStarHalfOutline, IoStar } from "react-icons/io5";
import SingleItem from "../SingleItem/SingleItem";

import * as services from "../../services/fakeItemsService";
import { HashLoader, PacmanLoader } from "react-spinners";
import { BsFilterLeft } from "react-icons/bs";
import Sweetpagination from "sweetpagination";
import { actions, useStore } from "../../store";
import { useSearchParams } from "react-router-dom";

const ItemsList = () => {
  const [search, setSearch] = useSearchParams();
  const [rating, setRating] = useState();
  const [items, setItems] = useState([]);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [state, dispatch] = useStore();
  const { priceRange } = state;
  const category = [
    { name: "PC", id: "pc" },
    { name: "Card", id: "card" },
    { name: "PSU", id: "psu" },
    { name: "VGA", id: "vga" },
  ];

  const starConfig = {
    count: 5,
    isHalf: false,
    size: 25,
    activeColor: "black",
    emptyIcon: <IoStarOutline />,
    halfIcon: <IoStarHalfOutline />,
    filledIcon: <IoStar />,
    edit: true,
    onChange: (newValue) => {
      search.set("rating", newValue);
    },
  };

  const handleChecked = (e) => {
    let category = search.get("category")?.split(",") || [];

    if (e.target.checked) {
      category.push(e.target.value);
    } else {
      category = category.filter((cate) => cate !== e.target.value);
    }

    if (category.length === 0) {
      search.delete("category");
    } else {
      search.set("category", category.join(","));
    }
  };

  const handleSubmit = () => {
    search.set("price", priceRange.join(","));
    setSearch(search);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPageData]);

  useEffect(() => {
    const items = services.getItems();
    setItems(items);
  }, []);

  return (
    <div className="itemslist">
      <div className="itemslist__inner">
        <div className={isFilter ? "filter filter-active" : "filter"}>
          <div
            className={
              isFilter ? "filter__inner filter__inner-active" : "filter__inner"
            }
          >
            <div className="category-filter">
              <h4>Category</h4>
              <ul>
                {category.map((cate, index) => (
                  <li key={index}>
                    <label className="container">
                      {cate.name}
                      <input
                        type="checkbox"
                        value={cate.id}
                        onChange={handleChecked}
                      />
                      <span className="checkmark"></span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div className="price-filter">
              <h4>Price Range</h4>
              <div className="price-range-container">
                <input
                  type="number"
                  id="from"
                  value={priceRange[0]}
                  onChange={(event) =>
                    dispatch(
                      actions.handleInputPriceRangeChange({
                        event: event,
                        inputId: "from",
                      })
                    )
                  }
                />
                <span>-</span>
                <input
                  type="number"
                  id="to"
                  value={priceRange[1]}
                  onChange={(event) =>
                    dispatch(
                      actions.handleInputPriceRangeChange({
                        event: event,
                        inputId: "to",
                      })
                    )
                  }
                />
              </div>
              <TwoThumbs />
            </div>
            <div className="rate-filter">
              <h4>Rating</h4>
              <ReactStars {...starConfig} value={5} />
            </div>
            <div className="button-container">
              <button onClick={handleSubmit}>Apply</button>
              <button>Reset</button>
            </div>
          </div>
          <div
            onClick={() => setIsFilter(false)}
            className={
              isFilter ? "filter__right filter__right-active" : "filter__right"
            }
          ></div>
        </div>
        <div className="list">
          <div
            className="filter-button-container"
            onClick={() => setIsFilter(true)}
          >
            <BsFilterLeft />
            <span> Filter</span>
          </div>
          {currentPageData.length > 0 ? (
            <div className="items-container">
              {currentPageData.map((item, index) => (
                <SingleItem key={index} item={item} />
              ))}
            </div>
          ) : (
            <div className="loading-container">
              <HashLoader color="#ccc8c8" />
            </div>
          )}
          <Sweetpagination
            currentPageData={setCurrentPageData}
            getData={items}
            dataPerPage={6}
            navigation={true}
            getStyle={"style-custom"}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
