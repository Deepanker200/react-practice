import React, { useRef, useState } from 'react'

const Controlled = () => {

    const [controlledValue, setControlledValue] = useState("")
    const unControlled = useRef("")

    const controlFn = (e) => {
        setControlledValue(e.target.value)
    }
    

    // const uncontrolFn = (e) => {
    //     unControlled.current=e
    // }

    const submit=()=>{
        // alert(controlledValue)
        alert(unControlled.current.value)
    }

    return (
        <div>
            {/* <input value={controlledValue} onChange={controlFn} /> */}
            <input ref={unControlled}/>
            <button onClick={submit}>Submitted</button>
        </div>
    )
}

export default Controlled