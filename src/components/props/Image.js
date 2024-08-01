const Image=(prop)=>{
    const {source,alternate}=prop
    return(<img src={source} alt={alternate} width={100}></img>)
}
export default Image;
    

// const Heading=(prop)=>{
//     // console.log(prop.childern)
//     return(
//     <h1>{prop.childern}</h1>
//     )
// }
// export default Heading ;