import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const RelatedProduct = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
   
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter((item) => category === item.category);
      productCopy = productCopy.filter(
        (item) => subCategory === item.subCategory
      );
      setRelatedProducts(productCopy.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <Title text1={"related"} text2={"product"} />
      <div className="w-32 h-[2px] bg-gray-400 my-5 mb-10 mx-auto "></div>
      <div className="grid grid-cols-2-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {relatedProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} price={item.price} image={item.image} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
