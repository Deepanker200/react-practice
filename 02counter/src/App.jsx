import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter=15;

  const addValue = () => {
    // counter=counter+1;
    console.log(counter);

    if (counter < 20) {
      setCounter(counter+1)
    }

  }

  const removeValue = () => {
    console.log(counter);

    if (counter > 0) {
      setCounter(counter-1)
    }
  }

  //Interview Question

  // let [counter, setCounter] = useState(15)
  // // let counter=15;

  // const addValue = () => {
  //   // counter=counter+1;
  //     setCounter((prevCounter)=>prevCounter+1)
  //     setCounter((prevCounter)=>prevCounter+1)
  //     setCounter((prevCounter)=>prevCounter+1)
  //     setCounter((prevCounter)=>prevCounter+1)
  //     // setCounter(counter+1)
  //     // setCounter(counter+1)
  //     // setCounter(counter+1)
  //   }

  return (
    <>
      <h1>New React Project-2</h1>
      <h2>Counter value: 5</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
