import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellers from "../components/BestSellers";
import OurPolicy from "../components/OurPolicy";
import NewLetter from "../components/NewLetter";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Hero />
      <LatestCollection />
      <BestSellers />
      <OurPolicy />
      <NewLetter />
    </div>
  );
};

export default Home;
