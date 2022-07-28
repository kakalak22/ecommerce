import React from "react";
import "./Policy.scss";

import { FaShippingFast } from "react-icons/fa";
import { RiRefund2Line, RiCustomerService2Line } from "react-icons/ri";

const Policy = () => {
  return (
    <div className="policy">
      <div className="policy__inner">
        <div className="policy__inner__left">
          <span>
            <FaShippingFast />
          </span>
          <h2>Free Shipping</h2>
          <p>
            Get complimentary ground shipping on every order.Don’t love it? Send
            it back, on us.
          </p>
        </div>
        <div className="policy__inner__middle">
          <span>
            <RiCustomerService2Line />
          </span>
          <h2>Customer Service</h2>
          <p>Our customer service working 24/24 a day</p>
        </div>
        <div className="policy__inner__right">
          <span>
            <RiRefund2Line />
          </span>
          <h2>Money back guarantee</h2>
          <p>
            We believe getting dressed should be the easiest part of your day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
