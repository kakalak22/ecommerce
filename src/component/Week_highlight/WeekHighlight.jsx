import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import SingleItem from "../SingleItem/SingleItem";
import { useGlobalContext } from "../../Context";

import * as services from "../../services/fakeItemsService";

import "./WeekHighlight.scss";

const WeekHighlight = () => {
  const { location, isDropdownOpen, sideName } = useGlobalContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = services.getItems().slice(0, 7);

    setItems(items);
  }, []);

  return (
    <React.Fragment>
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        location={location}
        name={sideName}
        nameOfClass={"sidename"}
      />
      <div className="week__highlight">
        <h1>Weekly Collection</h1>
        <div className="week__highlight__inner">
          {items.map((item, index) => (
            <SingleItem key={index} item={item} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeekHighlight;
