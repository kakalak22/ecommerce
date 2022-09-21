import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useField, ErrorMessage } from "formik";
import ky from "https://unpkg.com/ky/distribution/index.js";

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
  };

  useEffect(() => {
    provinceId && fetchDistricts();
  }, [provinceId]);

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <Select
        id={name}
        placeholder="Select province"
        options={districts}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
      />
      <ErrorMessage name={name} />
    </div>
  );
};

export default SelectDistrict;
