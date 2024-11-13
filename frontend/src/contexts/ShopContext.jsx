import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const currency = "$";
  const delivery_fee = 10;
  const navigate=useNavigate();


  /* ......... add to cart ................... */

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("please select size");
      return;
    }
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  /* ...... get cart count .............. */

const getCartCount=()=>{
  let totalCount=0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        
      } catch (error) {
        console.log(error)
      }
    
    }
  } 
  return totalCount;
}

/* ...... cart total ................... */

 const totalCartAmount = () => {
   let totalAmount = 0;

   for (const itemId in cartItems) {
     // Find the product information for the given item ID
     const cartInfo = products.find((product) => product._id === itemId);

     if (cartInfo) {
       // Ensure product exists in the products array
       try {
         // Loop through each size in the cart for this product
         for (const size in cartItems[itemId]) {
           const quantity = cartItems[itemId][size];
           if (quantity > 0) {
             totalAmount += cartInfo.price * quantity;
           }
         }
       } catch (error) {
         console.log(error.message);
       }
     } else {
       console.log(`Product with ID ${itemId} not found in products list.`);
     }
   }

   return totalAmount;
 };


 const updateQuantity=async(itemId,size,quantity)=>{
   let cartData=structuredClone(cartItems);
   cartData[itemId][size]=quantity;
   setCartItems(cartData);
    
 }

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    totalCartAmount,
    navigate
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
