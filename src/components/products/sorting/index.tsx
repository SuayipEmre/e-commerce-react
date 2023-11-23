import React from 'react'
import { setSortValue } from '~/redux/features/sorting/actions'

const Sorting: React.FC = () => {

    const handleSortChange = (e : any) => {
      setSortValue(e.target.value)
      
    }
    
    return (
        <div className='col-span-5 md:col-span-1  flex items-center gap-2 mb-4 border-b my-3' >
            <span>price</span>
            <select 
            onChange={(e) => handleSortChange(e)}
            className='border border-[#F27919] cursor-pointer outline-none rounded-sm'>
                <option disabled>Please select one</option>
                <option value="inc">Increment</option>
                <option value="dec">Decrement</option>
            </select>
        </div>
    )
}

export default Sorting