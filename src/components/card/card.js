// import { render } from "@testing-library/react";
import { Component } from "react";
import axios from "axios";


class Customcard extends Component{
  state={
    content:[],
    loader:true,
    error:false,
  }
  Ehandler = async() => {
    try{
      let responce=await axios.get("https://restcountries.com/v3.1/all").then(res=>res)

      if(responce.state===200){
        this.setState({
          content :responce.data,
          loader:false
        })
      }
    }
    catch(err){
      this.setState({
        error:true,
        loader:false
      })
    }
  }
  componentDidMount() {
    this.Ehandler()
  }
    render(){
      return(
        <>
        <h2>Country</h2>
        {
          this.state.loader?
          <>
          <h1>Please Wait...</h1>
          </>:
          this.state.content.map((each)=><h1>{each.name.common}</h1>
        )
        }
        </>
      )
  }
}

export default Customcard;