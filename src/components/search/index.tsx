import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { setSearchValue } from '~/redux/features/searchProducts/actions';
import { useSearchValue } from '~/redux/features/searchProducts/hooks';
const SearchInput: React.FC = () => {
  const searchValue = useSearchValue()
  
  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) : object =>  setSearchValue(e.target.value)

  return (
    <div className='relative   w-full'>
      <input
      onChange={(e) => handleChange(e)}
      value={searchValue}
      className='bg-[#f3f3f3]   focus:border-orange mt-4   px-2 outline-none  py-2 w-60  rounded-lg   md:mt-0 md:w-[512px]' type="text" placeholder='Search FakeStore' />
      <AiOutlineSearch className='text-orange absolute top-6 right-2 md:top-2  md:right-2' size={23} />
    </div>
  )
}

export default SearchInput




