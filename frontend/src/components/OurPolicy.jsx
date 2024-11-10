import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-24 my-14 gap-10">
      <div className="flex flex-col text-center items-center justify-center">
        <img src={assets.exchange_icon} alt="" className="w-12"/>
        <p className="text-2xl font-semibold mt-6 mb-2 text-black capitalize">
          Easy Exchange Policy{" "}
        </p>
        <p className="text-sm text-gray-400">
          We offer hassle free exchange policy
        </p>
      </div>
      <div className="flex flex-col text-center justify-center items-center">
        <img src={assets.quality_icon} alt="" className="w-12"/>
        <p className="text-2xl font-semibold mt-6 mb-2 text-black capitalize">
          7 Days Return Policy
        </p>
        <p className="text-sm text-gray-400">
          We provide 7 days free return policy
        </p>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <img src={assets.support_img} alt="" className="w-12"/>
        <p className="text-2xl font-semibold mt-6 mb-2 text-black capitalize">
          Best customer support
        </p>
        <p className="text-sm text-gray-400">
          we provide 24/7 customer support
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
