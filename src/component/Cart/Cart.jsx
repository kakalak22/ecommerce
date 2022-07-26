import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./Cart.scss";
import { useStore, actions } from "../../store";
import { useNavigate } from "react-router-dom";
import { numberWithDot } from "../../utils/numberWithDot";

const Cart = () => {
  const [state, dispatch] = useStore();
  const { isCartOpen, cart, total } = state;
  const [isRemoveClicked, setIsRemoveClicked] = useState(false);
  const cartRef = useRef(null);
  const cart_right = useRef(null);
  const navigate = useNavigate();

  const getLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return JSON.parse(cart);
  };

  useEffect(() => {
    dispatch(actions.cartTotalSub());
    if (cart.length > 0 || isRemoveClicked) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const cart = getLocalStorage() || [];
    dispatch(actions.setCart(cart));
  }, []);

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
          {cart.length > 0 ? (
            cart.map(({ item, quantity }) => (
              <div className="cart__item" key={item.id}>
                <div className="cart__item__left">
                  <img src={item.image1} alt="" />
                </div>
                <div className="cart__item__right">
                  <h3>{item.name}</h3>
                  <p>{numberWithDot(item.discountedPrice)}đ</p>
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
                          dispatch(
                            actions.inputQuantity({
                              quantity: event.target.value,
                              id: item.id,
                            })
                          )
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
                      onClick={() => {
                        dispatch(actions.removeCartItem(item.id));
                        setIsRemoveClicked(true);
                      }}
                    >
                      <p>Remove</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>There is no items in cart</h3>
          )}
        </div>

        <div className="cart__bottom">
          <div className="subtotal">
            <p>Subtotal:</p>
            <span>{numberWithDot(total)}đ</span>
          </div>
          <button
            onClick={() => {
              navigate("/checkout");
              dispatch(actions.closeCart());
            }}
          >
            {" "}
            Check Out{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
