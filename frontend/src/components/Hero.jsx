import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="px-5 flex items-center flex-col justify-center my-12 b ">
     

      <div className="flex flex-col sm:flex-row justify-between   sm:gap-64 ">
        <div className="flex flex-col items-center justify-center gap-4  text-left w-full my-5">
          <div className="flex items-center justify-center gap-3 leading-4 ">
            <p className="w-9 md:w-20 h-[2px] bg-slate-500 "></p>
            <p className="capitalize font-bold text-slate-600 text-lg">
              Our best sellers
            </p>
          </div>
          <h1 className="capitalize text-4xl pl-14">latest arrivals </h1>
          <div className="flex items-center justify-center gap-3 ">
            <h1 className="font-bold uppercase ">show now</h1>
            <p className="w-10 md:w-20 h-[2px] bg-slate-600"></p>
          </div>
        </div>
        <img
          src={assets.hero_img}
          alt=""
          className="w-full block  object-cover rounded-lg"
        />
      </div>
      <div className="w-full h-[2px] bg-gray-500 mt-20"></div>
    </div>
  );
};

export default Hero;
