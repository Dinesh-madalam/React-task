import { useState } from "react";
import "./addSquare.css"

const AddSquare = () => {
    const [state,updateState]= useState([1,1,1])
    const addHandler = () =>{
        const newState =[...state,1]
        updateState(newState)
    }
    return (
        <>
            <button onClick={addHandler}>Click to add a Square</button>
            {
                state.map((each)=>{
                    return(
                        <div className="square"></div>
                    )
                })
            }
        </>
    )
}

export default AddSquare;