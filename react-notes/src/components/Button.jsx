import React, { useRef } from 'react'

const Button = () => {

let btnRef=useRef(0)

const handleUseRef=()=>{
    // btnRef.current=btnRef.current+1
    btnRef.current.style.backgroundColor="red";     //either can change DOM or values at a time
    console.log("BTN Value: ",btnRef.current);
}


  return (
    <div ref={btnRef} className='bg-blue-500 text-white w-[100px] rounded p-2 cursor-pointer' onClick={handleUseRef}>Button</div>
  )
}

export default Button