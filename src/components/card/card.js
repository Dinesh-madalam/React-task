import { Component } from 'react'
import './card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomProgressBar from '../bootstrap/progress-bar';

class Customcard extends Component {
    state = {
        productlist : [],
        loader : true,
        error : false
    }

    fetchHandler(){
        fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then(((data) =>{ 
            // console.log(data)
            return (
                this.setState({
                    productlist : data,
                    loader : false
                })
            );
        }))
        
    }

    Precentage = (rate,base) =>{
        var percent = (rate/base)*100
        return percent;
    }

    IncrementHandler = (targetProductId) => {
        const UpdatedProduct = this.state.productlist.map((each) => {
            if(each.id === targetProductId){
                return {...each, rating : {...each.rating, rate : each.rating.rate + 1}}
            }
            else{
                return {...each}
            }
        })

        this.setState({
            productlist : UpdatedProduct
        })
    }
    
    DecrementHalndler = (targetProductId) => {
        const UpdatedProduct = this.state.productlist.map((each) => {
            if(each.id === targetProductId){
                return {...each, rating: {...each.rating, rate : each.rating.rate - 1}}
            }
            else{
                return {...each}
            }
        })

        this.setState({
            productlist : UpdatedProduct
        })
    }

    render() {

        return(
            <>
            {
                this.state.loader ? 
                <>
                <h1>Please wait</h1>
                <button onClick={() => this.fetchHandler()}>click</button>
                </>: 
                <div className='flex'>
                {
                    this.state.productlist.map((eachProduct) => <div className='card'>
                        <h6>{eachProduct.title}</h6>
                        <img src={eachProduct.image} className='image'/>
                        <p>{`Rating : ${eachProduct.rating.rate}`}</p><br/>
                        <CustomProgressBar scale={this.Precentage(eachProduct.rating.rate,5)}/>
                        <button onClick={()=> this.IncrementHandler(eachProduct.id)}>Like</button>
                        <button onClick={()=> this.DecrementHalndler(eachProduct.id)}>Dislike</button>
                        </div>)
                }
                </div>
            }
            </>
        )
    }
}


export default Customcard;