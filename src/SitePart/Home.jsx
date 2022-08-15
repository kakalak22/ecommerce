import React from "react";
import Hero from "../component/Hero/Hero";
import Cards from "../component/Cards/Cards";
import Collection from "../component/Collection/Collection";
import WeekHighlight from "../component/Week_highlight/WeekHighlight";
import Discount from "../component/Discount/Discount";
import Recommend from "../component/Recommnend/Recommend";
import Section from "../component/Section/Section";
import Policy from "../component/Policy/Policy";
import Modal from "../component/Modal/Modal";
import Cart from "../component/Cart/Cart";
import { useGlobalContext } from "../Context";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <Cards />
      <Collection />
      <WeekHighlight />
      <Discount />
      <Recommend />
      <Section />
      <Policy />
    </React.Fragment>
  );
};

export default Home;
