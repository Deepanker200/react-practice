import React,{memo} from 'react'

const ChildCallback = ({counterTwo,fun}) => {
    console.log("Child")
  return (
    <div>ChildCallback</div>
  )
}

export default memo(ChildCallback)