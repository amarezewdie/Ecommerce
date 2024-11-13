import React, { useContext } from 'react'
import { ShopContext } from '../contexts/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const { totalCartAmount, currency, delivery_fee } = useContext(ShopContext);
  return (
    <div className="flex flex-col justify-between min-w-[400px] max-w-4xl mx-auto  mr-8">
      <div className="mb-6 self-start">
        <Title text1={"cart"} text2={"totals"} />
      </div>
      <div className=" flex justify-between border-b  p-3 capitalize">
        <p>sub total</p>
        <p>
          {currency} {totalCartAmount()} .00
        </p>
      </div>
      <div className="flex justify-between border-b p-3 capitalize">
        <p>shaping fee</p>
        <p> {delivery_fee} .00</p>
      </div>
      <div className="flex justify-between border-b p-3 capitalize">
        <p>total</p>
        <p>
          {currency}{" "}
          {totalCartAmount() === 0 ? 0 : totalCartAmount() + delivery_fee}.00
        </p>
      </div>
    
    </div>
  );
}

export default CartTotal
