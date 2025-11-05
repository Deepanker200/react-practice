import React from 'react'

const Lift1 = ({setLift}) => {
  return (
    <div>
        <input onChange={(e)=>setLift(e.target.value)} className='border-2 border-black'/>
    </div>
  )
}

export default Lift1