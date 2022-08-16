import React from "react";
import { useGlobalContext } from "../../Context";
import "./ItemsList.scss";
import TwoThumbs from "./TwoThumbs";

const ItemsList = () => {
  const { priceRange, handleInputPriceRangeChange } = useGlobalContext();
  return (
    <div className="itemslist">
      <div className="itemslist__inner">
        <div className="filter">
          <div className="filter__inner">
            <div className="category-filter">
              <h4>Category</h4>
              <ul>
                <li>
                  <label class="container">
                    One
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container">
                    Two
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container">
                    Three
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container">
                    Four
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container">
                    One
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
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
                    handleInputPriceRangeChange(event, "from")
                  }
                />
                <span>-</span>
                <input
                  type="number"
                  id="to"
                  value={priceRange[1]}
                  onChange={(event) => handleInputPriceRangeChange(event, "to")}
                />
              </div>
              <TwoThumbs />
            </div>
            <div className="rate-filter">
              <h4>Rating</h4>
            </div>
          </div>
        </div>
        <div className="list"></div>
      </div>
    </div>
  );
};

export default ItemsList;
