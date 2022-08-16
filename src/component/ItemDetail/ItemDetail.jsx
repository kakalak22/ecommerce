import React, { useRef, useState, useEffect } from "react";
import "./ItemDetail.scss";
import { useGlobalContext } from "../../Context";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useParams } from "react-router-dom";
import * as itemsService from "../../services/fakeItemsService";

import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const ItemDetail = () => {
  const {
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    itemQuantity,
    handleQuantityInputChange,
    resetQuantity,
    handleCart,
    openCart,
  } = useGlobalContext();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let { productId } = useParams();
  const [item, setItem] = useState({});

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

  useEffect(() => {
    const item = itemsService.getItem(productId);
    setItem(item);
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    item && (
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
                <img src={item.image1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.image2} />
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
              breakpoints={{
                481: {
                  direction: "horizontal",
                  spaceBetween: 0,
                },
                768: {
                  direction: "horizontal",
                },
                1025: {
                  direction: "vertical",
                },
              }}
            >
              <SwiperSlide>
                <img src={item.image1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={item.image2} />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="inner__right">
            <div className="content-wrapper">
              <h2>{item.name}</h2>
              <div className="price">
                <p>
                  {item.discountedPrice}$ {"  "}
                  <span>{item.price}$</span>
                </p>
              </div>
              <div className="quantity__control">
                <p>Quantity</p>
                <div className="quatity">
                  <button onClick={() => handleDecreaseQuantity(null)}>
                    -
                  </button>
                  <input
                    type="number"
                    onChange={(event) => handleQuantityInputChange(event, null)}
                    value={itemQuantity}
                  />
                  <button onClick={() => handleIncreaseQuantity(null)}>
                    +
                  </button>
                </div>
              </div>
              <button
                className="add-to-cart"
                onClick={() => {
                  handleCart(productId, item, itemQuantity);
                  openCart();
                  resetQuantity();
                }}
              >
                {" "}
                Add to cart{" "}
              </button>
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
    )
  );
};

export default ItemDetail;