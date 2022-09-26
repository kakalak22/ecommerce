import React from "react";
import "../../Checkout.scss";
import { useId } from "react";

const CartItems = ({ cart }) => {
  const id = useId();
  console.log(cart);
  return (
    <div className="items-container">
      {cart.length > 0 ? (
        cart.map(({ item, quantity }) => {
          return (
            <div className="item-container" key={id + item.id}>
              <div className="item-container__left">
                <div className="image" count={quantity}>
                  <img src={item.image1} />
                </div>
                <p>{item.name}</p>
              </div>
              <div className="item-container__right">
                <p>${item.price}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h2>There is no item in Cart</h2>
      )}
    </div>
  );
};

export default CartItems;
