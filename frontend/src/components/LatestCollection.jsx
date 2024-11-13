import React, { useContext, useEffect, useState } from "react";

import { ShopContext } from "../contexts/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

     useEffect(()=>{
         setLatestProducts(products.slice(0,10));
     },[products])

  return (
    <div>
      <div>
        <Title text1={"latest"} text2={"Collection"} />
        <p className="w-36 h-[2px] bg-slate-700 my-5 mx-auto"></p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-7 my-7">
           {latestProducts.map((item,index)=>(<ProductItem key={index} image={item.image}  price={item.price}  name={item.name} id={item._id} />))}
      </div>
    </div>
  );
};

export default LatestCollection;
