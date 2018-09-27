import React, {Component} from 'react';
import Form from './Form';
import axios from 'axios';

class Vehicle extends Component {
    constructor(){
        super()
        this.state = {
            editToggle: false,
            make: '',
            model: '',
            year: '',
            horsePower: '',
            category: '',
            price: '',
            image: '',
        }
    }

    toggleSwitch = () => {
        this.setState(prevState =>({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
       this.setState({
           [e.target.name]: e.target.value
       })
    }
    
    handleSubmit = e => {
        e.preventDefault()
    
        const updatedInfo = {}
        if(this.state.make.trim().length > 0){
            updatedInfo.make = this.state.make
        }
        if(this.state.model.trim().length > 0){
            updatedInfo.model = this.state.model
        }
        if(this.state.year.trim().length > 0){
            updatedInfo.year = this.state.year
        }
        if(this.state.horsePower.trim().length > 0){
            updatedInfo.horsePower = this.state.horsePower
        }
        if(this.state.category.trim().length > 0){
            updatedInfo.category = this.state.category
        }
        if(this.state.price.trim().length > 0){
            updatedInfo.price = this.state.price
        }
        if(this.state.image.trim().length > 0){
            updatedInfo.image = this.state.image
        }
        axios.put('/carslist/' + this.props._id, updatedInfo).then(response =>{
            this.props.getVehicles()
            this.toggleSwitch()
        })
    }
    makeUpperCase= (str) => {
        let result = []
        let arr = str.split(' ')
         for(let i=0; i<arr.length; i++){
             result.push(arr[i][0].toUpperCase() + arr[i].slice(1))
         }
         const joined = result.join(' ')
         console.log(joined)
         return joined 
    }
  
    render() {    

        const imageStyle ={
            width: '50vw',
            display: 'grid',
            marginLeft: '22.5vw'

        }
    const makeStyle = {
        fontSize:'5vw',
        margin:'0em',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const textStyle = {
        fontSize:'3.5vw',
        margin:'0em',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
    }
    const design = {
        width: '100vw',
        padding: '1vw',
        background: '#FFFFFF',
        marginTop: ' auto',
        marginBottom: '1vw auto',
        boxShadow: 0,
        outline: 'none',
        border: 'none',
        background: 'transparent',
        fontSize: '1vw',
    }


        return(
            <div>
                {!this.state.editToggle
                ?   <React.Fragment>
                        <p style={makeStyle}>{this.makeUpperCase(this.props.make)}</p>
                        <p style={textStyle}>{this.makeUpperCase(this.props.model)}</p>
                        <p style={textStyle}>{this.props.year}</p>
                        <p style={textStyle}>{this.props.horsePower} Bhp</p>
                        <p style={textStyle}>{this.props.category[0].toUpperCase() + this.props.category.slice(1)}</p>
                        <p style={textStyle}>$ {this.props.price.toLocaleString('en-us',{useGrouping: true})}</p>
                        <img style={imageStyle} src ={this.props.image}/>
                        <button style={design} onClick={this.toggleSwitch}>edit</button>
                        <button style={design} onClick={ () => this.props.handleDelete(this.props._id)}>Delete</button>
                    </React.Fragment>
                :   <React.Fragment>
                        <Form
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            make={this.state.make}
                            model={this.state.model}
                            year={this.state.year}
                            horsePower={this.state.horsePower}
                            category={this.state.category}
                            price={this.state.price}
                            image={this.state.image}
                            btnText='Submit Edit' />

                            <button style={design} onClick={this.toggleSwitch}>Close</button>
    
                    </React.Fragment>
                    }
            </div>
        )
    }
}


export default Vehicle