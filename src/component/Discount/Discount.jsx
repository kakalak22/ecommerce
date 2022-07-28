import React from "react";
import "./Discount.scss";

import Vga from "../../asset/images/collection/vga.png";

const Discount = () => {
  return (
    <div className="discount">
      <div className="discount__inner">
        <div className="discount__inner__content">
          <h2>Graphic Card </h2>
          <h2>Discount 20%</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
        </div>
        <div className="discount__inner__price">
          <span>50$</span>
          <span>50$</span>
          <button>buy now</button>
        </div>
        <div className="discount__inner__image">
          <img src={Vga} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
