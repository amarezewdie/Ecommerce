import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const List = ({ token }) => {
  const [list, setList] = useState([]);
  const fetchProduct = async () => {
    try {
      const res = await axios.get(backendUrl + "/api/product/list");
      if (res.data.success) {
        setList(res.data.products);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const removeProduct = async (id) => {
    try {
      if (!id) {
        console.log("Error: No product ID provided!");
        return; // Exit early if no id is provided.
      }

      const res = await axios.delete(backendUrl + `/api/product/remove/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data.success) {
        /* // Update the state to remove the deleted product from the list
        setList((prevList) => prevList.filter((item) => item._id !== id));     ..................or .........*/

        await fetchProduct();

        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    removeProduct();
  }, []);

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <p className="text-xl capitalize">all products</p>
      <div className="flex flex-col">
        {/*   list  title */}
        <div className="flex justify-between items-center w-full gap-6 capitalize  border-b-2 px-5 py-2 sm:gap-36">
          <b className="w-20 self-start">image</b>
          <b className="self-start">name</b>
          <b className="self-start">category</b>
          <b>price</b>
          <b className="self-start">action</b>
        </div>

        <div>
          {list.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between gap-6 w-full sm:gap-32 border-b-2 px-4 py-2 items-center"
              >
                <img className="w-20 self-start " src={item.image[0]} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p
                  onClick={() => removeProduct(item._id)}
                  className="cursor-pointer"
                >
                  X
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
