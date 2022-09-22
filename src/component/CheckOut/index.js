import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import isEmailValidator from "validator/lib/isEmail";
import ky from "https://unpkg.com/ky/distribution/index.js";

import "./Checkout.scss";
import CheckoutForm from "./CheckoutForm";

import Pc from "../../asset/images/hero.jpg";
import Vga from "../../asset/images/vga.png";
import { useEffect } from "react";

const Checkout = () => {
  const fetchShippingFee = async () => {
    const body = {
      pick_province: "Hà Nội",
      pick_district: "Quận Hai Bà Trưng",
      province: "Hà nội",
      district: "Quận Cầu Giấy",
      address: "P.503 tòa nhà Auu Việt, số 1 Lê Đức Thọ",
      weight: 1000,
      value: 3000000,
      transport: "road",
      deliver_option: "xteam",
    };
    const params = new URLSearchParams(body).toString();
    const rdata = await ky
      .get(`https://services.giaohangtietkiem.vn/services/shipment/fee?${params}`, {
        headers: {
          "content-type": "aplication/json",
          "token": "366b52412024EFDc2407D169c36502f1f2899495",
        },

      })
      .json();
    console.log(rdata);
  };

  useEffect(() => {
    fetchShippingFee();
  }, []);

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
            {({ handleReset }) => <CheckoutForm onReset={handleReset} />}
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
          <div className="subtotal-container">
            <div>
              <p>Subtotal</p>
              <p>$50</p>
            </div>
            <div>
              <p>Shipping fee</p>
              <p>$50</p>
            </div>
          </div>
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
