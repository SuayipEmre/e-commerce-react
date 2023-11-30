import React from 'react'
import { infoPropsType } from './type'


const Info : React.FC<infoPropsType> = ({title}) => {
  return (
    <span className='hidden lg:block '>{title}</span>
  )
}

export default Info