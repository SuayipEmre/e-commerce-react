import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import Info from '../infoTitle';
const Basket: React.FC = () => {
  return (
    <div className='flex items-center cursor-pointer gap-1 group'>
      <CiShoppingBasket size={22} className='group-hover:text-orange' />
      <div className='group-hover:text-orange'>
        <Info title='Basket' />
      </div>
    </div>
  )
}

export default Basket