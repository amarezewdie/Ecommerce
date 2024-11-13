import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products,currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size,setSize]=useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div>
      <div className="flex gap-5">
        {/* start product data */}
        <div >
          {/*start  product image */}
          <div className="flex gap-6 ml-10">

            {/* ...........product image ......................... */}
            <div className="flex sm:flex-col max-w-[170px] gap-4  overflow-x-auto sm:overflow-y-scroll justify-between">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  key={index}
                  src={item}
                  className="h-[110px] object-cover"

                />
              ))}
            </div>
            <div className="w-[280] h-auto">
              <img src={image} alt="" className="object-cover w-full" />
            </div>
          </div>

          {/* end   product image */}
        </div>
        {/* start  product info */}
        <div className="flex-1 mx-6">
          <h1 className="text-2xl m-3">{productData.name}</h1>
          {/* ..........product stars...................... */}
          <div className="flex gap-2 my-4  ">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p>(122)</p>
          </div>
          <p className="font-bold my-1 text-2xl">
            {currency}
            {productData.price}
          </p>
          <p className="text-gray-400 p-2">{productData.description}</p>
          <div className="flex flex-col gap-2 my-10">
            <p className="text-2xl capitalize ">select size</p>
            <div className="flex gap-5">

              {/* ...........product size .............. */}
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`bg-gray-200 text-black px-4 py-3 ${
                    item === size ? "border border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>
            <button
            onClick={()=>addToCart(productData._id,size)}
              className={`bg-black text-white p-3 w-[150px] mt-4 rounded-lg uppercase `}
            >
              add to cart
            </button>
            <hr className="w-3/4 h-[1.5px] bg-gray-300 my-6" />
            <div>
              <p className="text-sm text-gray-400">100% Original product.</p>
              <p className="text-sm text-gray-400">Cash on delivery is available on this product.</p>
              <p className="text-sm text-gray-400">Easy return and exchange policy within 7 days.</p>
            </div>
          </div>
        </div>

        {/* end product data */}
      </div>
     {/*...............related products...................... */}
     <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
