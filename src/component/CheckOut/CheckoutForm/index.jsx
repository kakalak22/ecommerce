import React from "react";
import { Formik, Form, useField, useFormikContext, useFormik } from "formik";
import SelectProvince from "./SelectForm/SelectProvince";
import SelectDistrict from "./SelectForm/SelectDistrict";
import SelectWard from "./SelectForm/SelectWard";

import "./Form.scss";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <React.Fragment>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </React.Fragment>
  );
};

const CheckoutForm = ({ onReset }) => {
  const formData = useFormikContext();
  const provinceId = formData.values.province?.id || null;
  const districtId = formData.values.district?.id || null;
  return (
    <form className="form-container">
      <MyTextInput
        label="Name"
        name="name"
        type="text"
        placeholder="Input your name..."
      />
      <MyTextInput
        label="Email"
        name="email"
        type="email"
        placeholder="Input your email..."
      />
      <SelectProvince name="province" />
      <SelectDistrict name="district" provinceId={provinceId} />
      <SelectWard name="ward" districtId={districtId} />
      <MyTextInput
        label="Detail Address"
        name="address"
        type="text"
        placeholder="Please input your address"
      />
      <div className="form-button-container">
        <button className="form-button-reset" type="reset" onClick={onReset}>
          Reset
        </button>
        <button className="form-button-submit" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
