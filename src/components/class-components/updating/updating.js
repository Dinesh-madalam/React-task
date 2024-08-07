import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";
import { Component } from "react";
import { renderToReadableStream } from "react-dom/server";


class Update extends Component  {
    constructor(){
        super()
        this.state ={
            cakeCount :100,
        }
    }
    buyCakeHandler = () => {
        this.setState({
            cakeCount:this.state.cakeCount-1,
        })
    };

    shouldComponentUpdate() {
        return  true;
    }
    getSnapshotBeforeUpdate(prevprop,prevState) {
        console.log(prevState);
        return null;
        
    }

    componentDidMount () {
        document.title=`Cake Count ${this.state.cakeCount}`
    } 
    
    componentDidUpdate(){
        document.title=`Cake Count ${this.state.cakeCount}`
    
    }
    
    render(){
        console.log("Render executing. . .");
        
        return(
        <div>
            <h3>Cakes Available in the shop : {this.state.cakeCount}</h3>
            <button onClick={this.buyCakeHandler}>Buy Cake</button>
            </div>
        )
    }
}

export default Update;