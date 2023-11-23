import React from 'react'
import { useSearchValue } from '~/redux/features/searchProducts/hooks'

type amountType = {
    amount : number
}
const MatchesFound : React.FC<amountType> = ({amount}) => {
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