import React from "react";
import Slider from "react-slick";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./Hero.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroImg from "../../asset/images/hero.jpg";
import Vga from "../../asset/images/vga.png";
import Cpu from "../../asset/images/Cpu.png";

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

const Hero = () => {
  const parts = [
    { name: "Geforce Galax 3070ti", image: Vga },
    { name: "CPU Intel Core i9-10900K", image: Cpu },
    { name: "PC", image: HeroImg },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {parts.map((part, index) => (
        <div className="hero__inner" key={index}>
          <div className="hero__left">
            <h1>{part.name}</h1>
            <button className="btn">Explore</button>
          </div>
          <div className="hero__right">
            <img src={part.image} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
