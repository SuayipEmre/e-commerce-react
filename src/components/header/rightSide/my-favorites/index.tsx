import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import Info from '../infoTitle';
import { useNavigate } from 'react-router-dom';
const Favorites: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div
    onClick={() => navigate('/myfavorites')}
    className='flex items-center gap-1 cursor-pointer group'>

      <AiOutlineHeart className='cursor-pointer group-hover:text-orange' size={21} />
      <div className='group-hover:text-orange'>
        <Info title='My Favorites' />
      </div>

    </div>
  )
}

export default Favorites