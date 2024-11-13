import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products, currency, cartItems,updateQuantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div>
      {cartData.length > 0 ? (
        <div className="mb-64 p-3">
          <Title text1={"your"} text2={"cart"} />
          <div>
            {cartData.map((item) => {
              const product = products.find(
                (product) => product._id === item._id
              );
              return (
                <div className="grid grid-cols-2 gap-7 border-t border-b p-3">
                  <div className="flex gap-6">
                    <div>
                      <img
                        src={product.image[0]}
                        alt=""
                        className="w-20 text-start"
                      />
                    </div>

                    <div className="flex flex-col gap-6">
                      <p className="text-2xl font-semibold">{product.name}</p>
                      <div className="flex gap-10 items-center">
                        <p>
                          {currency} {product.price}
                        </p>
                        <p className="border px-3 py-1 bg-gray-100">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-x-36 items-center justify-between ml-16">
                    <input
                      onChange={(e) =>
                        e.target.value === "" || e.target.value < 1
                          ? updateQuantity(item._id, item.size, 0)
                          : updateQuantity(
                              item._id,
                              item.size,
                              Number(e.target.value)
                            )
                      }
                      type="number"
                      className="border max-w-10 sm:max-w-20 p-2 text-center "
                      defaultValue={item.quantity}
                    />
                    <img
                      onClick={() => updateQuantity(item._id, item.size, 0)}
                      src={assets.bin_icon}
                      alt=""
                      className="w-5 h-5 font-semibold cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col justify-between">
            <CartTotal />
            <button
              onClick={() => navigate("/place-order")}
              className="flex self-end p-3 uppercase bg-black text-white my-3 rounded-sm px-7"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center mb-96 my-14">
          <Title text1={"your cart is "} text2={"empty"} />
        </div>
      )}
    </div>
  );
};

export default Cart;
