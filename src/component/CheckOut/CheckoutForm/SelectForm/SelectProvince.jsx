import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useField, ErrorMessage } from "formik";
import ky from "https://unpkg.com/ky/distribution/index.js";
import "../Form.scss";

const url = "https://provinces.open-api.vn/api/";

const SelectProvince = ({ name }) => {
  const [provinces, setProvinces] = useState([]);
  const [field, meta, helpers] = useField(name);

  const fetchProvinces = async () => {
    const rdata = await ky.get(url).json();
    const provinces = [];
    rdata &&
      rdata.forEach((province) => {
        provinces.push({
          value: province.name,
          label: province.name,
          id: province.code,
        });
      });
    setProvinces(provinces);
  };

  useEffect(() => {
    fetchProvinces();
  }, []);

  return (
    <div>
      <label htmlFor={name}>Province</label>
      <Select
        id={name}
        name={name}
        placeholder="Select province"
        options={provinces}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
      />
      <div className="error" style={{ marginTop: "1rem" }}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default SelectProvince;
