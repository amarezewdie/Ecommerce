import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import { ShopContext } from "../contexts/ShopContext";
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
     

/* ................... toggle Category .................... */
   const toggleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory((perv)=>perv.filter((item)=>item!==e.target.value));
    }else{
      setCategory((perv)=>[...perv,e.target.value]);
    }
   }
   const toggleSubCategory=(e)=>{
    if(subCategory.includes(e.target.value)){
       setSubCategory((perv)=>perv.filter((item)=>item!==e.target.value));
    }else{
      setSubCategory((perv)=>[...perv,e.target.value]);
    }
   }
/* ...................... apply filter on the product ....................*/
    const applyFilter=()=>{
      let productCopy=products.slice();
      if(category.length > 0){
            productCopy = productCopy.filter((item) =>
              category.includes(item.category)
            );
      }
      if(subCategory.length > 0){
        productCopy=productCopy.filter((item)=>subCategory.includes(item.subCategory));
      }
      if(search && showSearch){
        productCopy=productCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));
      }
     setFilterProduct(productCopy);
    }

    useEffect(()=>{
      applyFilter()
    },[search,showSearch,category,subCategory,products])


  /* sort the product */
    const sortProduct=()=>{
       let sortProductCopy=products.slice();
       switch(sortType){
         case 'low-high':
          sortProductCopy=sortProductCopy.sort((a,b)=>a.price - b.price)
          break;
          case 'high-low':
            sortProductCopy=sortProductCopy.sort((a,b)=>b.price - a.price)
            break;
            default:
              applyFilter()
       }
       setFilterProduct(sortProductCopy);
    }
    useEffect(()=>{
      sortProduct()
    },[sortType,products])

  return (
    <div className="flex flex-col sm:flex-row max-w-[1000px] mx-auto my-14">
      {/* left side */}

      <div className="flex flex-col gap-10 min-w-60">
        <p className=" flex items-center text-2xl font-semibold">
          FILTERS
          <img
            src={assets.dropdown_icon}
            className={`h-3 sm:hidden font-semibold mx-3 transition ease-in-out ${
              showFilter ? "rotate-90" : ""
            } `}
            onClick={() => setShowFilter(!showFilter)}
          />
        </p>
        <div
          className={`border pr-32 border-gray-400 p-3 ${
            showFilter ? "" : "hidden"
          } sm:block `}
        >
          <p className="text-xl pb-1">CATEGORIES</p>
          <p>
            <input
              type="checkbox"
              className="mr-3 capitalize font-semibold"
              value={"Men"}
              onChange={toggleCategory}
            />
            men
          </p>
          <p>
            <input
              type="checkbox"
              className="mr-3 capitalize font-semibold"
              value={"Women"}
              onChange={toggleCategory}
            />
            Women
          </p>
          <p>
            <input
              type="checkbox"
              className="mr-3 capitalize font-semibold"
              value={"Kids"}
              onChange={toggleCategory}
            />
            kids
          </p>
        </div>

        <div
          className={`border border-gray-400 p-3 ${
            showFilter ? "block" : "hidden"
          } sm:block `}
        >
          <p className="text-xl pb-1">TYPE</p>
          <p>
            <input
              type="checkbox"
              className="mr-3 capitalize font-semibold"
              value={"Topwear"}
              onChange={toggleSubCategory}
            />
            TopWear
          </p>
          <p>
            <input
              type="checkbox"
              className="mr-3 capitalize font-semibold"
              value={"Bottomwear"}
              onChange={toggleSubCategory}
            />
            BottomWear
          </p>
          <p>
            <input
              type="checkbox"
              className="mr-3 capitalize font-semibold"
              value={"Winterwear"}
              onChange={toggleSubCategory}
            />
            WinterWear
          </p>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col gap-5 ml-8">
        <div className="flex justify-between items-center">
          <div>
            <Title
              text1={"all"}
              text2={"collections"}
              className="flex justify-between items-center"
            />
          </div>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-700"
          >
            <option value="relevant">sort by:relevant</option>
            <option value="high-low">sort by:high to low</option>
            <option value="low-high">sort by:low to high</option>
          </select>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gapy-7">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              image={item.image}
              price={item.price}
              name={item.name}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
