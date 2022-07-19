import React from "react";
import "./Cards.scss";

import Gear from "../../asset/images/gear.jpg";
import Gear2 from "../../asset/images/gear2.jpg";
import Pc from "../../asset/images/pc.jpg";
import Pc2 from "../../asset/images/pc2.jpg";
import Vga from "../../asset/images/vga.jpg";
import Vga2 from "../../asset/images/vga2.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cards__inner">
        <div className="card">
          <img className="top" src={Gear} alt="" />
          <img className="bottom" src={Gear2} alt="" />
          <div className="card__content">
            <div className="title">
              <h3>Gaming gear</h3>
            </div>
            <div className="link">
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="top" src={Vga} alt="" />
          <img className="bottom" src={Vga2} alt="" />
          <div className="card__content">
            <div className="title">
              <h3>Graphic card</h3>
            </div>
            <div className="link">
              <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="card">
          <img className="top" src={Pc} alt="" />
          <img className="bottom" src={Pc2} alt="" />
          <div className="card__content">
            <div className="title" style={{ color: "white" }}>
              <h3>Highend PC</h3>
            </div>
            <div className="link">
              <a href="#" style={{ color: "white" }}>
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
