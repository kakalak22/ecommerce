import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useField, ErrorMessage } from "formik";
import ky from "ky";
import "../Form.scss";

const url = "https://provinces.open-api.vn/api/";

const SelectWard = ({ name, districtId, provinceId }) => {
  const [wards, setWards] = useState([]);

  const [field, meta, helpers] = useField(name);

  const fetchWards = async () => {
    const rdata = await ky
      .get(`${process.env.REACT_APP_PROVINCES_API_URL}d/${districtId}`, {
        searchParams: { depth: 2 },
      })
      .json();
    const wards = [];
    rdata &&
      rdata.wards.forEach((ward) => {
        wards.push({
          value: ward.name,
          label: ward.name,
          id: ward.code,
        });
      });
    setWards(wards);
  };

  useEffect(() => {
    districtId && fetchWards();
  }, [districtId]);

  useEffect(() => {
    helpers.setValue("");
  }, [provinceId]);

  return (
    <>
      <label htmlFor={name}>Ward</label>
      <Select
        id={name}
        name={name}
        placeholder="Select ward"
        options={wards}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
      />
      <div className="error">
        <ErrorMessage name={name} />
      </div>
    </>
  );
};

export default SelectWard;
