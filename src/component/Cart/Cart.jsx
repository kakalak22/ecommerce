import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import * as services from "../../services/fakeItemsService";

import "./Cart.scss";
import Pc from "../../asset/images/hero.jpg";
import { useGlobalContext } from "../../store/Context";
import { useStore, actions } from "../../store";

const Cart = () => {
  const [state, dispatch] = useStore();
  const { isCartOpen, cart } = state;

  const {
    closeCart,
    calculateTotalSub,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleQuantityInputChange,
    removeItemInCart,
  } = useGlobalContext();
  const cartRef = useRef(null);
  const cart_right = useRef(null);
  const total = calculateTotalSub();

  const handleCartClose = () => {
    dispatch(actions.closeCart());
  };

  useEffect(() => {
    setTimeout(() => {
      isCartOpen && cart_right.current.classList.add("cart-animation");
    }, 50);
  }, [isCartOpen]);

  return (
    <div
      className={
        isCartOpen
          ? "cart__container cart__container__active"
          : "cart__container"
      }
      ref={cartRef}
    >
      <div
        onClick={handleCartClose}
        className={isCartOpen ? "cart__left cart__left__active" : "cart__left"}
      ></div>
      <div
        ref={cart_right}
        className={
          isCartOpen ? "cart__right cart__right__active" : "cart__right"
        }
      >
        <h2>Shopping Cart</h2>
        <AiOutlineClose onClick={handleCartClose} />

        <div className="cart__items">
          {cart.map(({ item, quantity }) => (
            <div className="cart__item" key={item.id}>
              <div className="cart__item__left">
                <img src={item.image1} alt="" />
              </div>
              <div className="cart__item__right">
                <h3>{item.name}</h3>
                <p>{item.discountedPrice}$</p>
                <div className="quantity__control">
                  <div className="quatity">
                    <button
                      onClick={() =>
                        dispatch(actions.decreaseQuantity(item.id))
                      }
                    >
                      -
                    </button>
                    <input
                      type="text"
                      onChange={(event) =>
                        handleQuantityInputChange(event, item.id)
                      }
                      value={quantity}
                    />
                    <button
                      onClick={() =>
                        dispatch(actions.increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>
                  <div
                    className="remove"
                    onClick={() => removeItemInCart(item.id)}
                  >
                    <p>Remove</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cart__bottom">
          <div className="subtotal">
            <p>Subtotal:</p>
            <span>{total}$</span>
          </div>
          <button> Check Out </button>
          <a href="#">View Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
