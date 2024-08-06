import { Component } from "react";


export class Counter extends Component(){
    state={
        count:10,
    }
    incrementHandler= () =>{
        this.setState(
            {
                count:this.state.count+1,
            },
            ()=>{}
        )
    }
    decrementHandler= () =>{
        this.setState(
            {
                count:this.state.count-1,
            },
            ()=>{}
        )
    }
    resetHandler =() =>{
        this.setState(
            {
                count:0
            }
        )
    }
    render(){
        return(
            <>
                <h3>My count</h3>
                <h4>{this.state.count}</h4>
                <button onClick={this.incrementHandler}>Increment</button> 
                <button onClick={this.decrementHandler}>Decrement</button>            
                <button onClick={this.resetHandler}>Reset</button> 
            </>
        )
    }
}