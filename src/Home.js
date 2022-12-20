import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Truestd from "./components/Trusted";
const Home = () => {
  const data = {
    name: "Manish store"
  }
  return (
  <>
  <HeroSection myData={data}/>
  <Services />
  <Truestd />
  </>
  )
};

export default Home;