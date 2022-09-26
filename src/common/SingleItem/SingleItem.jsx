import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore, actions } from "../../store";
import { numberWithDot } from "../../utils/numberWithDot";

import "./SingleItem.scss";

import { BsArrowDownUp } from "react-icons/bs";
import { AiOutlineStar, AiOutlineEye } from "react-icons/ai";

const SingleItem = ({ item }) => {
  const [state, dispatch] = useStore();

  const { image1, image2, name, price, discountedPrice, id } = item;

  const handleSidenameLocation = (event) => {
    const { left, right, top } = event.target.getBoundingClientRect();
    const dropDownCenter = left - 60;
    const subMenuBottom = top + window.pageYOffset;
    dispatch(
      actions.handleLocationChange({ left: dropDownCenter, top: subMenuBottom })
    );
    dispatch(actions.openDropdown());
  };
  let navigate = useNavigate();
  return (
    <div className="item">
      <div
        className="image__container"
        onClick={() => navigate(`/products/${id}`)}
      >
        <div className="image">
          <img className="top" src={image1} alt="" />
          <img className="bottom" src={image2} alt="" />
        </div>
      </div>
      <div className="button__top">
        <div className="button__top__inner">
          <button
            onMouseEnter={(event) => {
              handleSidenameLocation(event);
              dispatch(actions.handleSideNameChange("Wish List"));
            }}
            onMouseLeave={() => dispatch(actions.closeDropdown())}
          >
            <AiOutlineStar />
          </button>
          <button
            onMouseEnter={(event) => {
              handleSidenameLocation(event);
              dispatch(actions.handleSideNameChange("Compare"));
            }}
            onMouseLeave={() => dispatch(actions.closeDropdown())}
          >
            <BsArrowDownUp />
          </button>
          <button
            onMouseEnter={(event) => {
              handleSidenameLocation(event);
              dispatch(actions.handleSideNameChange("Quick View"));
            }}
            onMouseLeave={() => dispatch(actions.closeDropdown())}
            onClick={() => {
              dispatch(actions.openModal());
              dispatch(actions.handleSingleItemChange(item));
            }}
          >
            <AiOutlineEye />
          </button>
        </div>
      </div>
      <div className="button__bottom">
        <button
          onClick={() => {
            dispatch(
              actions.handleCartItems({ id: id, item: item, quantity: 1 })
            );
            dispatch(actions.openCart());
          }}
        >
          Quick Add
        </button>
      </div>
      <div className="item__content">
        <div className="title">
          <h3>{name.substring(0, 48).concat("...")}</h3>
        </div>
        <div className="price">
          {price === discountedPrice ? (
            <p>{numberWithDot(discountedPrice)}đ</p>
          ) : (
            <p>
              <span>{numberWithDot(price)}đ</span>{" "}
              {numberWithDot(discountedPrice)}đ
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
