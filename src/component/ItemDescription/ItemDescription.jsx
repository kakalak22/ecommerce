import React, { useEffect, useId, useRef, useState } from "react";
import ReactStars from "react-rating-stars-component";
import { IoStarOutline, IoStarHalfOutline, IoStar } from "react-icons/io5";

import "./ItemDescription.scss";
import * as reviewService from "../../services/fakeReviewServices";

import Pc2 from "../../asset/images/pc2.jpg";

const ItemDescription = () => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [activeTab, setActiveTab] = useState([
    { description: true },
    { shipping: false },
    { review: false },
  ]);
  const id = useId();

  useEffect(() => {
    const reviews = reviewService.getReviewById("pc01");
    setReviews(reviews);
    const sum = reviews.reduce((previousVal, nextVal) => {
      return previousVal + nextVal.rate;
    }, 0);
    const average = Math.round((sum / reviews.length) * 10) / 10;
    setAverageRating(average);
  }, []);

  const handleDescriptionTab = () => {
    setActiveTab([
      { description: true },
      { shipping: false },
      { review: false },
    ]);
  };

  const handleShippingTab = () => {
    setActiveTab([
      { description: false },
      { shipping: true },
      { review: false },
    ]);
  };

  const handleReviewTab = () => {
    setActiveTab([
      { description: false },
      { shipping: false },
      { review: true },
    ]);
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const starConfig = {
    count: 5,
    isHalf: "true",
    size: 25,
    activeColor: "black",
    emptyIcon: <IoStarOutline />,
    halfIcon: <IoStarHalfOutline />,
    filledIcon: <IoStar />,
    edit: false,
  };
  return (
    <div className="item-description">
      <div className="item-description__inner">
        <div className="inner__top">
          <div
            className={activeTab[0].description ? "active" : ""}
            // ref={description_tab}
            onClick={handleDescriptionTab}
          >
            Product description
          </div>
          <div
            className={activeTab[1].shipping ? "active" : ""}
            onClick={handleShippingTab}
          >
            Shipping & Return
          </div>
          <div
            className={activeTab[2].review ? "active" : ""}
            onClick={handleReviewTab}
          >
            Product reviews
          </div>
        </div>
        <div className="inner__bottom">
          <div
            className={
              activeTab[0].description
                ? "description description-active"
                : " description"
            }
          >
            <div className="description__left">
              <h2>Description</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <img src={Pc2} alt="" />
            </div>
            <div className="description__right">
              <h2>Details</h2>
              <table>
                <tbody>
                  <tr>
                    <td>abc</td>
                    <td>asdds</td>
                  </tr>
                  <tr>
                    <td>abc</td>
                    <td>asdds</td>
                  </tr>
                  <tr>
                    <td>abc</td>
                    <td>asdds</td>
                  </tr>
                  <tr>
                    <td>abc</td>
                    <td>asdds</td>
                  </tr>
                  <tr>
                    <td>abc</td>
                    <td>asdds</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div
            className={
              activeTab[1].shipping ? "shipping shipping-active" : " shipping"
            }
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div
            className={activeTab[2].review ? "review review-active" : " review"}
          >
            <div className="review__inner">
              <div className="review__inner__top">
                <h2>Customer reviews</h2>
                <div className="rating-container">
                  {reviews.length > 0 && (
                    <ReactStars
                      {...starConfig}
                      value={averageRating}
                      onChange={ratingChanged}
                    />
                  )}
                  <p>( {averageRating} out of 5 )</p>
                </div>
              </div>
              {reviews.map((review) => (
                <div
                  className="review-container"
                  key={id + review.customerName}
                >
                  <ReactStars
                    count={5}
                    isHalf={true}
                    size={20}
                    activeColor={"black"}
                    emptyIcon={<IoStarOutline />}
                    halfIcon={<IoStarHalfOutline />}
                    filledIcon={<IoStar />}
                    value={review.rate}
                    edit={false}
                  />
                  <div className="name">
                    <p>{review.customerName}</p>
                    <p>on</p>
                    <span>May 25, 2022</span>
                  </div>
                  <div className="review-content">
                    <p>Cheap price, high quality</p>
                    <p>{review.review}</p>
                  </div>
                  <div className="reply-container">
                    <p>Staff name</p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{" "}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDescription;
