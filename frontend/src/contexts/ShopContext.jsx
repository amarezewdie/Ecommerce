import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(null);

  /*  ............constant........... */
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(import.meta.env);

  console.log("Backend URL:", backendUrl);

  /* ................fetch the product from the backend .................. */
  const fetchProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/product/list");
      if (res.data.success) {
        console.log(res.data);

        setProducts(res.data.products);
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

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
    /* ..... item added to db ............... */
    if (token) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/cart/add",
          { itemId, size },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  /* ...... get cart count .............. */

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalCount;
  };

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
  /* ............. update quantity .................... */
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    if (token) {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/cart/update",
          {
            itemId,
            size,
            quantity,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
    }
  };

  const getUserCart = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/cart/get",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("token", token);
      if (res.data.success) {
        setCartItems(res.data.cartData);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  /* .......if not token in state and token available in localStorage  set token to localStorage token .................*/
  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    getUserCart();
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    totalCartAmount,
    navigate,
    backendUrl,
    token,
    setToken,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
export default ShopContextProvider;
