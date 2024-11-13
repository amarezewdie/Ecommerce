import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLetter from '../components/NewLetter';

const Contact = () => {
  return (
    <div>
      <Title text1={"contact"} text2={"us"}  />
      <div className="flex flex-col sm:flex-row gap-10 items-center my-7">
        <div className="max-w-lg">
          <img src={assets.contact_img} alt="" />
        </div>
        <div className="flex-flex-col justify-center items-center">
          <p> Tel: (000) 555-0132</p>
          <p>email :amarezwdie19@gamil.com</p>
          <button className="border capitalize hover:bg-black hover:text-white transition ease-in-out px-4 py-2 mt-3 ">
            explore more
          </button>
        </div>
      </div>
      <div className='mt-16'>
        <NewLetter />
      </div>
    </div>
  );
}

export default Contact
