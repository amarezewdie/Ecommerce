import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { ShopContext } from '../contexts/ShopContext'
import { useLocation } from 'react-router-dom';

const Search = () => {

   const {Search,setSearch,showSearch,setShowSearch} =useContext(ShopContext) ;
   const location=useLocation();
   const [visible,setVisible]=useState()
    
   useEffect(()=>{
      if(location.pathname.includes('collection')){
        setVisible(true)
      }else{
        setVisible(false)
      }
   },[location])

  return showSearch &&visible ? (
    <div>
       <div className=' border-b flex items-center justify-center p-4 my-3'>
          <div className='flex flex-1 p-2  bg-white border rounded-3xl max-w-lg mr-3'>
            <input type="text" placeholder='search'  className='bg-white flex-1 focus:outline-none' onChange={(e)=>setSearch(e.target.value)}/>
            <img src={assets.search_icon} alt="" className='w-6 p-1' />
          </div>
          <img src={assets.cross_icon} alt="" className='w-8 p-2 cursor-pointer' onClick={()=>setShowSearch(false)}/>
       </div>
    </div>
  ) : null
}

export default Search
