import React from "react";
import ky from "ky";
import { useEffect } from "react";
import "./SubTotal.scss";
import { useState } from "react";
import { numberWithDot } from "../../../../utils/numberWithDot";

const SubTotal = (props) => {
  const { formData, total, onDeliveryFeeChange } = props;
  const { district, province, ward, address } = formData;
  const [deliveryFee, setDeliveryFee] = useState();
  console.log(formData);

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
        `${process.env.REACT_APP_PROXY}${process.env.REACT_APP_GHTK_API_URL}?${params}`,
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
    onDeliveryFeeChange(rdata.fee.fee);
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
        <p>{numberWithDot(total)}đ</p>
      </div>
      <div>
        <p>Shipping fee</p>
        <p>{deliveryFee ? `${numberWithDot(deliveryFee)}đ` : "--"}</p>
      </div>
    </div>
  );
};

export default SubTotal;
