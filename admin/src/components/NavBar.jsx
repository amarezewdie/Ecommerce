import React from "react";
import { assets } from "../assets/assets";

const NavBar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center py-2 px-[4%] border">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-gray-800 text-white rounded-full px-4 py-1 capitalize font-semibold "
      >
        logout
      </button>
    </div>
  );
};

export default NavBar;
