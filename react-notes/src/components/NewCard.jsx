
const NewCard = (props) => {
    const {resData}=props;
    // console.log("Here:", resData);
    // console.log(resData.login);
    
    
    // const {login}=resData;


  return (
    <div className='text-3xl text-red-500'>{resData.info.id}</div>
  )
}

export default NewCard