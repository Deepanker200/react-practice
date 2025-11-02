import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItems, deleteItems } from '../utils/todoSlice';



const TodoStore = () => {
    
    const dispatch = useDispatch();
    const store=useSelector(store=>store.todo.items)
    const [searchValue, setSearchValue] = useState("")

    const addTodo=(searchValue)=>{
        dispatch(addItems(searchValue))
    }

    const deleteTodo=(index)=>{
        dispatch(deleteItems(index))
        console.log("Deleted");
        
    }

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='bg-blue-300 w-1/2 text-center'>Todo List Redux Store
                    <br />
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input 
                        value={searchValue}
                        onChange={(e)=>setSearchValue(e.target.value)}
                        className='border-1 mt-2' />
                        <button
                        onClick={()=>addTodo(searchValue)}
                        className='bg-black text-white mx-2 py-1.5 px-2 rounded'>Submit</button>
                    </form>

                    {store.map((i,index)=><h1 key={index}>{i} 
                        <button 
                        onClick={()=>deleteTodo(index)}
                        className='bg-black text-white px-2 py-1.5 rounded'>Delete</button>
                    </h1>)}
                </div>
            </div>
        </>
    )
}

export default TodoStore