import { useState } from "react"
import axios from "axios"
import Orderlist from "../lists/orderlist"


const Customcard = ()=> {
   const [loader,setLoader]= useState(true)
   const [state,updateState]=useState([])
  
   const fetchHandler = async () =>{
    try{
      const res=await axios.get("https://dummyjson.com/recipes")
      const recipes= res.data.recipes
      console.log(recipes);

      if(res.status ===200){
        updateState(recipes)
        setLoader(false)
      } 
    }
    catch (err){

    }
   }

   const addHandler =(TargetItem) => {
    const newItem= [...state,TargetItem]
    updateState(newItem)
   }

   const deleteHandler =(TargetItem) => {
    const newItem= state.filter((each) => each.id!=TargetItem)
    updateState(newItem)
   }

   const allDelete =() => {
    const newItem=[]
    updateState(newItem)
   }

  return(
    <>
      {
        loader?
        <>
          <h2>Please Wait . . .</h2>
          <button onClick={fetchHandler}>Fetch</button>
        </> :
        <table className="table table-striped">
          <thead>
              <tr>
                  <th colSpan={8}><button onClick={allDelete}>Delete - List</button></th>
              </tr>
              <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Recipe Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">cuisine</th> 
                  <th scope="col">Ingredents</th>
                  <th scope="col">Instructions</th>
                  <th scope="col">Add Item</th>
                  <th scope="col">Delete Item</th>

              </tr>

          </thead>
          <tbody>
              {
                state.map((each) => {
                  return(
                    <>
                      <tr>
                        <th scope="row">{each.id}</th>
                        <td>{each.name}</td>
                        <td><img src={each.image} width={100} height={100}/></td>
                        <td>{each.cuisine}</td>
                        <td><Orderlist list={each.ingredients}/></td>
                        <td><Orderlist list={each.instructions}/></td>
                        <td><button onClick={() => addHandler(each)}>Add</button></td>
                        <td><button onClick={() => deleteHandler(each.id)}>Delete</button></td>
                      </tr>
                    </>
                  )
                })
              }

          </tbody>

        </table>
      }
    </>
  )
}

export default Customcard;