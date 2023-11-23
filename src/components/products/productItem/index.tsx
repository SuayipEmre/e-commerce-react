import React from 'react'
import { FaCamera } from "react-icons/fa";
import { itemType } from '../types';



const ProductItem: React.FC<itemType> = ({ productItem }) => {


  const rate = Math.round(productItem?.rating.rate);
  const star = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      star.push(<span key={i} className='text-[#fec000]'>★</span>);
    } else {
      star.push(<span key={i} className='text-gray-600'>★</span>);
    }
  }

  return (
    <div className='col-span-12 rounded-lg bg-slate-50 sm:col-span-6 md:col-span-4 lg:col-span-3   py-4 '>
      <div className='flex items-center justify-center'>
        <img className='h-48' src={productItem.image} alt="" />
      </div>
      <div className='px-2 py-3'>
        <p className='px-4 leading-12 '>{productItem.title}</p>
      </div>

      <div className='flex px-2  items-center gap-2'>
      <span>{star}</span>
         <span className='font-extralight text-[10px] text-gray-400'>({productItem.rating.count})</span>
         <span><FaCamera /></span>
      </div>
        
        <p className='mt-4 px-2 text-[#F27919]'>{productItem.price} $</p>

    </div>
  )
}

export default ProductItem