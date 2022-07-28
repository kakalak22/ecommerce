import React from "react";
import "./SingleItem.scss";

import {
  AiOutlineStar,
  AiOutlineShoppingCart,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";

const SingleItem = ({ part }) => {
  const { image1, image2, name, price, discountedPrice } = part;
  return (
    <div className="item">
      <div className="image__container">
        <div className="button__container">
          <div className="button__top">
            <div className="button__top__inner">
              <button>
                <AiOutlineStar />
              </button>
              <button>
                <AiOutlineStar />
              </button>
              <button>
                <AiOutlineStar />
              </button>
            </div>
          </div>
          <div className="button__bottom">
            <button>Quick Add</button>
          </div>
        </div>
        <div className="image">
          <img className="top" src={image1} alt="" />
          <img className="bottom" src={image2} alt="" />
        </div>
      </div>
      <div className="item__content">
        <div className="title">
          <h3>{name}</h3>
        </div>
        <div className="price">
          <p>
            <span>{price}$</span> {discountedPrice}$
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
