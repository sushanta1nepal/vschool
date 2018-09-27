import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
    constructor(){
        super()
        this.state = {
            Cars: [],
        }
    }
    componentDidMount(){
        axios.get('/cars').then (res => {
            this.setState({
                Cars: res.data
            })
            console.log(res)
        })
    }
    render(){
        return(
            <div>
                <h1>List of supercars</h1>
                {this.state.Cars.map(car =>
                <div>
                    <h1>{car.make} {car.model}</h1>
                    <h2>{car.price}</h2>
                    <h3>{car.horsePower}</h3>
                    <h4>{car.id}</h4>
                    <h3>{car.type}</h3>
                    </div>)}
                
            </div>
        )
    }
}

export default App