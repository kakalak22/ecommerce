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
  let navigate = useNavigate();

  const parts = [
    { name: "Geforce Galax 3070ti", image: Vga, id: "pc03" },
    { name: "CPU Intel Core i9-10900K", image: Cpu, id: "pc06" },
    { name: "PC", image: HeroImg, id: "pc08" },
  ];

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
    const nextArrow = document.getElementsByClassName("slick-next");
    nextArrow[0].style.right = "20px";
    const prevArrow = document.getElementsByClassName("slick-prev");
    prevArrow[0].style.left = "20px";
  }, []);

  return (
    <Slider {...settings} style={{ background: "rgb(0, 0, 0, 0.1)" }}>
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
            <img src={part.image} alt="" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Hero;
