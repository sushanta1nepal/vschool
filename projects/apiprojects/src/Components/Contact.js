import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

class Contact extends Component {
    constructor(){
        super()
        this.state = {
            customers: []
        }
    }
    componentDidMount(){
        this.setState(prevState => {
            return {
                customers: [...prevState.customers, ...this.props.custDetails]
            }
        })   
    }
    render(){
        console.log(this.props.custDetails)
        const details = this.state.customers.map((customer)=>{
            console.log(customer)

            return <div>
                    <p>Name: {customer.custInfo.fName} {customer.custInfo.lName}</p>
                    {/* <p>{customer.custInfo.dob}</p> */}
                    <p>Phone Number:{customer.custInfo.pNumber}</p>
                    {/* <p>{customer.custInfo.city}</p> */}
                    
                    <p>State: {customer.custInfo.state}</p> <p>Total Wages: {customer.custInfo.pay_rate}</p>
                    {/* <p>{customer.custInfo.zipCode}</p> */}
                    {/* <p>{customer.custInfo.fining_status}</p> */}
                    <p>Fica: {customer.taxes.fica.amount}</p>
                    <p>Federal: {customer.taxes.federal.amount}</p>
                    <p>State: {customer.taxes.state.amount}</p>
                    <p>ID: {customer.custInfo.id}</p>

                   
                </div>
        })
        return (
            <div>
                <h1>Contact</h1>
                {details}
            </div>      
        )
    }
}

export default connect(state => state, {})(Contact)