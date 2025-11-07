import React, { memo } from 'react'

const RenderedLog = () => {
    console.log("I'm rendered 2");
    
  return (
    <div>RenderedLog</div>
  )
}

export default memo(RenderedLog)