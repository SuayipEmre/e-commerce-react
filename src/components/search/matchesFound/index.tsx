import React from 'react'
import { useSearchValue } from '~/redux/features/searchProducts/hooks'
import { MatchesFoundPropsType } from './type'


const MatchesFound : React.FC<MatchesFoundPropsType> = ({amount}) => {
    const searchValue = useSearchValue()
    return (
        <div className='text-center mt-3 mb-3  font-light text-green-600'>
           {
            searchValue && <p className='shadow-sm'>{amount} results for <span>"{searchValue}"</span> </p> 
           }
        </div>
    )
}

export default MatchesFound