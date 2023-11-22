import React from 'react'
import { AiTwotoneHeart } from "react-icons/ai";
import Info from '../infoTitle';
const Favorites:React.FC  = () => {
  return (
    <div className='flex items-center gap-1'>
        <AiTwotoneHeart size={20} className='cursor-pointer text-red-700' /> 
        <Info title='My Favorites' />
    </div>
  )
}

export default Favorites