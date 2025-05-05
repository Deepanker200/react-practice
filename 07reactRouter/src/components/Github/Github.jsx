import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data=useLoaderData()      //It is linked with githubInfoLoader
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Deepanker200')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log();
    //             setData(data)

    //         })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white'>Github Followers:{data.followers}
        <img src={data.avatar_url} alt="" width={300}/>Git Image
        </div>
    )
}

export default Github

export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Deepanker200')
    return response.json()
}