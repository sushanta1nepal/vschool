import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../Form'
import { getTaxes, addContact } from '../redux'
import { withRouter } from 'react-router-dom'
import uuid from 'uuid';

const formDesign={
    width:'90vw',
    padding: '12px',
    border: '1pc solid #99FF00',
    borderRadius: '4px',
    margin: '0',
   overFlow: 'hidden',
   textAlign: 'center',
   fontSize: '17px',
   margin: '0 auto',
   height: '70vh'
}

// const formStyle = {
//     width: '100%',
//     height: '100%'
// }


 class Services extends Component {
    constructor(){
        super()
        this.state = {
            fName: '',
            lName: '',
            dob: '',
            pNumber: '',
            sFirst: '',
            sLast: '',
            sDob: '',
            sNumber: '',
            sAddress: '',
            city: '',
            state: '',
            zipCode: '',
            filing_status: '',
            dependants: '',
            pay_rate: '',
            exemptions: '',
            otherIncome: '',
        }
    }
    handleChange = e => {
        const {name, value} = e.target 
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newContact = this.state
        newContact.id= uuid()
      
        this.props.getTaxes(newContact).then((res) => {
          alert('You have successfully submitted your form.\n Please come in person with you unique customer id.\n Your unique id is: '+newContact.id)
            this.props.addContact(newContact, this.props.taxes)
        })
        
        this.setState({
                fName: '',
                lName: '',
                dob: '',
                pNumber: '',
                sFirst: '',
                sLast: '',
                sDob: '',
                sNumber: '',
                sAddress: '',
                city: '',
                state: '',
                zipCode: '',
                filing_status: '',
                dependants: '',
                pay_rate: '',
                exemptions: '',
                otherIncome: ''
        })
        }

    render() {
        return (
            <div style={formDesign}>
                <Form
                    contact={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                /> 
            </div>
        )
    }
}

export default withRouter(connect(state=> state, {addContact, getTaxes})(Services))