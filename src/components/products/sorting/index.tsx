import React from 'react'

const Sorting: React.FC = () => {
    
    return (
        <div className='col-span-5 md:col-span-1  flex items-center gap-2 mb-4 border-b my-3' >
            <span>price</span>
            <select className='border border-[#F27919] cursor-pointer rounded-sm'>
                <option disabled>Please select one</option>
                <option value="inc">Increment</option>
                <option value="dec">Decrement</option>
            </select>
        </div>
    )
}

export default Sorting