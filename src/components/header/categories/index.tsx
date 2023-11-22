import React from 'react'
import { useCategories } from '~/redux/features/categories/hooks'
import CategoryItem from './categoryItem';
import { IoCloseSharp } from "react-icons/io5";
import { setModal } from '~/redux/features/modal/actions';
import { useModal } from '~/redux/features/modal/hooks';
import classNames from 'classnames';
const Categories: React.FC = () => {
  const categories = useCategories()
  const modal = useModal()



 


  return (
    <div>

      <div className='block md:hidden'>
        <div className={classNames('absolute hidden top-0 my-4 left-0 w-[70vw] z-10  bg-white',{
          '!block': modal
        })}>

          <div className='flex items-center px-4 py-2 justify-between md:hidden'>
            <p className='border-e border-black pe-4'>fakeStore</p>
            <IoCloseSharp onClick={() => setModal(!modal)} size={23} />
          </div>

          <div className='grid  grid-cols-4 px-4   w-full  mt-3 '>
            {
              categories.map((item) => (
                <CategoryItem mobile={true} key={item} item={item} />
              ))
            }
          </div>
        </div>
      </div>


      <div className='hidden md:block'>
        <div className='grid  grid-cols-4 px-4  gap-4  w-1/2   mt-3 ms-52 '>
          {
            categories.map((item) => (
              <CategoryItem key={item} item={item} />
            ))
          }
        </div>
      </div>

    </div>

  )
}

export default Categories