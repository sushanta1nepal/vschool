import React, {Component} from 'react';
import Form from './Form';
import InforCard from './InforCard';

class App extends Component {
    constructor() {
        super()
        this.state = {
            ssn:'',
            mothersMaidenName:'',
            firstPet:'',
            data:[]

        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleSubmit = e => {
        e.preventDefault()
        const newCard = {
            ssn: this.state.ssn,
            mothersMaidenName:this.state.mothersMaidenName,
            firstPet:this.state.firstPet,
        }
        this.setState(prevState => ({
            data: [...prevState.data, newCard],
            ssn:'',
            mothersMaidenName:'',
            firstPet:'',

        }))

    } 

    render () {
        return(
            <div>
                <Form handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                ssn={this.state.ssn}
                mothersMaidenName={this.state.mothersMaidenName}
                firstPet={this.state.firstPet} />
                <div>
                    {this.state.data.map(info => <InforCard {...info} />)}
                </div>

            </div>
        )
    }
}

export default App



