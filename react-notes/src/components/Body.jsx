import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const Body = () => {
    return (
        <>
        
            <h1 className='bg-red-500 text-white'>Navbar</h1>
            <li>
                <Link to="/about">About</Link>
            </li>
            <Outlet />
            <h1 className='bg-blue-500 text-white'>Footer</h1>
        </>
    )
}

export default Body