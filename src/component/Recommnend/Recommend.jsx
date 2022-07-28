import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <React.Fragment>
      <h1 style={{ fontSize: "40px", textAlign: "center" }}>Hot Sale</h1>
      <div className="recommend">
        <div className="recommend__inner">
          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Navigation, Pagination]}
            pagination={true}
            // navigation={true}
            slidesPerView={4}
            // spaceBetween={65}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            // centeredSlides={true}
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
          </Swiper>
          <div className="prevArrow" ref={prevRef}>
            <GrPrevious />
          </div>
          <div className="nextArrow" ref={nextRef}>
            <GrNext />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Recommend;
