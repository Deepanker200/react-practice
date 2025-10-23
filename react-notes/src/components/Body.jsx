import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import UserContext from '../utils/userContext'
import { useSelector } from 'react-redux';


const Body = () => {

    //Context
    const { loggedInUser } = useContext(UserContext);
    // console.log(data);

    const cartItems = useSelector((store) => store.cart.items)

    return (
        <>

            <h1 className='bg-red-500 text-white'>Navbar</h1>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                {loggedInUser}
            </li>
            <li>
                Cart:{cartItems.length}
            </li>
            <Outlet />
            <h1 className='bg-blue-500 text-white'>Footer</h1>
        </>
    )
}

export default Body