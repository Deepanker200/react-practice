import React, { useContext } from 'react'
import About2 from './About2'
import Subj from '../utils/ContextData'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import Memo from './Memo'

const About = (props) => {

  const { name, name2, name3 } = props

  const s = useContext(Subj)

  const dispatch = useDispatch()


  const handleItems = () => {
    dispatch(addItem(1))
  }

  return (
    <>
      <div>About: {name}</div>
      {/* Props Drilling */}
      <div>
        <About2 name={name2} />
      </div>
      <div>About: {name2}</div>
      <div>About: {name3}</div>
      <p>{s}</p>

      <button onClick={handleItems}>Increase Items</button>

      {/* Memo */}
      <Memo/>
    </>
  )
}

export default About