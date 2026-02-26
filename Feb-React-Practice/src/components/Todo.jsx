import React, { useState } from 'react'

const Todo = () => {

    const [text, setText] = useState("")
    const [list, setList] = useState([])

    const addItem = () => {
        setList([...list, text])
        setText("")
    }

    const deleteTodo = (index) => {
        setList(list.filter((_, i) => i != index))
    }

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)} />


            <button onClick={addItem}>Submit</button>

            {list.map((i, index) => {
                return <h1 key={index}>{i}
                    <button className='bg-black text-white rounded m-2 py-1.5 px-2' onClick={() => deleteTodo(index)}>Delete</button>
                </h1>
            })}

            <p>
                {list}
            </p>
        </div>
    )
}

export default Todo