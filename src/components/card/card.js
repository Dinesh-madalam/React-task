// import Heading1, { Heading2 } from "../headings/headings";
// import CustomImage from "../image/image";
import "./card.css"

// const Card= (prop) =>{
//   const {name,cups,image}=prop
//   return(
//     <div>
//     <Heading1 data={name}></Heading1>
//     <CustomImage data={image}></CustomImage>
//     <Heading2 data={cups}></Heading2>
//     </div>
//   )
  
// };

// export default Card;

const Card = ( ) => {
  return (
    <div style= {{height:"400px",Width:"250px" ,border:"2px solid green" }}>
    <img  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"  height={100} width={200} />
    <p>id : 1</p>
    <p>title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"</p>
    <p>"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"</p>
    <p>"category":"men's clothing"</p>
    </div>
  
  )
}

export default Card;