import React, { useEffect, useState } from 'react'

const SearchBar = () => {
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
            const timer = setTimeout(() => {
                console.log("Debounced function called: ", searchText);
            }, 200)

            return () => clearTimeout(timer)
    }, [searchText])


    return (
        <div>
            <input className='border border-black'
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
            />
        </div>
    )
}

export default SearchBar