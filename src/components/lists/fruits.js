import {Fruits} from"./fruitsdata"

const  Listfruits= () =>{
    // const Fruits =[ "Apple","Beetroot" , "Carrot"]
    return (
        <>
            {Fruits.map((eachFruit) => (
                <li>{eachFruit.name}  {eachFruit.price} /kg</li>
            ))}
        </>
    )
}

export default Listfruits ;