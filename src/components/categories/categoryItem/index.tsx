import classNames from 'classnames'
import React from 'react'
import { setModal } from '~/redux/features/modal/actions'
import { fetchProductByCategory } from '~/redux/features/products/actions'
import { setSearchValue } from '~/redux/features/searchProducts/actions'
import { categoryItemPropsType } from './type'



const CategoryItem: React.FC<categoryItemPropsType> = ({ item, mobile }) => {

  const handleCategoryClick = (): void => {
    fetchProductByCategory(item)
    setModal(false)
    setSearchValue('')
  }

  return (
    <div
      onClick={handleCategoryClick}
      className={classNames('col-span-5 my-3 hover:text-orange   md:col-span-1 cursor-pointer', {
        'border-b': mobile
      })}>
      <p>{item}</p>
    </div>
  )
}

export default CategoryItem