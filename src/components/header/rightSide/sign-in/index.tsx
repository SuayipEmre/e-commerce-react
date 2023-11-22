import React from 'react'
import { CiUser } from "react-icons/ci";
import Info from '../infoTitle';
const SignIn :React.FC = () => {
  return (
    <div className='flex items-center gap-1'>
        <CiUser  size={20}/>
        <Info title = 'Sign In' />
    </div>
  )
}

export default SignIn