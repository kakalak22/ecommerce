import React from "react";
import { Formik, useFormik, useFormikContext } from "formik";
import * as Yup from "yup";
import isEmailValidator from "validator/lib/isEmail";

import "./Checkout.scss";
import CheckoutForm from "./CheckoutForm";

import Pc from "../../asset/images/hero.jpg";
import Vga from "../../asset/images/vga.png";
import EnhancedSubtotal from "./CartDetails/SubTotal";
import { useState } from "react";

const Checkout = () => {
  const item = {
    id: "pc01",
    name: "Geforce Galax 3070ti",
    image1: Vga,
    image2: Pc,
    price: 70,
    discountedPrice: 100,
    category: { id: "cate01", name: "PC" },
    rating: 4,
  };
  const [formData, setFormData] = useState([]);

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
          <div className="items-container">
            <div className="item-container">
              <div className="item-container__left">
                <img src={item.image2} alt="" />
                <p>{item.name}</p>
              </div>
              <div className="item-container__right">
                <p>${item.price}</p>
              </div>
            </div>
          </div>
          <EnhancedSubtotal formData={formData} />
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
