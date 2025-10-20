
const Card = (props) => {   
    // console.log(props);
    const {id,name}=props

  return (
    <>
    <div>{id}</div>
    <div>{name}</div>
    </>
  )
}

export default Card