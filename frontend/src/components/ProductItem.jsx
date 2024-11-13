
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../contexts/ShopContext'


const ProductItem = ({image,name,id,price}) => {
  const {currency}=useContext(ShopContext);
  return (
    <Link to={`/products/${id}`}>
        <div>
          <div className='overflow-hidden mb-3'>
             <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out'/>
          </div>
          <p>{name}</p>
          <p className='font-semibold'>{currency} {price}</p>
        </div>
    </Link>
  )
}

export default ProductItem
