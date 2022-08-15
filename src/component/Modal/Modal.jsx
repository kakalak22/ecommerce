import React, { useEffect, useRef } from "react";
import "./Modal.scss";
import { useGlobalContext } from "../../Context";

import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ singleItem }) => {
  const { image1, image2, name, price, discountedPrice, id } = singleItem;
  const modal = useRef(null);
  const {
    isModalOpen,
    closeModal,
    handleCart,
    openCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    itemQuantity,
    handleQuantityInputChange,
  } = useGlobalContext();

  useEffect(() => {
    const height = window.pageYOffset;
    modal.current.style.top = `${height}px`;
  }, [isModalOpen]);

  return (
    <div className="modal__container" ref={modal}>
      1
      <div className="modal">
        <AiOutlineClose onClick={closeModal} />
        <div className="modal__left">
          <img src={image1} alt="" />
        </div>
        <div className="modal__right">
          <div className="modal__right__inner">
            <h2>{name}</h2>
            <div className="price">
              <p>
                {discountedPrice}$ {"  "}
                <span>{price}$</span>
              </p>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <a href="#">View Details</a>
            <div className="quantity__control">
              <div className="quatity">
                <button onClick={() => handleDecreaseQuantity(null)}>-</button>
                <input
                  type="number"
                  onChange={(event) => handleQuantityInputChange(event, null)}
                  value={itemQuantity}
                />
                <button onClick={() => handleIncreaseQuantity(null)}>+</button>
              </div>
              <button
                onClick={() => {
                  handleCart(id, singleItem, itemQuantity);
                  closeModal();
                  openCart();
                }}
              >
                {" "}
                Add to cart{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
