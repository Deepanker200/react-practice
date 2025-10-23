import React, { useState } from 'react'
import AccordionItems from './AccordionItems';

const AccordionComponent = (props) => {
    const { data,showItems,setShowIndex } = props;

    const handleClick = () => {
        // setShowItems(!showItems)

        setShowIndex()
        console.log("Clicked");
    }
    return (
        <>
            <div className='bg-slate-100 border-b-4 cursor-pointer' onClick={handleClick}>{data.title}</div>
            {showItems && <AccordionItems items={data.content} />}    
            </>
    )
}

export default AccordionComponent