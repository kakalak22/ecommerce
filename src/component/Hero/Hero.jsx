import React, { useEffect } from "react";
import Slider from "react-slick";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./Hero.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroImg from "../../asset/images/hero.jpg";
import Vga from "../../asset/images/vga.png";
import Cpu from "../../asset/images/Cpu.png";
import { useNavigate } from "react-router-dom";
import * as services from "../../services/fakeItemsService";
import { useState } from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <AiOutlineArrowRight
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <AiOutlineArrowLeft
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
};
const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const Hero = () => {
  let navigate = useNavigate();
  const [parts, setParts] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    centerMode: true,
    nextArrow: <NextArrow style={{ right: "-50px !important" }} />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    const startIndex = getRandomInt(10);
    const parts = services.getItems().slice(startIndex, startIndex + 3);
    setParts(parts);
  }, []);

  return (
    parts.length > 0 && (
      <Slider {...settings} style={{ background: "white" }}>
        {parts.map((part, index) => (
          <div className="hero__inner" key={index}>
            <div className="hero__left">
              <h1>{part.name}</h1>
              <button
                className="btn"
                onClick={() =>
                  navigate(`/products/${part.id}`, { replace: true })
                }
              >
                Explore
              </button>
            </div>
            <div className="hero__right">
              <img src={part.image1} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    )
  );
};

export default Hero;
