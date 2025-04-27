import React from 'react'

// function card(props) {
  function card({name,btnText="Visit my profile2"}) {
  // console.log("Props: ",props);
  console.log(name);
  
  return (
    <>
        <div className="w-60 h-60 rounded-xl mb-4">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10 bg-sky-500">
          <h1 className="font-bold  font-mono  text-xl">{name}</h1>
          <h1 className="font-bold  font-mono  text-xl">{btnText}</h1>
          {/* <h1 className="font-bold  font-mono  text-xl">{btnText || "Visit my profile"}</h1> */}
          {/* <h1 className="font-bold  font-mono  text-xl">{name}{btnText}</h1> */}
        </div>
      </div>
    </>
  )
}

export default card