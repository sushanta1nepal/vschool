import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from './Form'
import { getTaxes, addContact } from './redux'
import { Switch, Route, withRouter} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

// const initialState = {
//     fName: '',
//     lName: '',
//     dob: '',
//     pNumber: '',
//     sFirst: '',
//     sLast: '',
//     sDob: '',
//     sNumber: '',
//     sAddress: '',
//     city: '',
//     state: '',
//     zipCode: '',
//     filing_status: '',
//     dependants: '',
//     pay_rate: '',
//     exemptions: '',
//     otherIncome: '',
// }

class App extends Component {
    // constructor(){
    //     super()
    //     this.state = initialState
    // }
    // handleChange = e => {
    //     const {name, value} = e.target 
    //     this.setState({
    //         [name]: value
    //     })
    // }

    // handleSubmit = e => {
    //     e.preventDefault()
    //     this.props.getTaxes(this.state).then(() => {
    //         this.props.addContact(this.state,this.props.taxes.annual)
    //     })
        
    //     this.setState(initialState)
    // }

    render(){
        console.log(this.props)
        return(
            <div>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/services' component={Services} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                </Switch>
                <Footer />
                {/* <Form
                    contact={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                /> */}
            </div>
        )
    }
}

// export default withRouter(connect(state => state, {addContact, getTaxes})(App))
export default App