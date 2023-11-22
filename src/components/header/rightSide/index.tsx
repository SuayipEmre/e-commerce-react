import React from 'react'
import SignIn from './sign-in'
import Favorites from './my-favorites'
import Basket from './basket'

const RightSide:React.FC  = () => {
  return (
    <div className='flex gap-4 items-center'>
        <SignIn />
        <Favorites />
        <Basket />
    </div>
  )
}

export default RightSide