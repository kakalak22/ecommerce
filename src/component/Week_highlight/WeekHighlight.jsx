import React, { useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import SingleItem from "../SingleItem/SingleItem";
import { useGlobalContext } from "../../store/Context";

import * as services from "../../services/fakeItemsService";

import "./WeekHighlight.scss";
import { useStore } from "../../store";

const WeekHighlight = () => {
  const [items, setItems] = useState([]);
  const [state, dispatch] = useStore();
  const { location, isDropdownOpen, sideName } = state;

  useEffect(() => {
    const items = services.getItems().slice(0, 8);

    setItems(items);
  }, []);

  useEffect(() => {});

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
