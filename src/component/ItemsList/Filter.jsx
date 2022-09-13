import React from "react";
import { actions, useStore } from "../../store";
import TwoThumbs from "./TwoThumbs";
import ReactStars from "react-rating-stars-component";
import { IoStarOutline, IoStarHalfOutline, IoStar } from "react-icons/io5";
import { useSearchParams, useLocation } from "react-router-dom";

import * as cateServices from "../../services/fakeCategoryService";
import { useRef } from "react";
import { useEffect } from "react";

const Filter = ({ isFilter, onFilter, onFilterApplied }) => {
  const [state, dispatch] = useStore();
  const { priceRange } = state;
  const [search, setSearch] = useSearchParams();
  const location = useLocation();
  const filterForm = useRef(null);

  const categories = cateServices.getCategories();

  const sortConditions = [
    { condition: "Price Ascending", id: "price_asc" },
    { condition: "Price Descending", id: "price_desc" },
    { condition: "Name Ascending", id: "name_asc" },
    { condition: "Name Descending", id: "name_desc" },
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

  const handleSubmit = () => {
    search.set("price", priceRange.join(","));
    setSearch(search);
  };

  const handleReset = (e) => {
    e.preventDefault();
    const searchParamKeys = [];
    search.forEach((value, key) => {
      searchParamKeys.push(key);
    });
    searchParamKeys.forEach((key) => search.delete(key));
    setSearch(search);
    dispatch(actions.handlePriceRange([0, 1000]));
    document
      .querySelectorAll("input[type=checkbox]")
      .forEach((el) => (el.checked = false));
  };

  const handleCheckboxChecked = (e) => {
    let categories = search.get("categories")?.split(",") || [];

    if (e.target.checked) {
      categories.push(e.target.value);
    } else {
      categories = categories.filter((cate) => cate !== e.target.value);
    }

    if (categories.length === 0) {
      search.delete("categories");
    } else {
      search.set("categories", categories.join(","));
    }
  };

  const handleSortCondition = (e) => {
    search.set("sortBy", e.target.value);
  };

  useEffect(() => {
    const searchQuery = location.state?.searchQuery || null;
    const categoryId = location.state?.cateId || null;
    if (searchQuery !== null) {
      search.set("search", searchQuery);
      setSearch(search);
      onFilterApplied(true);
    }

    if (categoryId !== null) {
      search.set("categories", categoryId);
      setSearch(search);
      onFilterApplied(true);
    }
  }, []);

  return (
    <div className={isFilter ? "filter filter-active" : "filter"}>
      <form
        ref={filterForm}
        className={
          isFilter ? "filter__inner filter__inner-active" : "filter__inner"
        }
      >
        <div className="category-filter">
          <h4>categories</h4>
          <ul>
            {categories.map((cate, index) => (
              <li key={index}>
                <label className="container">
                  {cate.name}
                  <input
                    type="checkbox"
                    value={cate.id}
                    onChange={handleCheckboxChecked}
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
        <div className="sort-by">
          <h4>Sort by</h4>
          {sortConditions.map(({ condition, id }) => (
            <label key={id} className="radio-container">
              <input
                type="radio"
                name="sort"
                value={id}
                onChange={handleSortCondition}
              />
              {condition}
              <span className="radio-checkmark"></span>
            </label>
          ))}
        </div>
        <div className="button-container">
          <button
            onClick={(e) => {
              e.preventDefault();

              onFilterApplied(true);
              handleSubmit();
            }}
          >
            Apply
          </button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </form>
      <div
        onClick={onFilter}
        className={
          isFilter ? "filter__right filter__right-active" : "filter__right"
        }
      ></div>
    </div>
  );
};

export default Filter;
