import React from 'react'

const Child = ({sendData}) => {

    const btnClick=()=>{
        sendData("Hello from child")
    }
  return (
    <div>
        <button onClick={btnClick}>Change Parent Data</button>
    </div>
  )
}

export default Child