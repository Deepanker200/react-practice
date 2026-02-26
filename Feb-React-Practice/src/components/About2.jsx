import React, { useContext, useEffect, useRef } from 'react'
import useCustomHook from '../utils/useCustomHook'
import Search from './Search';
import HOC, { withHoc } from './HOC';
import Subj from '../utils/ContextData';

const About2 = ({ name }) => {

  // Custom Hook
  const val = 10
  const { initial, increment, decrement, reset } = useCustomHook(val);

  useEffect(() => {
    console.log("The value of val: ",initial)
  })

  //HOC
  const HigherComponent = withHoc(HOC)


  //Context API
  const subject=useContext(Subj)


  return (
    <div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <p>{initial}</p>
      </div>
      This is from About2: {name}
      <Search />
      <HOC name="Deepanker" />
      <HigherComponent name="Harry" />
      <p>{subject}</p>

    </div>
  )
}

export default About2