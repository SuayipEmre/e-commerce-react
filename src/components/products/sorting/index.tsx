import React from 'react'
import { setSortValue } from '~/redux/features/sorting/actions'

const Sorting: React.FC = () => {

    const handleSortChange = (e:React.ChangeEvent<HTMLSelectElement>) =>   setSortValue(e.target.value)
    
    
    return (
        <div className='col-span-5 md:col-span-1  flex items-center gap-2 mb-4 border-b my-3' >
            <span>price</span>
            <select 
            onChange={(e) => handleSortChange(e)}
            className=' cursor-pointer text-orange bg-black/80 py-1 outline-none rounded-sm text-center'>
                <option disabled>Please select one</option>
                <option value="inc">Increment</option>
                <option value="dec">Decrement</option>
            </select>
        </div>
    )
}

export default Sorting