import React, { useCallback, useState } from 'react'
import ChildCallback from './ChildCallback';

const ParentCallback = () => {

const [counterOne,setCounterOne]=useState(0);
const [counterTwo,setCounterTwo]=useState([]);

const IncrementOne=()=>{
    setCounterOne(counterOne+1)
}


//If we send props then useCallback has to be used
const fun=useCallback(()=>{
    console.log("Hello Parent");
    
},[counterTwo])

  return (
    <div>
        <ChildCallback counterTwo={counterTwo} fun={fun}/>
        <button onClick={IncrementOne}>Count: {counterOne }</button>
    </div>
  )
}

export default ParentCallback