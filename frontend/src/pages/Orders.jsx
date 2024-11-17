import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

const Orders = () => {
  const { token, currency, totalCartAmount } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
  const order = async () => {
    try {
      if (!token) {
        return null;
      }
      const res = await axios.post(
        "http://localhost:5000/api/order/userOrder",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        let allOrders = [];
        res.data.orders.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allOrders.push(item);
          });
        });
        setOrderData(allOrders.reverse());
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    order();
  }, [token]);
  return (
    <div>
      <div className=" flex self-start">
        <Title text1={"my"} text2={"orders"} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-col gap-5  p-3 w-full">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="flex gap-5  border-b border-t p-3 items-center justify-between "
            >
              <div className="flex gap-4">
                <div className="flex self-start ">
                  <img src={item.image[0]} alt="" className="w-16 sm:w-24" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <div className=" flex gap-3 p-2">
                    <p>
                      {currency} {totalCartAmount()}
                    </p>
                    <p>quantity : {item.quantity} </p>
                    <p>size: {item.size}</p>
                  </div>
                  <p> Date {new Date(item.date).toDateString()}</p>
                  <p> paymentMethod {item.paymentMethod}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-3.5 h-3.5 rounded-full border bg-green-300"></p>
                <p className="capitalize">{item.status}</p>
              </div>

              <div>
                <button onClick={order} className="border p-2">
                  track order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
