import { useState } from "react";
import Body from "./components/Body"
import Card from "./components/Card"

function App() {

  const [color,setColor]=useState();

const buttonClicked=()=>{
  console.log("Button is Clicked");
  setColor(color=="black"?"white":"black")
}

  return (
    <>
    <div style={{backgroundColor:color}}>

      {console.log("Hello, Friends")}   {/* it will print on console */}
      <h1 className="text-3xl text-red-500">Hello React</h1>
      <Card id="1" name="new card"/>
      <Body/>
      <button className="bg-slate-200 rounded p-1" onClick={buttonClicked}>Click Here!</button>
    </div>
    </>
  )
}

export default App
