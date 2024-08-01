import { Component } from "react";
import ConditionalRendering from "../conditional/conditional-rendering";



class SubscribeComponent extends Component {
    // State 
    state={
        isSubscribe:false,
        text1:"Subscribe",
        text2:"Subscribed"

    };
    handleclick= () =>{
        console.log("clicked")

        this.setState(
            {
                isSubscribe:!this.state.isSubscribe ,
            },
            () => {}
        );
    }
   render(){
    return(
        <>
            <button onClick={this.handleclick}>
                {this.state.isSubscribe?this.state.text2:this.state.text1}
            </button>
            {this.state.isSubscribe ? (
                <>
                <h2>Thanks for Subscribing</h2>
                {/* <ConditionalRendering/> */}
                </>
            ):(
                <h2>Please Subscribe to access the content</h2>
            )}
        </> 
        )
    }

}

export default SubscribeComponent;