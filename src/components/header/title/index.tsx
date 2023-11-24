import React from 'react'
import { useNavigate } from 'react-router-dom'
import { setSearchValue } from '~/redux/features/searchProducts/actions'

const HeaderTitle : React.FC = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
    setSearchValue('')
  }
  return (
    <div onClick={handleClick} className='cursor-pointer text-orange'>FakeStore</div>
  )
}

export default HeaderTitle