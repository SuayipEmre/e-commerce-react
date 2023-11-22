import React from 'react'
import { CiShoppingBasket } from "react-icons/ci";
import Info from '../infoTitle';
const Basket : React.FC = () => {
  return (
    <div className='flex items-center gap-1'>
        <CiShoppingBasket  size={22}/>
        <Info title='Basket' />
    </div>
  )
}

export default Basket