import React from 'react'
import { CiUser } from "react-icons/ci";
import Info from '../infoTitle';
const SignIn: React.FC = () => {
  return (
    <div className='flex items-center gap-1 cursor-pointer group'>
      <CiUser size={20} className='group-hover:text-orange' />
      <div className='group-hover:text-orange'>
        <Info title='Sign In' />
      </div>
    </div>
  )
}

export default SignIn