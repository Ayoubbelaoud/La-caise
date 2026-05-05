import React from 'react'
import {FaCheckDouble} from 'react-icons/fa'

const TableCard = () => {
    return (
        <div className='w-[300px] bg-[#262626] p-4 rounded-lg cursor-pointer'>
            <div className='flex items-center justify-between px-1'>
                <h1 className='text-[#f5f5f5] text-xl font-semibold'>Table 1</h1>
                <p className='text-green-600 bg-[#2e4a40] px-2 py-1 rounded-lg'> <FaCheckDouble className='inline mr-2' />Booked</p>
            </div>
            <div className='flex items-center justify-center my-5'>
                <h1 className='bg-[#025cca] text-white rounded-full p-5 text-xl'>AM</h1>
            </div>

        </div>
    )
}

export default TableCard