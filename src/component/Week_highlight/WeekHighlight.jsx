import React, { useEffect, useState } from "react";
import "./WeekHighlight.scss";
import Dropdown from "../Dropdown/Dropdown";
import * as services from "../../services/fakeItemsService";

import { BsArrowDownUp } from "react-icons/bs";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";
import SingleItem from "../SingleItem/SingleItem";
import { useGlobalContext } from "../../Context";

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
