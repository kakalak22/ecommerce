import React from "react";
import { Formik, useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import isEmailValidator from "validator/lib/isEmail";

import "./Checkout.scss";
import CheckoutForm from "./CheckoutForm";
import { useStore } from "../../store";
import { useState } from "react";
import CartItems from "./CartDetails/CartItems";
import SubTotal from "./CartDetails/SubTotal";

const Checkout = () => {
  const [formData, setFormData] = useState([]);
  const [state] = useStore();
  const { cart, total } = state;

  const handleFormData = (data) => {
    setFormData(data);
  };

  return (
    <div className="checkout">
      <div className="checkout__inner">
        <div className="checkout__inner__left">
          <Formik
            initialValues={{
              name: "",
              email: "",
              province: null,
              district: null,
              ward: null,
              address: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, "Must be between 5 and 15 characters")
                .min(5, "Must be between 5 and 15 characters")
                .required("Required"),
              email: Yup.string()
                .required("Required")
                .test(
                  "is-valid",
                  (message) => `${message.path} is invalid`,
                  (value) =>
                    value
                      ? isEmailValidator(value)
                      : new Yup.ValidationError("Invalid email")
                ),
              address: Yup.string().required("Required"),
              province: Yup.object().nullable().required("Required"),
              district: Yup.object().nullable().required("Required"),
              ward: Yup.object().nullable().required("Required"),
            })}
            validateOnChange={true}
          >
            {({ handleReset }) => (
              <CheckoutForm
                onReset={handleReset}
                onFormDataChange={handleFormData}
              />
            )}
          </Formik>
        </div>
        <div className="checkout__inner__right">
          <CartItems cart={cart} />
          <SubTotal formData={formData} total={total} />
          <div className="total-container">
            <div>
              <p>Total</p>
              <p>555</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
