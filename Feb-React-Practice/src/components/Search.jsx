import React, { useState } from 'react'

const Search = () => {

    const [text, setText] = useState("")
    return (
        <div>
            <input onChange={(e)=>setText(e.target.value)} value={text}/>
            <p>{text}</p>
        </div>
    )
}

export default Search