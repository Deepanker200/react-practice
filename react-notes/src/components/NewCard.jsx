
const NewCard = (props) => {
  const { resData } = props;
  // console.log("Here:", resData);
  // console.log(resData.login);


  // const {login}=resData;


  return (
    <>
      <div className="h-52 w-36 bg-blue-200">
        <div className='text-3xl text-red-500'>{resData.info.id}</div>
      </div>
    </>
  )
}

export const withOddOnes=(NewCard)=>{
  return(props)=>{
    return(
       <div className="h-56 bg-black w-40">
        <NewCard {...props}/>
      </div>
    )
  }
}

export default NewCard