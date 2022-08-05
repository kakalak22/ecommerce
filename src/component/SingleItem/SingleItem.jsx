import React, { useState } from "react";
import "./SingleItem.scss";

import { BsArrowDownUp } from "react-icons/bs";
import { AiOutlineStar, AiOutlineEye } from "react-icons/ai";
import { useGlobalContext } from "../../Context";

const SingleItem = ({ item }) => {
  const { image1, image2, name, price, discountedPrice, id } = item;
  const {
    openDropdown,
    closeDropdown,
    handleLocationChange,
    handleSideNameChange,
    openModal,
    handleSingleItemChange,
    handleCart,
    openCart,
  } = useGlobalContext();

  const handleSidenameLocation = (event) => {
    const { left, right, top } = event.target.getBoundingClientRect();
    const dropDownCenter = left - 60;
    const subMenuBottom = top + window.pageYOffset;
    console.log(left, right, top);
    handleLocationChange(dropDownCenter, subMenuBottom);
    openDropdown();
  };

  return (
    <div className="item">
      <div className="image__container">
        <div className="button__container">
          <div className="button__top">
            <div className="button__top__inner">
              <button
                onMouseEnter={(event) => {
                  handleSidenameLocation(event);
                  handleSideNameChange("Wish List");
                }}
                onMouseLeave={closeDropdown}
              >
                <AiOutlineStar />
              </button>
              <button
                onMouseEnter={(event) => {
                  handleSidenameLocation(event);
                  handleSideNameChange("Compare");
                }}
                onMouseLeave={closeDropdown}
              >
                <BsArrowDownUp />
              </button>
              <button
                onMouseEnter={(event) => {
                  handleSidenameLocation(event);
                  handleSideNameChange("Quick View");
                }}
                onMouseLeave={closeDropdown}
                onClick={() => {
                  openModal();
                  handleSingleItemChange(item);
                }}
              >
                <AiOutlineEye />
              </button>
            </div>
          </div>
          <div className="button__bottom">
            <button
              onClick={() => {
                handleCart(id, item);
                openCart();
              }}
            >
              Quick Add
            </button>
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
