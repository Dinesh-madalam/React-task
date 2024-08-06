
// import { Component } from "react";
// import axios from "axios";



import { Component } from "react";
import axios from "axios";

class CustomTable extends Component  {
    state = {
        content: [],
        loader: true,
        error: false
    }

    ehandler = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/recipes');
            console.log(response.data.recipes);
            this.setState({
                content: response.data.recipes,
                loader: false,
            })
        } catch (er) {
            this.setState({
                error: true,
                loader: false
            })
        }
    }

    componentDidMount() {
        this.ehandler();
    }

    render() {
        return (
            <>
                <h1>Table</h1>
                {
                    this.state.loader ?
                        <h1>Please Wait. . .</h1> :
                        <>
                            <table className="table">
                                <tbody>
                                    {
                                        this.state.content.map((each) => {
                                            return (
                                                <tr key={each.id}>
                                                    <th scope="row">{each.id} </th>
                                                    <td>{each.name}</td>
                                                    <td>{each.mealType}</td>
                                                    <td>{each.cuisine}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </>
                }
            </>
        )
    }
}

export default CustomTable;



// class CustomTable extends Component() {
//     state={
//         content:[],
//         loader:true,
//         error:false
//     }
//     ehandler = async () => { 
//         try{
//             const response=await axios.get('https://dummyjson.com/recipes');
//             console.log(response.data.recipes);
//             this.setState({
//                 content:response.data.recipes,
//                 loader:false,
//             })
    
//         }
//         catch(er){
//             this.setState({
//                 error:true,
//                 loader:false
//             })
//         }
//     }
//     componentDidMount(){
//         this.ehandler ();
//     }
//     render(){
//         return(
//             <>
//                 <h1>Table</h1>
//                 {
//                     this.state.loader?
//                     <h1>Please Wait. . .</h1>:
//                     <>
//                         <table className="table">
//                             <tbody>
//                                 {
//                                     this.state.content.map((each)=>{
//                                         return(
//                                             <>
//                                                 <tr key={each.id}>
//                                                     <th scope="row">{each.id} </th>
//                                                     <td>{each.name}</td>
//                                                     <td>{each.mealType}</td>
//                                                     <td>{each.cuisine}</td>
//                                                 </tr>
//                                             </>
//                                         )
//                                     })
//                                 }
//                             </tbody>
//                         </table>
//                     </>
//                 }
//             </>
//         )
//     }
// }

// export default CustomTable;