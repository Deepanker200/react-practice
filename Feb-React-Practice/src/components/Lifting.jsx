import React, { useState } from 'react'
import Lift1 from './Lift1';
import Lift2 from './Lift2';

const Lifting = () => {
    const [count, setCount] = useState(0)
    const increment=()=> setCount(count+1);
    const decrement=()=> setCount(count-1);

    return (
        <div>
            <Lift1 increment={increment}/>
            <Lift2 decrement={decrement}/>
            <p>Value of Count: {count}</p>
        </div>
    )
}

export default Lifting