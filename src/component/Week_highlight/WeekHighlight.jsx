import React, { useState } from "react";
import "./WeekHighlight.scss";
import Dropdown from "../Dropdown/Dropdown";

import { BsArrowDownUp } from "react-icons/bs";
import { AiOutlineStar, AiOutlineShoppingCart } from "react-icons/ai";

import Vga from "../../asset/images/vga.png";
import Cpu from "../../asset/images/Cpu.png";
import Pc from "../../asset/images/hero.jpg";
import Pc2 from "../../asset/images/pc2.jpg";
import SingleItem from "../SingleItem/SingleItem";
import { useGlobalContext } from "../../Context";

const WeekHighlight = () => {
  const { location, isDropdownOpen, sideName } = useGlobalContext();

  const parts = [
    {
      name: "Geforce Galax 3070ti",
      image1: Vga,
      image2: Pc,
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

  return (
    <React.Fragment>
      <Dropdown
        isDropdownOpen={isDropdownOpen}
        location={location}
        name={sideName}
        nameOfClass={"sidename"}
      />
      <div className="week__highlight">
        <h1>Weekly Collection</h1>
        <div className="week__highlight__inner">
          {parts.map((part, index) => (
            <SingleItem key={index} part={part} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default WeekHighlight;
