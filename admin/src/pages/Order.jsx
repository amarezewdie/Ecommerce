import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";

const Order = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrder = async () => {
    if (!token) {
      toast.error("Token not provided. Please log in.");
      return null;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/api/order/list",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (res.data.success) {
        setOrders(res.data.orders);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [token]);

  const statusHandler = async (e, orderId) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/order/status",
        {
          orderId,
          status: e.target.value,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.data.success) {
        fetchOrder();
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">Order Page</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            {/* Parcel Icon */}
            <div className="flex items-center mb-4">
              <img
                src={assets.parcel_icon}
                alt="Parcel Icon"
                className="w-12 h-12 mr-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Order ID: {order._id}
              </h4>
            </div>

            {/* Order Items */}
            <div className="mb-4">
              {order.items.map((item, index) => (
                <p key={index} className="text-sm text-gray-700">
                  {item.name} x {item.quantity}{" "}
                  <span className="text-gray-500">
                    {item.sizes}
                    {index < order.items.length - 1 && ","}
                  </span>
                </p>
              ))}
            </div>

            {/* Address */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-gray-800">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p className="text-sm text-gray-600">
                {order.address.street}, {order.address.city},{" "}
                {order.address.state}, {order.address.country} -{" "}
                {order.address.zipCode}
              </p>
              <p className="text-sm text-gray-600">
                Phone: {order.address.phone}
              </p>
            </div>

            {/* Order Details */}
            <div className="mb-4">
              <p className="text-sm text-gray-700">
                Items: {order.items.length}
              </p>
              <p className="text-sm text-gray-700">
                Method: {order.paymentMethod}
              </p>
              <p className="text-sm text-gray-700">
                Payment:{" "}
                <span
                  className={`font-semibold ${
                    order.payment ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {order.payment ? "Done" : "Pending"}
                </span>
              </p>
              <p className="text-sm text-gray-700">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
            </div>

            {/* Amount */}
            <p className="text-lg font-bold text-gray-800 mb-4">
              ${order.amount.toFixed(2)}
            </p>

            {/* Order Status */}
            <select
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
              className="w-full p-2 border border-gray-300 rounded-lg text-sm"
              defaultValue="place order"
            >
              <option value="place order">Place Order</option>
              <option value="packing">Packing</option>
              <option value="shipped">Shipped</option>
              <option value="out for delivery">Out for Delivery</option>
              <option value="delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
