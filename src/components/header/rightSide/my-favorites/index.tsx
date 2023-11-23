import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import Info from '../infoTitle';
const Favorites: React.FC = () => {
  return (
    <div className='flex items-center gap-1 cursor-pointer group'>
      <AiOutlineHeart className='cursor-pointer group-hover:text-orange' size={21} />
      <div className='group-hover:text-orange'>
        <Info title='My Favorites' />
      </div>
    </div>
  )
}

export default Favorites