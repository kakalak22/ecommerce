import React from "react";
import "./Collection.scss";

import Vga from "../../asset/images/collection/vga.png";
import Keyboard from "../../asset/images/collection/keyboard.png";
import Monitor from "../../asset/images/collection/monitor.png";
import Mainboard from "../../asset/images/collection/mainboard.png";
import Ram from "../../asset/images/collection/ram.jpg";

const Collection = () => {
  const collections = [
    { name: "Graphic Card", image: Vga },
    { name: "Gaming Gears", image: Keyboard },
    { name: "Monitor", image: Monitor },
    { name: "Mainboard", image: Mainboard },
    { name: "Ram", image: Ram },
  ];

  return (
    <div className="collection">
      <h1>Collection</h1>
      <div className="collection__inner">
        {collections.map((item, index) => (
          <div key={index} className="item__wrapper">
            <div className="item">
              <img
                loading="lazy"
                className="item__image"
                src={item.image}
                alt=""
              />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
