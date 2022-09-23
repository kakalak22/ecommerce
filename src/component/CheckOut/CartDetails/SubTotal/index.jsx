import React from "react";
import { useFormikContext, withFormik } from "formik";
import ky from "https://unpkg.com/ky/distribution/index.js";
import { useEffect } from "react";
import "./SubTotal.scss";
import { useState } from "react";

const SubTotal = (props) => {
  const { formData } = props;
  const { district, province, ward, address } = formData;
  const [deliveryFee, setDeliveryFee] = useState();
  console.log(formData);

  const numberWithDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const fetchShippingFee = async (province, district, ward, address) => {
    const body = {
      pick_province: "Ho Chi Minh",
      pick_district: "Quận 10",
      province: province,
      district: district,
      ward: ward,
      address: address,
      weight: 1000,
      value: 3000000,
      transport: "road",
      deliver_option: "xteam",
      "tags[]": 1,
    };
    const params = new URLSearchParams(body).toString();
    const rdata = await ky
      .get(
        `https://services.giaohangtietkiem.vn/services/shipment/fee?${params}`,
        {
          headers: {
            "content-type": "aplication/json",
            token: "366b52412024EFDc2407D169c36502f1f2899495",
          },
        }
      )
      .json();
    console.log(rdata);
    setDeliveryFee(rdata.fee.fee);
  };

  useEffect(() => {
    district &&
      province &&
      ward &&
      fetchShippingFee(district.value, province.value, ward.value, address);
  }, [formData]);
  return (
    <div className="subtotal-container">
      <div>
        <p>Subtotal</p>
        <p>$50</p>
      </div>
      <div>
        <p>Shipping fee</p>
        <p>{deliveryFee ? numberWithDot(deliveryFee) : "--"}</p>
      </div>
    </div>
  );
};

const EnhancedSubtotal = withFormik({
  mapPropsToValues: () => ({}),
})(SubTotal);

export default EnhancedSubtotal;
