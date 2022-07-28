import React from "react";
import "./Section.scss";

import Pc from "../../asset/images/pc.png";

const Section = () => {
  return (
    <div className="section">
      <div className="section__inner">
        <div className="section__inner__left">
          <img src={Pc} alt="" />
        </div>
        <div className="section__inner__right">
          <h2>Lorem Ipsum is simply dummy text</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>
          <button>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Section;
