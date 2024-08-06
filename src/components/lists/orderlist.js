


const Orderlist = (prop) => {
    const { list }=prop 
    return (
       
           <ol>
            {
              list.map((eachData) => <li> {eachData}</li>)
        
            }
           
           </ol>
       
    )      
}

export default Orderlist;

