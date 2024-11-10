import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <Hero />
      <LatestCollection />
      <BestSellers />
    </div>
  );
};

export default Home;
