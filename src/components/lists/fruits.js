const  Listfruits= () =>{
    const fruits =["Apple","Banana","Carrot"]
    return (
        <>
            {fruits.map((eachFruit) => {
                <li>{eachFruit}</li>
            })}
        </>
    )
}

export default Listfruits ;