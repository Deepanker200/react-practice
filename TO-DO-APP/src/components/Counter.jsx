import React, { useState } from 'react'

const Counter = () => {

    const [displayValue, setDisplayValue] = useState(0)

    const increase = () => {
        setDisplayValue(displayValue + 1)
    }


    const decrease = () => {
        if(displayValue<=0) return
        setDisplayValue(displayValue - 1)
    }

    const reset=()=>{
        setDisplayValue(0)
    }

    return (
        <>
            <div className='border border-1 w-1/2 h-[100px] flex items-center justify-center text-white bg-blue-500 text-3xl'>Counter: {displayValue}</div>
            <button className='bg-green-500 px-2 py-1.5 rounded mt-[50px] me-5'
                onClick={increase}
            >Increase Button⬆️</button>

            <button className='bg-red-500 px-2 py-1.5 rounded mt-[50px] me-5'
                onClick={decrease}
            >Decrease Button⬇️</button>


        <button className='bg-black px-2 py-1.5 rounded mt-[50px] text-white'
                onClick={reset}
            >Reset Button</button>
        </>
    )
}

export default Counter