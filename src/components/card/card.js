// import Heading1, { Heading2 } from "../headings/headings";
// import CustomImage from "../image/image";
import IplData from "../../ipl_List/ipldata"
import IplHeading from "../../ipl_List/iplheading"
import CustomProgressBar from "../bootstrap/progress-bar"
import "./card.css"
import { Component } from "react"




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


class Customcard extends Component{

  state = {
      array : IplData,
  }

  incrementhandler=(targetteam)=> {
      const Updatedlist = this.state.array.map((each) => {
          if(each.name==targetteam){
              return {...each, cups : each.cups+1}
          }else{
              return {...each}
          }
      }) 

      const newState = Updatedlist;

      this.setState({
          array : newState,
      })
  }

  decrementhandler=(targetteam, wins)=> {
      const Updatedlist = this.state.array.map((each) => {
          if(each.name==targetteam){
              return {...each, cups : each.cups-1}
          }else{
              return {...each}
          }
      })

      this.setState({
          array : Updatedlist,
      })
  }

  percent(cups){
      var p = (cups/17)*100;
      return p;
  }

  render() {


  return(
     <>
           <>
            {
                this.state.array.map((each) => {
                    return(
                        <div className='body'>
                          <div key={each.team} style={{height:"500px", width:"300px", border:"2px solid black",margin:10}}>
                        <IplHeading team={each.team}/>
                        <img src={each.image} style={{width:"200px", height:"200px"}}/>
                        <h3>{each.name}</h3>
                        {/* <button>See more...</button><br/> */}
                        <CustomProgressBar scale={this.percent(each.cups)}/>
                        <br/>
                        <button onClick={() => this.incrementhandler(each.name)}>Increment</button>
                        <button onClick={() => this.decrementhandler(each.name, each.cups)}>Decrement</button><br/><br/>
                        </div>
                        </div>
                    );
                })
            }
            </>
     </>
  )
}
}
  //          {
  //             this.state.array.map((eachipl) => (
                 
  //                   <div className="body">
                   
  //                     <div key={eachipl.team} style={{height:"500px", width:"300px", border:"2px solid black",margin:10}} >
  //                       <IplHeading team={eachipl.team}/>
  //                       <IplImage
  //                       source={eachipl.image}
  //                       alternate="ipl image"
  //                       width={200}
  //                       height={200}/>
  //                       <IplCups cups={eachipl.cups}/>
  //                       <Iplplayers players={eachipl.players}/>
  //                       {/* <CustomProgressBar scale={eachipl.cups} style={{width:"100px"}}/> */}
  //                       <Customcard/>
                      
                      
  //                     </div>
  //                  )}
    
  //                    </div> 
  //              }
  //          )
  //    }          


export default Customcard;