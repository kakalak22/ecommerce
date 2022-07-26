import React, { useRef, useState, useEffect } from "react";
import "./ItemDetail.scss";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useNavigate, useParams } from "react-router-dom";
import * as itemsService from "../../services/fakeItemsService";
import { useStore, actions } from "../../store";
import { numberWithDot } from "../../utils/numberWithDot";

import { GrNext, GrPrevious } from "react-icons/gr";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

const ItemDetail = () => {
  const [state, dispatch] = useStore();
  const { itemQuantity } = state;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let { productId } = useParams();
  const [item, setItem] = useState({});
  const navigate = useNavigate();

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
                320: {
                  direction: "horizontal",
                  slidesPerView: "3",
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
                {item.price &&
                  (item.price === item.discountedPrice ? (
                    <p>{numberWithDot(item.discountedPrice)}đ</p>
                  ) : (
                    <p>
                      {numberWithDot(item.discountedPrice)}đ {"  "}
                      <span>{numberWithDot(item.price)}đ</span>
                    </p>
                  ))}
              </div>
              <div className="quantity__control">
                <p>Quantity</p>
                <div className="quatity">
                  <button
                    onClick={() => dispatch(actions.decreaseQuantity(null))}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    onChange={(event) =>
                      dispatch(
                        actions.inputQuantity({
                          quantity: event.target.value,
                        })
                      )
                    }
                    value={itemQuantity}
                  />
                  <button
                    onClick={() => dispatch(actions.increaseQuantity(null))}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="add-to-cart"
                onClick={() => {
                  dispatch(
                    actions.handleCartItems({
                      id: productId,
                      item: item,
                      quantity: itemQuantity,
                    })
                  );
                  dispatch(actions.openCart());
                  dispatch(actions.resetQuantity());
                }}
              >
                {" "}
                Add to cart{" "}
              </button>
              <button
                onClick={() => {
                  dispatch(
                    actions.handleCartItems({
                      id: productId,
                      item: item,
                      quantity: itemQuantity,
                    })
                  );
                  dispatch(actions.resetQuantity());
                  navigate("/checkout", { replace: true });
                }}
                className="btn-buy"
              >
                Buy It Now
              </button>
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
