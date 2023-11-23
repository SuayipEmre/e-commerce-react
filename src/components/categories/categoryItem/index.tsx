import classNames from 'classnames'
import React from 'react'

type propsType = {
  item: string
  mobile?:boolean
}

const CategoryItem: React.FC<propsType> = ({ item, mobile }) => {

  return (
    <div className={classNames('col-span-4 my-3   md:col-span-1 cursor-pointer',{
      'border-b' : mobile
    })}>
      <p >{item}</p>
    </div>
  )
}

export default CategoryItem