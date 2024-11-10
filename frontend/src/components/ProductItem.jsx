import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../contexts/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  console.log('id'.id)
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/products/${id}`} className="cursor-pointer">
      <div>
        <div className="overflow-hidden">
          <img src={image[0]} alt="" className="hover:scale-110 transition ease-in-out " />
        </div>
        <p className="text-sm text-slate-400 capitalize font-semibold p-2">{name}</p>
        <p className="text-sm text-slate-800 font-semibold py-3">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
