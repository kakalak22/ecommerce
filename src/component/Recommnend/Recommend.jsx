import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useSwiper } from "swiper/react";
import SingleItem from "../SingleItem/SingleItem";

import * as services from "../../services/fakeItemsService";

import { GrNext, GrPrevious } from "react-icons/gr";

import "./Recommend.scss";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const Recommend = () => {
  const [recommendItems, setRecommendItems] = useState([]);

  useEffect(() => {
    const recommendItems = services.getItems();
    setRecommendItems(recommendItems);
  }, []);

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
            onSlideChange={() => console.log("slide change")}
            autoplay={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 1,
              },
              766: {
                slidesPerView: 3,
              },
              1160: {
                slidesPerView: 4,
              },
            }}
          >
            {recommendItems.map((item, index) => (
              <SwiperSlide>
                <SingleItem key={index} item={item} />
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
