import React from 'react'
import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa' 

const Header = () => {
    return (
        <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
            {/* LOGO */}
            <div className="flex items-center gap-2">
                
                <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
            </div>

            {/* SEARCH */}
            <div className='flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5 py-2 w-[500px]'>
                <FaSearch className="text-[#f5f5f5]" />
                <input 
                    type='text' 
                    placeholder='Search' 
                    className='bg-transparent text-[#f5f5f5] outline-none w-full'
                />
            </div>

            {/* LOGGED USER DETATILS */}
            <div className='flex items-center gap-4'>
                <div className='bg-[#1f1f1f] rounded-[15] p-3 cursor-pointer'>
                    <FaBell className='text-[#f5f5f5] text-2xl'/>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                    <FaUserCircle className='text-[#f5f5f5] text-4xl'/>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-md text-[#f5f5f5] font-semibold'>Belaoud Ayoub</h1>
                        <p className='text-xs text-[#ababab] font-medium'>Admin</p>
                    </div>
                </div>
            </div>
            
        </header>
    )
}

export default Header