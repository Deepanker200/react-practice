import React, { useState } from 'react'

const Todo = () => {

    const [task, setTask] = useState("")
    const [todo, setTodo] = useState([]);


    const addItems = () => {
        setTodo([...todo, task])
        console.log(todo);
    }

    const deleteTodo = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='bg-orange-300 w-1/2 text-center'>
                    Items to be done: {todo.length}
                    <br />
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input value={task} onChange={(e) => setTask(e.target.value)} className='mt-5 h-[30px]' />
                        <button
                            onClick={addItems}
                            className='bg-black text-white px-2 py-1.5 rounded mx-3'>Submit</button>
                    </form>
                    {todo.map((i, index) => {
                        return <h1 key={index}>{i}
                            <button className='bg-black text-white rounded m-2 py-1.5 px-2' onClick={()=>deleteTodo(index)}>Delete</button>
                        </h1>
                    })}
                </div>
            </div>
        </>
    )
}

export default Todo