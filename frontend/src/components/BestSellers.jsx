import React, { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../contexts/ShopContext";
import ProductItem from "./ProductItem";

const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);
   
  useEffect(()=>{
    const bestSellerProduct = products.filter((item) => item.bestseller);
    setBestSellers(bestSellerProduct.slice(0,5));
  },[products])
  return (
    <div>
      <div>
        <Title text1={"best"} text2={"sellers"} />
        <p className="w-36 h-[2px] bg-slate-700 my-5 mx-auto"></p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-7">
        {bestSellers.map((item, index) => {
          return (
            <ProductItem
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              id={item._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
