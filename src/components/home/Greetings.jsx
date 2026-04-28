import React, { useState, useEffect } from "react"

const Greetings = () => {
    const [dateTime, setDeateTime] = useState(new Date());
    useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return (
        <div className="flex justify-between items-center px-8 mt-5">
            <div>
                <h1 className="text-[#f5f5f5] text-2xl mb-2 font-semibold tracking-wide">Boujour, Ayoub</h1>
                <p className="text-[#ababab] text-sm">Rake wa3re</p>
            </div>
            <div>
                <h1 className="text-[#f5f5f5] text-3xl font-bold tracking-wide w-[130px]">{dateTime.toLocaleTimeString()}</h1>
                <p className="text-[#f5f5f5] text-sm">{dateTime.toLocaleDateString()}</p>
            </div>
        </div>
    )
}

export default Greetings