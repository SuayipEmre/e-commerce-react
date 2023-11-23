import React from 'react'
import { itemType } from '../types';
import Rating from '~/components/productRating';
import { useNavigate } from 'react-router-dom';



const ProductItem: React.FC<itemType> = ({ productItem }) => {

  const navigate = useNavigate()


  return (
    <div className='col-span-12 rounded-lg  bg-slate-50 sm:col-span-6 md:col-span-4 lg:col-span-3   py-4 '>
      <div className='flex py-6 items-center justify-center'>
        <img onClick={() => navigate(`productdetails/${productItem.id}`)} className='h-48 cursor-pointer' src={productItem.image} alt="" />
      </div>
      <div className='px-2 py-3'>
        <p className='px-4 leading-12 '>{productItem.title}</p>
      </div>

      
      <Rating rate={productItem.rating.rate} count = {productItem.rating.count} padding={true}  />
  
        
        <p className='mt-4 px-2 text-orange'>{productItem.price} $</p>

    </div>
  )
}

export default ProductItem