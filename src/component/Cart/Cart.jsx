import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import "./Cart.scss";
import Pc from "../../asset/images/hero.jpg";
import { useGlobalContext } from "../../Context";

const Cart = () => {
  const { isCartOpen, closeCart } = useGlobalContext();

  return (
    <div className="cart__container">
      <div
        className={isCartOpen ? "cart__left cart__left__active" : "cart__left"}
      ></div>
      <div
        className={
          isCartOpen ? "cart__right cart__right__active" : "cart__right"
        }
      >
        <h2>Shopping Cart</h2>
        <AiOutlineClose onClick={closeCart} />

        <div className="cart__items">
          <div className="cart__item">
            <div className="cart__item__left">
              <img src={Pc} alt="" />
            </div>
            <div className="cart__item__right">
              <h3>Highend PC</h3>
              <p>$59</p>
              <div className="quantity__control">
                <div className="quatity">
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
                </div>
                <div className="remove">
                  <p>Remove</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item__left">
              <img src={Pc} alt="" />
            </div>
            <div className="cart__item__right">
              <h3>Highend PC</h3>
              <p>$59</p>
              <div className="quantity__control">
                <div className="quatity">
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
                </div>
                <div className="remove">
                  <p>Remove</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item__left">
              <img src={Pc} alt="" />
            </div>
            <div className="cart__item__right">
              <h3>Highend PC</h3>
              <p>$59</p>
              <div className="quantity__control">
                <div className="quatity">
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
                </div>
                <div className="remove">
                  <p>Remove</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item__left">
              <img src={Pc} alt="" />
            </div>
            <div className="cart__item__right">
              <h3>Highend PC</h3>
              <p>$59</p>
              <div className="quantity__control">
                <div className="quatity">
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
                </div>
                <div className="remove">
                  <p>Remove</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cart__item">
            <div className="cart__item__left">
              <img src={Pc} alt="" />
            </div>
            <div className="cart__item__right">
              <h3>Highend PC</h3>
              <p>$59</p>
              <div className="quantity__control">
                <div className="quatity">
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
                </div>
                <div className="remove">
                  <p>Remove</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart__bottom">
          <button> Check Out </button>
          <a href="#">View Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
