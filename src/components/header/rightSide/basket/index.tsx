import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import Info from '../infoTitle';
import { useNavigate } from 'react-router-dom';
import { useCart } from '~/redux/features/cart/hooks';

const Basket: React.FC = () => {
  const navigate = useNavigate()
  const cart = useCart()

  const handleClick = () => {
    navigate('/myCart')
  }

  return (
    <div
    onClick={handleClick}
    className='flex relative items-center cursor-pointer gap-1 group'>
      <CiShoppingBasket size={22} className='group-hover:text-orange' />
      <div className='group-hover:text-orange'>
        <Info title='Basket' />
      </div>
      <div className='absolute -top-4 text-orange left-[6.7px] text-[15px]'>
        {cart.length}
      </div>
    </div>
  )
}

export default Basket