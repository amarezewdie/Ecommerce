import React, { useContext, useState } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const {products,currency,totalCartAmount}=useContext(ShopContext)
  return (
    <div>
      <div className=" flex self-start">
        <Title text1={"my"} text2={"orders"} />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex-col gap-5  p-3 w-full">
          {products.slice(1, 5).map((item, index) => (
            <div
              key={index}
              className="flex gap-5  border-b border-t p-3 items-center justify-between "
            >
              <div className='flex gap-4'>
                <div className="flex self-start ">
                  <img src={item.image[0]} alt="" className="w-16 sm:w-24" />
                </div>
                <div>
                  <p>{item.name}</p>
                  <div className=" flex gap-3 p-2">
                    <p>
                      {currency} {totalCartAmount()}
                    </p>
                    <p>quantity : 1 </p>
                    <p>size: M</p>
                  </div>
                  <p> Date{Date(Date.now().toLocaleString())}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="w-3.5 h-3.5 rounded-full border bg-green-300"></p>
                <p className="capitalize">ready to ship</p>
              </div>

              <div>
                <button className="border p-2">track order</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders
