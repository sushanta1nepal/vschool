import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
    constructor(){
        super()
        this.state = {
            bountyHunt: []

        }
    }
    componentDidMount(){
        axios.get('/bounty').then (res=> {
           this.setState({
               bountyHunt: res.data
           })
            console.log(res)
        })
    }


    render(){
        return(
            <div>
                {this.state.bountyHunt.map(bounty => 
                <div>
                <h1>Name : {bounty.firstName} {bounty.lastName}</h1>
                <h1>Living : {bounty.isLiving}</h1>
                <h1>Bounty Amount : {bounty.bountyAmount}</h1>
                <h1>Type of Character : {bounty.type}</h1>
                <button>Edit Details</button><button>Delete</button>
                
                </div>
                )}
            </div>
        )
    }
}

export default App



// function editTodoById(id, editedTodo) {
//     axios
//       .put(url + id, editedTodo)
//       .then(function(response) {
//         console.log(response.data);
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   }