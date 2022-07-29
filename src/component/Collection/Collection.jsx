import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./Collection.scss";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

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
        {/*{collections.map((item, index) => (
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
        ))}*/}
        <Swiper
          modules={[Navigation, Pagination]}
          pagination={true}
          // navigation={true}
          slidesPerView={4}
          // spaceBetween={65}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          // centeredSlides={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            851: {
              slidesPerView: 4,
            },
            1160: {
              slidesPerView: 5,
            },
          }}
        >
          {collections.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="item__wrapper">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Collection;
