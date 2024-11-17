import React from "react";
import { assets } from "../assets/assets";
import {  NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-[18%] border-r-2 min-h-screen">
      <NavLink
        to={"/add"}
        className="flex gap-4  items-center  border border-gray-400 border-r-0 p-3 ml-6 mt-3 "
      >
        <img className="w-5 h-5" src={assets.add_icon} alt="" />
        <p className="hidden sm:block capitalize text-gray-400 font-semibold">
          add items
        </p>
      </NavLink>
      <NavLink
        to={"/list"}
        className="flex gap-4  items-center  border border-gray-400 border-r-0 p-3 ml-6 mt-3 "
      >
        <img className="w-5 h-5" src={assets.order_icon} alt="" />
        <p className="hidden sm:block capitalize text-gray-400 font-semibold">
          list items
        </p>
      </NavLink>
      <NavLink
        to={"/orders"}
        className="flex gap-4  items-center  border border-gray-400 border-r-0 p-3 ml-6 mt-3 "
      >
        <img className="w-5 h-5" src={assets.order_icon} alt="" />
        <p className="hidden sm:block capitalize text-gray-400 font-semibold">
          order items
        </p>
      </NavLink>
    </div>
  );
};

export default SideBar;
