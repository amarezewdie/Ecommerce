import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

const [visible,setVisible]=useState(false)    
  return (
    <div>
      <div className="flex items-center justify-between gap-5 sm:mx-20 my-2">
        <Link to="/">
          <img src={assets.logo} alt=" logo" className="w-20" />
        </Link>
        <ul className=" hidden sm:flex items-center justify-between gap-5">
          <NavLink to="/" className="flex flex-col items-center">
            <p>HOME</p>
            <hr className="w-2/4 h-[1.5px] border-none bg-gray-600 hidden" />
          </NavLink>
          <NavLink to="/collection" className="flex flex-col items-center">
            <p>COLLECTION</p>
            <hr className="w-2/4 h-[1.5px] border-none bg-gray-600 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center">
            <p>ABOUT</p>
            <hr className="w-2/4 h-[1.5px] border-none bg-gray-600 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center">
            <p>CONTACT</p>
            <hr className="w-2/4 h-[1.5px] border-none bg-gray-600 hidden" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-5">
          <img
            src={assets.search_icon}
            alt=""
            className="w-5 cursor-pointer min-w-5"
          />
          <div className="relative group">
            <img src={assets.profile_icon} alt="" className="w-5 min-w-5" />
            <div className="absolute hidden group-hover:block pt-2 right-0">
              <div className="flex flex-col bg-gray-100 text-gray-400 capitalize w-36 p-3 gap-2">
                <p className="cursor-pointer hover:text-black">my profile</p>
                <p className="cursor-pointer hover:text-black">orders</p>
                <p className="cursor-pointer hover:text-black">logout</p>
              </div>
            </div>
          </div>
          <Link className="relative">
            <img src={assets.cart_icon} alt="" className="w-5 min-w-5" />
            <p className="absolute bottom-[-5px] right-[-5px] bg-black text-white w-4 rounded-full aspect-square text-[8px] text-center leading-4">
              10
            </p>
          </Link>
          <img
            src={assets.menu_icon}
            alt=""
            className=" sm:hidden w-5 min-w-5 cursor-pointer"
            onClick={() => setVisible(true)}
          />
        </div>

        <div
          className={`absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-white ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col">
            <div
              className="flex items-center gap-2 capitalize font-bold text-lg transition-all duration-300 ease-in-out m-2 cursor-pointer"
              onClick={() => setVisible(false)}
            >
              <img src={assets.dropdown_icon} alt="" className="rotate-180" />
              <p>back</p>
            </div>
            <div className="flex flex-col gap-3 capitalize items-center text-lg font-bold transition-all">
              <NavLink to="/" onClick={() => setVisible(false)}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setVisible(false)}>
                about
              </NavLink>
              <NavLink to="/collection" onClick={() => setVisible(false)}>
                Collection
              </NavLink>
              <NavLink to="/contact" onClick={() => setVisible(false)}>
                contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="border  w-full my-7"></div>
    </div>
  );
};

export default NavBar;
