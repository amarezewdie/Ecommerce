import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewLetter from '../components/NewLetter';

const About = () => {
  return (
    <div className="flex flex-col mt-7">
      <Title text1={"about"} text2={"us"} />
      <div className="flex flex-col items-start sm:flex-row gap-12 my-7">
        <div className="sm:min-w-[500px] sm:min-h-[600px] mt-5">
          <img src={assets.about_img} alt="" className="w-full" />
        </div>
        <div className="flex flex-col gap-5 mt-10">
          <p className="text-gray-400">
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-gray-400">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <div className="flex self-start text-sm">
            <Title text1={"our"} text2={"mission"} />
          </div>

          <p className="text-gray-400">
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className="flex self-start ">
        <Title text1={"why"} text2={"CHOOSE US"} />
      </div>
      <div className='flex-col sm:flex-row mb-12'>
        <div className="border max-w-sm p-16 mt-6">
          <p className="text-xl font-semibold">Quality Assurance:</p>
          <p>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border max-w-sm p-16 mt-6">
          <p className="text-xl font-semibold">Convenience:</p>
          <p>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border max-w-sm p-16 mt-6">
          <p className="text-xl font-semibold">Exceptional Customer Service:</p>
          <p>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <div>
      </div>
      <NewLetter />
    </div>
  );
}

export default About
