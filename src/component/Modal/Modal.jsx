import React, { useEffect, useRef } from "react";
import { useStore, actions } from "../../store";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { GrNext, GrPrevious } from "react-icons/gr";

import { AiOutlineClose } from "react-icons/ai";

import "./Modal.scss";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";
import { numberWithDot } from "../../utils/numberWithDot";

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

const Modal = ({ singleItem }) => {
  const [state, dispatch] = useStore();
  const { itemQuantity, isModalOpen } = state;

  const { image1, image2, name, price, discountedPrice, id } = singleItem;
  const modal = useRef(null);

  useEffect(() => {
    const height = window.pageYOffset;
    modal.current.style.top = `${height}px`;
  }, [isModalOpen]);

  return (
    <div className="modal__container" ref={modal}>
      <div
        className="modal-background"
        onClick={() => dispatch(actions.closeModal())}
      ></div>
      <div className="modal">
        <AiOutlineClose onClick={() => dispatch(actions.closeModal())} />
        <div className="modal__left">
          <Swiper
            loop={true}
            spaceBetween={10}
            modules={[FreeMode, Navigation, Thumbs]}
            className="modal-swiper"
            direction="horizontal"
          >
            <SwiperSlide>
              <img src={image1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={image2} />
            </SwiperSlide>
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </Swiper>
        </div>
        <div className="modal__right">
          <div className="modal__right__inner">
            <h2>{name}</h2>
            <div className="price">
              <p>
                {numberWithDot(discountedPrice)}đ {"  "}
                <span>{numberWithDot(price)}đ</span>
              </p>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <Link
              onClick={() => dispatch(actions.closeModal())}
              to={`/products/${id}`}
            >
              View Details
            </Link>
            <div className="quantity__control">
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
                      actions.inputQuantity({ quantity: event.target.value })
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
              <button
                onClick={() => {
                  dispatch(
                    actions.handleCartItems({
                      id: id,
                      item: singleItem,
                      quantity: itemQuantity,
                    })
                  );
                  dispatch(actions.closeModal());
                  dispatch(actions.openCart());
                }}
              >
                {" "}
                Add to cart{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
