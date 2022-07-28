import React, { useState } from "react";
import "./Footer.scss";

import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

import Mastercard from "../../asset/payment/mastercard.svg";
import Jcb from "../../asset/payment/jcb.svg";
import Paypal from "../../asset/payment/paypal.svg";
import Visa from "../../asset/payment/visa.svg";

const Footer = () => {
  const [subscribeDropdownClicked, setSubscribeDropdownClicked] =
    useState(false);
  const [informationDropdownClicked, setInformationDropdownClicked] =
    useState(false);
  const [contactDropdownClicked, setContactDropdownClicked] = useState(false);
  return (
    <div className="footer">
      <div className="footer__inner">
        <div className="subscribe">
          <div
            className="header__container"
            onClick={() =>
              setSubscribeDropdownClicked(!subscribeDropdownClicked)
            }
          >
            <h1>Subscribe</h1>{" "}
            <span>
              {subscribeDropdownClicked ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )}
            </span>
          </div>
          <div
            className={
              subscribeDropdownClicked
                ? "subscribe__container active"
                : "subscribe__container"
            }
          >
            <p>Our conversation is just getting started</p>
            <form action="">
              <span>
                <AiOutlineMail />
              </span>
              <input type="text" placeholder="Enter your email" />
              <button>
                <AiOutlineArrowRight />
              </button>
            </form>
          </div>
        </div>

        <div className="information">
          <div
            className="header__container"
            onClick={() =>
              setInformationDropdownClicked(!informationDropdownClicked)
            }
          >
            <h3>Information</h3>
            <span>
              {informationDropdownClicked ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )}
            </span>
          </div>
          <div
            className={
              informationDropdownClicked
                ? "information__container active"
                : "information__container"
            }
          >
            <div className="link">
              <a href="">Register</a>
            </div>
            <div className="link">
              <a href="">Login</a>
            </div>
            <div className="link">
              <a href="">Cart</a>
            </div>
            <div className="link">
              <a href="">Wish List</a>
            </div>
            <div className="link">
              <a href="">Compare</a>
            </div>
            <div className="link">
              <a href="">Cart</a>
            </div>
          </div>
        </div>
        <div className="contact ">
          <div
            className="header__container"
            onClick={() => setContactDropdownClicked(!contactDropdownClicked)}
          >
            <h3>Contact</h3>
            <span>
              {contactDropdownClicked ? (
                <RiArrowUpSLine />
              ) : (
                <RiArrowDownSLine />
              )}
            </span>
          </div>
          <div
            className={
              contactDropdownClicked
                ? "contact__container active "
                : "contact__container"
            }
          >
            <div className="link">
              <a href="">About Us</a>
            </div>
            <div className="link">
              <a href="">Contact Us</a>
            </div>
            <div className="link">
              <a href="">FAQ</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="footer__copyright__left">
          <p>© 2021, Minimog. All Rights Reserved.</p>
        </div>
        <div className="footer__copyright__right">
          <ul>
            <li>
              <img src={Mastercard} alt="" />
            </li>
            <li>
              <img src={Jcb} alt="" />
            </li>
            <li>
              <img src={Paypal} alt="" />
            </li>
            <li>
              <img src={Visa} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
