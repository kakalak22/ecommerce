import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useField, ErrorMessage } from "formik";
import ky from "https://unpkg.com/ky/distribution/index.js";
import "../Form.scss";

const url = "https://provinces.open-api.vn/api/";

const SelectDistrict = ({ name, provinceId }) => {
  const [districts, setDistricts] = useState([]);

  const [field, meta, helpers] = useField(name);

  const fetchDistricts = async () => {
    const rdata = await ky
      .get(`${url}p/${provinceId}`, { searchParams: { depth: 2 } })
      .json();
    const districts = [];
    rdata &&
      rdata.districts.forEach((district) => {
        districts.push({
          value: district.name,
          label: district.name,
          id: district.code,
        });
      });
    setDistricts(districts);
    helpers.setValue("");
  };

  useEffect(() => {
    provinceId && fetchDistricts();
  }, [provinceId]);

  return (
    <div>
      <label htmlFor={name}>District</label>
      <Select
        id={name}
        name={name}
        placeholder="Select district"
        options={districts}
        value={field.value}
        onChange={(value) => {
          helpers.setValue(value);
        }}
        onBlur={() => helpers.setTouched(true)}
        clearV
      />
      <div className="error" style={{ marginTop: "1rem" }}>
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};

export default SelectDistrict;