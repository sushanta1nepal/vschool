import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
    constructor(){
        super()
        this.state = {
            socks:[]

        }
    }
    componentDidMount(){
        axios.get('/bounty').then (res=> {
            console.log(res)
            res
        })
    }

    render(){
        return(
            <div>
                {this.state.socks.map(sock=><h1>{sock.type}</h1>)}
            </div>
        )
    }
}

export default App