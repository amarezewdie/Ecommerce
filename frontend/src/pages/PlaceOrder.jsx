import React, { useState } from 'react'
import Title from '../components/Title'
import { useContext } from 'react';
import { ShopContext } from '../contexts/ShopContext';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';

const PlaceOrder = () => {
  const [method,setMethod]=useState('cod');

  const {navigate}=useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row mx-auto max-w-[1000px]">
      {/* left side */}
      <div className="sm:max-w-[400px] flex flex-col gap-5">
        <div className="flex items-start py-6 ">
          <Title text1={"delivery"} text2={"information"} />
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="first name"
            className="border-2 p-1 capitalize w-full"
          />
          <input
            type="text"
            placeholder="last name"
            className="border-2 p-1 capitalize w-full"
          />
        </div>
        <input
          type="email"
          placeholder="email address"
          className="border-2 p-1 capitalize w-full"
        />
        <input
          type="text"
          placeholder="street"
          className="border-2 p-1 capitalize w-full"
        />
        <div className="flex gap-4 items-center">
          <input
            type="text"
            placeholder="city"
            className="border-2 p-1 capitalize w-full"
          />
          <input
            type="text"
            placeholder="state"
            className="border-2 p-1 capitalize w-full"
          />
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            placeholder="zip code"
            className="border-2 p-1 capitalize w-full"
          />
          <input
            type="text"
            placeholder="country"
            className="border-2 p-1 capitalize w-full"
          />
        </div>
        <input
          type="number"
          placeholder="phone"
          className="border-2 p-1 capitalize w-full"
        />
      </div>
      {/* ......................... right side.................. */}
      <div className="max-w-4xl ml-8 my-10 flex flex-col gap-y-7">
        <div>
          <CartTotal />
        </div>
        {/* ...........payment method ................ */}
        <div className="flex flex-col">
          <div className="text-xl flex  self-start">
            <Title text1={"payment"} text2={"method"} />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 my-4">
            <div
              onClick={() => setMethod("stripe")}
              className="border flex items-center gap-5 p-2 px-5 "
            >
              <p
                className={`border w-5 h-5 rounded-full p-2 ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="text-sm w-14" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="border flex items-center gap-5 p-2 px-5 "
            >
              <p
                className={`border min-w-5 min-h-5 rounded-full p-2 ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="text-sm w-24" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="border flex items-center gap-5 p-2 px-5 "
            >
              <p
                className={`border w-5 h-5 rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="whitespace-nowrap uppercase text-gray-600">
                cash on delivery
              </p>
            </div>
          </div>
          <button
            onClick={() => navigate("/orders")}
            className="flex self-end p-3 px-16 bg-black text-white"
          >
            place order{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder
