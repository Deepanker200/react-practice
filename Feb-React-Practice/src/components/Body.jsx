import React from 'react'
import { Outlet } from 'react-router'
import Head from './Head'

const Body = () => {
  return (
    <div>
        <Head/>
        <Outlet/>
        <h1>Body</h1>
    </div>
  )
}

export default Body