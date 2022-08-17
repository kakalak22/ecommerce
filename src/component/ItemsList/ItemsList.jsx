import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../Context";
import "./ItemsList.scss";
import TwoThumbs from "./TwoThumbs";
import ReactStars from "react-rating-stars-component";
import { IoStarOutline, IoStarHalfOutline, IoStar } from "react-icons/io5";
import SingleItem from "../SingleItem/SingleItem";

import * as services from "../../services/fakeItemsService";

const ItemsList = () => {
  const { priceRange, handleInputPriceRangeChange } = useGlobalContext();
  const [items, setItems] = useState([]);

  const starConfig = {
    count: 5,
    isHalf: "true",
    size: 25,
    activeColor: "black",
    emptyIcon: <IoStarOutline />,
    halfIcon: <IoStarHalfOutline />,
    filledIcon: <IoStar />,
    edit: false,
  };

  useEffect(() => {
    const items = services.getItems();
    setItems(items);
  }, []);

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
              <ReactStars {...starConfig} value={5} />
              <ReactStars {...starConfig} value={4} />
              <ReactStars {...starConfig} value={3} />
              <ReactStars {...starConfig} value={2} />
              <ReactStars {...starConfig} value={1} />
            </div>
            <div className="button-container">
              <button>Apply</button>
              <button>Reset</button>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="items-container">
            {items.map((item, index) => (
              <SingleItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsList;
