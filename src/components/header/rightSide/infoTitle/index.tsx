import React from 'react'

type propsType = {
  title : string
}
const Info : React.FC<propsType> = ({title}) => {
  return (
    <span className='hidden lg:block '>{title}</span>
  )
}

export default Info