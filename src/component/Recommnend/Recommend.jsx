import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useSwiper } from "swiper/react";

import { GrNext, GrPrevious } from "react-icons/gr";

import "./Recommend.scss";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

import HeroImg from "../../asset/images/hero.jpg";
import Vga from "../../asset/images/vga.png";
import Cpu from "../../asset/images/Cpu.png";
import Pc from "../../asset/images/hero.jpg";
import Pc2 from "../../asset/images/pc2.jpg";
import SingleItem from "../SingleItem/SingleItem";

const Recommend = () => {
  const parts = [
    {
      name: "Geforce Galax 3070ti",
      image1: Vga,
      image2: Pc2,
      price: 70,
      discountedPrice: 50,
    },
    {
      name: "CPU Intel Core i9-10900K",
      image1: Cpu,
      image2: Pc2,
      price: 70,
      discountedPrice: 50,
    },
    { name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    {
      name: "Geforce Galax 3070ti",
      image1: Vga,
      image2: Pc2,
      price: 70,
      discountedPrice: 50,
    },
    {
      name: "CPU Intel Core i9-10900K",
      image1: Cpu,
      image2: Pc2,
      price: 70,
      discountedPrice: 50,
    },
    { name: "PC", image1: Pc, image2: Pc2, price: 70, discountedPrice: 50 },
    {
      name: "Geforce Galax 3070ti",
      image1: Vga,
      image2: Pc2,
      price: 70,
      discountedPrice: 50,
    },
    {
      name: "CPU Intel Core i9-10900K",
      image1: Cpu,
      image2: Pc2,
      price: 70,
      discountedPrice: 50,
    },
  ];

  const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return (
      <div className="nextArrow" onClick={() => swiper.slideNext()}>
        <GrNext />
      </div>
    );
  };
  const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return (
      <div className="prevArrow" onClick={() => swiper.slidePrev()}>
        <GrPrevious />
      </div>
    );
  };

  return (
    <React.Fragment>
      <h1 style={{ fontSize: "40px", textAlign: "center" }}>Hot Sale</h1>
      <div className="recommend">
        <div className="recommend__inner">
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={true}
            slidesPerView={4}
            // spaceBetween={65}
            onSlideChange={() => console.log("slide change")}
            // centeredSlides={true}
            autoplay={true}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 1,
              },
              // when window width is >= 766px
              766: {
                slidesPerView: 3,
              },
              // when window width is >= 1160px
              1160: {
                slidesPerView: 4,
                // spaceBetween: 65,
              },
            }}
            // loop={true}
          >
            {parts.map((part, index) => (
              <SwiperSlide>
                <SingleItem key={index} part={part} />
              </SwiperSlide>
            ))}
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </Swiper>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recommend;
