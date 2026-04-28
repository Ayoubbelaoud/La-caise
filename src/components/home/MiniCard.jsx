import React from 'react'
const MiniCard = ({title, icon, number, footerNum}) => {
    return (
        <div className='bg-[#1a1a1a] py-5 px-5 rounded-lg w-[50%]'>
           <div className='flex items-start justify-between'>
              <h1 className='text-[#f5f5f5] text-lg font-semibold tracking-wide'>{title}</h1>
              <button className={`${title === "Total Earnings" ? "bg-[#02ca3a]" :"bg-[#f6b100]" }`}>{icon}</button>
           </div>
           <div>
              <h1>{number}</h1>
              <button>{footerNum} than yesterday</button>
           </div>
        </div>
    )
}

export default MiniCard