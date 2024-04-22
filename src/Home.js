import React from "react";
import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Truestd from "./components/Trusted";
const Home = () => {
  const data = {
    name: "ShopFusion",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Truestd />
    </>
  );
};

export default Home;
