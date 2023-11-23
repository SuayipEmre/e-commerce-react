import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderTitle : React.FC = () => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/')} className='cursor-pointer'>FakeStore</div>
  )
}

export default HeaderTitle