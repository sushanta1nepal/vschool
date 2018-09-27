import React, { Component } from 'react';
import CarList from './CarsList';
import Form from './Form';
import axios from 'axios';

const titleDesign = {
    display: 'grid',
    justifyContent: 'space-evenly',
    alignItems: ' center',
    fontSize:'5vw',
    height: '10vw',
    backgroundColor: 'black',
    color: 'yellow',
    marginBlockStart: '0em',
    marginBlockEnd: '0em',
}
// const FormDesign = {
//     width: '15vw',
//     padding: '15px',
//     background: '#FFFFFF',
//     mardin: '50px auto',
//     boxShadow: '0px 0px 15px rgba (0, 0, 0, 0.22)',
//     mozBoxShadow: '0px 0px 15px rgba (0, 0, 0, 0.22)',
//     webkidBoxShadow: '0px 0px 15px rgba (0, 0, 0, 0.22)',
//     outline: 'none',
//     border: 'none',
//     borderBottom: '1px solid gold',
//     background: 'transparent',
//     height: '3vw',
// }


export default class Main extends Component {
    constructor(){
        super()
        this.state = {
            vehicles:[],
            make: '',
            model: '',
            year: '',
            horsePower: '',
            category: '',
            price: '',
            image: '',
            toggleAddVehicle: false,
        }
    }
    componentDidMount(){
        this.getVehicles()
    }

    getVehicles = () =>{
        axios.get('/carslist').then(response =>{
            console.log(response.data)
            this.setState({
                vehicles:response.data

            })
        })
        .catch(err =>{console.log('get vehicles is not working')})
    }

    handleChange= e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleAddVehicleBtn = () =>{
        console.log('yippie')
        this.setState(prevState => {
            return {toggleAddVehicle: !prevState.toggleAddVehicle}
       })
    }

    handleSubmit = e =>{
        e.preventDefault()
        const NewVehicleObject = {
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            horsePower: this.state.horsePower,
            category: this.state.category,
            price: this.state.price,
            image: this.state.image,
        }
        
        axios.post('/carslist', NewVehicleObject).then(response =>{
            this.setState(prevState =>({
                vehicles: [...prevState.vehicles, response.data.newSavedCars],
                make: '',
                model: '',
                year: '',
                horsePower: '',
                category: '',
                price: '',
                image: '',
            }))
        })
    }

    handleDelete = id =>{
        axios.delete(`/carslist/${id}`).then(response =>{
            this.setState(prevState =>({
                vehicles: prevState.vehicles.filter(vehicle => vehicle._id !==id)
            }))
        })
    }

    render(){

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
                <p style={titleDesign}>The Car Log</p>
                {this.state.toggleAddVehicle
                ?
                <React.Fragment>
                    
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
                        //formstyle
                        btnText='Add Vehicle'
                        />
                        <button style={design} onClick={this.handleAddVehicleBtn}>Close</button>
                    </React.Fragment>
                    
                    :<React.Fragment>
                        <button style={design} onClick={this.handleAddVehicleBtn}>Add Vehicle</button>
                    </React.Fragment>
                }
                <CarList
                    vehicles={this.state.vehicles}
                    handleDelete={this.handleDelete}
                    getVehicles={this.getVehicles}
                    />
            </div>
        )
    }
}