import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card2'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username: "Github",
    age:22
  }

  let newArr=[1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS Test</h1>

      <Card name="Deepanker" somObj={newArr} btnText="Click me"/>  {/* passing values using variables */}
      <Card name="Deepanker200" />
    </>
  )
}

export default App
