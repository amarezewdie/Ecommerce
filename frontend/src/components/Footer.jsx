import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-14 my-5  mx-auto pt-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-[1120px] text-center">
        <div>
          <p className="text-2xl font-semibold uppercase pb-3">amare tech</p>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="text-gray-400">
          <p className="text-2xl font-semibold uppercase pb-3 text-black">
            COMPANY
          </p>
          <p className="capitalize font-semibold ">Home</p>
          <p className="capitalize font-semibold ">about us</p>
          <p className="capitalize font-semibold ">delivery</p>
          <p className="capitalize font-semibold "> privacy police</p>
        </div>
        <div>
          <p className="text-2xl font-semibold uppercase pb-3">GET IN TOUCH</p>
          <p className="text-gray-400">+1-000-000-0000</p>
          <p className="text-gray-400">amarezewdie19@gmail.com</p>
        </div>
      </div>
      <div className="w-full bg-slate-400 border "></div>
      <div>
        <p className="capitalize text-gray-400">
          Copyright 2024@ amareTech - all right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
