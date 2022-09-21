import React from "react";
import { Formik } from "formik";

import "./Checkout.scss";
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__inner">
        <div className="checkout__inner__left">
          <Formik
            initialValues={{
              name: "",
              province: null,
            }}
          >
            <CheckoutForm />
          </Formik>
        </div>
        <div className="checkout__inner__right"></div>
      </div>
    </div>
  );
};

export default Checkout;
