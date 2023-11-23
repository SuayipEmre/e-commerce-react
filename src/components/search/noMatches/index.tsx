import React from 'react'
import { useSearchValue } from '~/redux/features/searchProducts/hooks'

const NoMatches: React.FC = () => {
  const searchValue = useSearchValue()
  return (
    <div className='mt-4 text-center'>
      <p className='text-orange font-extrabold'>No results for "{searchValue}"</p>
      <span className='text-light text-gray-500 text-[12px]'>Try checking your spelling or use more general terms</span>
      
    </div>
  )
}

export default NoMatches

