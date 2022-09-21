import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useField, ErrorMessage } from "formik";
import ky from "https://unpkg.com/ky/distribution/index.js";

const url = "https://provinces.open-api.vn/api/";

const SelectWard = ({ name, districtId }) => {
  const [wards, setWards] = useState([]);

  const [field, meta, helpers] = useField(name);

  const fetchWards = async () => {
    const rdata = await ky
      .get(`${url}d/${districtId}`, { searchParams: { depth: 2 } })
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

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <Select
        id={name}
        placeholder="Select province"
        options={wards}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default SelectWard;
