import React, { useState } from "react";
import Title from "../components/Title";
import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    token,
    cartItems,
    setCartItems,
    totalCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      const orderData = {
        address: formData,
        items: orderItems,
        amount: totalCartAmount() + delivery_fee,
      };
      switch (method) {
        case "cod":
          const res = await axios.post(
            "http://localhost:5000/api/order/place",
            orderData,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (res.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(res.data.message);
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row mx-auto max-w-[1000px]"
    >
      {/* Left Side */}
      <div className="sm:max-w-[400px] flex flex-col gap-5">
        <div className="flex items-start py-6 ">
          <Title text1={"delivery"} text2={"information"} />
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="first name"
            className="border-2 p-1 capitalize w-full"
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="last name"
            className="border-2 p-1 capitalize w-full"
            onChange={onChangeHandler}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="email address"
          className="border-2 p-1 capitalize w-full"
          onChange={onChangeHandler}
          required
        />
        <input
          type="text"
          name="street"
          value={formData.street}
          placeholder="street"
          className="border-2 p-1 capitalize w-full"
          onChange={onChangeHandler}
          required
        />
        <div className="flex gap-4 items-center">
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="city"
            className="border-2 p-1 capitalize w-full"
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="state"
            value={formData.state}
            placeholder="state"
            className="border-2 p-1 capitalize w-full"
            onChange={onChangeHandler}
            required
          />
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            name="zipCode"
            value={formData.zipCode}
            placeholder="zip code"
            className="border-2 p-1 capitalize w-full"
            onChange={onChangeHandler}
            required
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            placeholder="country"
            className="border-2 p-1 capitalize w-full"
            onChange={onChangeHandler}
            required
          />
        </div>
        <input
          type="number"
          name="phone"
          value={formData.phone}
          placeholder="phone"
          className="border-2 p-1 capitalize w-full"
          onChange={onChangeHandler}
          required
        />
      </div>

      {/* Right Side */}
      <div className="max-w-4xl ml-8 my-10 flex flex-col gap-y-7">
        <div>
          <CartTotal />
        </div>

        {/* Payment Method */}
        <div className="flex flex-col">
          <div className="text-xl flex self-start">
            <Title text1={"payment"} text2={"method"} />
          </div>
          <div className="flex flex-col lg:flex-row gap-5 my-4">
            <div
              onClick={() => setMethod("stripe")}
              className="border flex items-center gap-5 p-2 px-5"
            >
              <p
                className={`border w-5 h-5 rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="text-sm w-14" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="border flex items-center gap-5 p-2 px-5"
            >
              <p
                className={`border w-5 h-5 rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="text-sm w-24" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="border flex items-center gap-5 p-2 px-5"
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
            type="submit"
            className="flex self-end p-3 px-16 bg-black text-white"
          >
            place order
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
