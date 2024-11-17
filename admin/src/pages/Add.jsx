import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [size, setSize] = useState([]);
  const [bestSeller, setBestSeller] = useState(false);
  const [price, setPrice] = useState("");

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append individual fields
    formData.append("name", name); // Add name
    formData.append("description", description); // Add description
    formData.append("category", category); // Add category
    formData.append("subCategory", subCategory); // Add subCategory
    formData.append("bestseller", bestSeller); // Add bestSeller (boolean)
    formData.append("price", price); // Add price

    // Append the size array as JSON (convert it to a string)
    formData.append("sizes", JSON.stringify(size));

    // Append images if they exist
    image1 && formData.append("image1", image1);
    image2 && formData.append("image2", image2);
    image3 && formData.append("image3", image3);
    image4 && formData.append("image4", image4);
    try {
      const res = await axios.post(backendUrl + "/api/product/add", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token
        },
      });
      if(res.data.success){
        toast.success(res.data.message)
        setDescription('');
        setName('');
        setPrice('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
      }else{
        toast.error(res.data.message);
      }
     
    } catch (error) {
       toast.error(error.message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-8 flex w-full flex-col gap-4">
      <div className="flex flex-col gap-3">
        <p className="capitalize font-semibold text-gray-400">upload image</p>

        {/* .............image upload ............................................ */}
        <div className="flex gap-4">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div>
        {/* ................product info .............................. */}
        <div className="w-full mb-2">
          <p className=" capitalize text-gray-400">product name</p>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full py-2 px-3 max-w-[500px]"
            required
          />
        </div>
        <div className="w-full">
          <p className=" capitalize text-gray-400">product deception</p>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            className="w-full py-2 px-3 max-w-[500px]"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>
          <p className="text-gray-400 capitalize pb-2">product category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="px-5 py-2 capitalize"
          >
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
          </select>
        </div>
        <div>
          <p className="text-gray-400 capitalize pb-2"> sub category</p>
          <select
            onChange={(e) => setSubCategory(e.target.value)}
            className="px-5 py-2 capitalize"
          >
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
          </select>
        </div>
        <div>
          <p className="text-gray-400 capitalize pb-2">product price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            className="px-5 py-2 max-w-32"
          />
        </div>
      </div>

      {/* ..................product size ...................................... */}
      <div className="flex flex-col gap-3 ">
        <p className="text-gray-400 capitalize">product size</p>
        <div className="flex gap-4 items-center">
          <p
            onClick={() =>
              setSize((perv) =>
                perv.includes("S")
                  ? perv.filter((item) => item !== "S")
                  : [...perv, "S"]
              )
            }
            className={`${
              size.includes("S") ? "bg-black text-white" : "bg-gray-200"
            } px-3 py-1 rounded-sm uppercase cursor-pointer  `}
          >
            S
          </p>
          <p
            onClick={() =>
              setSize((perv) =>
                perv.includes("M")
                  ? perv.filter((item) => item !== "M")
                  : [...perv, "M"]
              )
            }
            className={`${
              size.includes("M") ? "bg-black text-white" : "bg-gray-200"
            } px-3 py-1 rounded-sm uppercase cursor-pointer`}
          >
            m
          </p>
          <p
            onClick={() =>
              setSize((perv) =>
                perv.includes("L")
                  ? perv.filter((item) => item !== "L")
                  : [...perv, "L"]
              )
            }
            className={`${
              size.includes("L") ? "bg-black text-white" : "bg-gray-200"
            } px-3 py-1 rounded-sm uppercase cursor-pointer  `}
          >
            l
          </p>
          <p
            onClick={() =>
              setSize((perv) =>
                perv.includes("XL")
                  ? perv.filter((item) => item !== "XL")
                  : [...perv, "XL"]
              )
            }
            className={`${
              size.includes("XL") ? "bg-black text-white" : "bg-gray-200"
            } px-3 py-1 rounded-sm uppercase cursor-pointer `}
          >
            xl
          </p>
          <p
            onClick={() =>
              setSize((perv) =>
                perv.includes("XXL")
                  ? perv.filter((item) => item !== "XXL")
                  : [...perv, "XXL"]
              )
            }
            className={`${
              size.includes("XXL") ? "bg-black text-white" : "bg-gray-200"
            } px-3 py-1 rounded-sm uppercase cursor-pointer `}
          >
            xxl
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <input
          onChange={(e) => setBestSeller((perv) => !perv)}
          checked={bestSeller}
          type="checkbox"
          id="bestseller"
          className="focus:outline-none"
        />
        <label
          htmlFor="bestseller"
          className="text-gray-400 capitalize cursor-pointer"
        >
          add to best seller
        </label>
      </div>
      <button className="px-4 py-3 uppercase bg-black text-white max-w-28">
        add
      </button>
    </form>
  );
};

export default Add;
