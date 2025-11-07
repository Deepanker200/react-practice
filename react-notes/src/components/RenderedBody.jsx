import React, { useState } from 'react'
import RenderedLog from './RenderedLog';

const RenderedBody = () => {
    const [count,setCount]=useState(0)

    const counter=()=>{
        setCount(count+1)
    }
    console.log("Rendered new component 1");
    
  return (
    <div>
        <button onClick={counter}>Click:{count}</button>
        <RenderedLog/>
    </div>
  )
}

export default RenderedBody