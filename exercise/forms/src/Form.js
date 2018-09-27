import React, {Component} from 'react';

class Form extends Component {
    constructor(){
        super()
        
        this.state = {
            fName:'',
            age:'',
            hairColor:'',
            language:'', 
            names:[]
        }
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    boxAlert = (e) => {
        e.preventDefault();
        console.log(this.state)
        alert(`Full Name: ${this.state.Name}\nAge:${this.state.age}\nColor of Hair:${this.state.hairColor}\nLanguages Spoken:${this.state.language}`)
        // this.state.names.push(this.state.Name)   
    }     
    handleSubmit = event => {
        event.preventDefault()
        this.setState(prevState =>{
            return {
                names: [...prevState.names, prevState.fName]
            }
        })
    }
    
    render(){
         const displayNames = this.state.names.map(people => <li>{people}</li>)
        return(
            <form>
                <input type='text' name='fName' placeholder='Full Name' value={this.state.fName} onChange = {this.handleChange}/>
                <input type='number' name='age' placeholder='Age' value={this.state.age} onChange = {this.handleChange}/>
                <input type='text' name='hairColor' placeholder='Color of Hair' value={this.state.hairColor} onChange = {this.handleChange}/>
                <input type='text' name='language' placeholder='Languages Spoken' value= {this.state.language} onChange ={this.handleChange}/>
                <button onClick={this.handleSubmit}>Finalize Details</button>
                {displayNames}
            </form>
        )
    }
}

export default Form;