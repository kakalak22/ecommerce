import React, { useRef, useState } from "react";
import "./ItemDetail.scss";
import { useGlobalContext } from "../../Context";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

import Vga from "../../asset/images/vga.png";
import Cpu from "../../asset/images/Cpu.png";
import Pc from "../../asset/images/hero.jpg";
import Pc2 from "../../asset/images/pc2.jpg";

const ItemDetail = () => {
  const {
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    itemQuantity,
    handleQuantityInputChange,
  } = useGlobalContext();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

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
    <div className="item-detail">
      <div className="item-detail__inner">
        <div className="inner__left">
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
            direction="horizontal"
          >
            <SwiperSlide>
              <img src={Pc} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pc2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Vga} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Cpu} />
            </SwiperSlide>
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[Navigation, Thumbs]}
            className="mySwiper"
            direction="vertical"
          >
            <SwiperSlide>
              <img src={Pc} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Pc2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Vga} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Cpu} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="inner__right">
          <div className="content-wrapper">
            <h2>Name</h2>
            <p>Price</p>
            <p>Quantity</p>
            <div className="quantity__control">
              <div className="quatity">
                <button onClick={() => handleDecreaseQuantity(null)}>-</button>
                <input
                  type="number"
                  onChange={(event) => handleQuantityInputChange(event, null)}
                  value={itemQuantity}
                />
                <button onClick={() => handleIncreaseQuantity(null)}>+</button>
              </div>
              <button onClick={() => {}}> Add to cart </button>
            </div>
            <button className="btn-buy">Buy It Now</button>
            <div className="inner__right__footer">
              <a href="#">Compare</a>
              <a href="#">Ask a question</a>
              <a href="#">Share</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
