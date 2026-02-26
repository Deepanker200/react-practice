import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [message, setMessage] = useState("")

    const value = (data) => {
        setMessage(data)
    }

    return (
        <div>
            <Child sendData={value}/>
            <p>{message}</p>
        </div>
    )
}

export default Parent