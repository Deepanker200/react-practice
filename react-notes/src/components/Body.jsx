import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import UserContext from '../utils/userContext'


const Body = () => {

    //Context
    const {loggedInUser}=useContext(UserContext);
    // console.log(data);
    


    return (
        <>
        
            <h1 className='bg-red-500 text-white'>Navbar</h1>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
        {loggedInUser}
            </li>
            <Outlet />
            <h1 className='bg-blue-500 text-white'>Footer</h1>
        </>
    )
}

export default Body