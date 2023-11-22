import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput: React.FC = () => {
  return (
    <div className='relative   w-full'>
      <input className='bg-[#f3f3f3]   focus:border-[#F27919] mt-4   px-2 outline-none  py-2 w-60  rounded-lg   md:mt-0 md:w-[512px]' type="text" placeholder='Search FakeStore' />
      <AiOutlineSearch className='text-[#F27919]  absolute top-6 right-2 md:top-2  md:right-2' size={23} />
    </div>
  )
}

export default SearchInput




