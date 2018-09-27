import React, { Component } from 'react'
import states from './states.json'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            spouseToggle: false
        }
    }

    
    toggle = () => {
        // setstate to the opposite of what it was before
    }

    render(){
    const stateOpts = states.map(state => <option id={state.abbr} name="state" value={state.abbr}>{state.name}</option>)

    const formStyle = {
        width: '100%',
        height: '100%',
        fontSize:'10px',
    }

    const formGroup = {
        display: 'block',
        margin: '2em auto',
        display: 'flex',
        justifyContent: 'space-around',
        // width: '35%'
    }
    
        return(
            <form style={formStyle} onSubmit={this.props.handleSubmit}>
                <div style={formGroup}>
                    <label for="fName"> First Name </label>
                    <input type ='text' name='fName' value={this.props.contact.fName} onChange={this.props.handleChange} />        
                    <label for="lName"> Last Name </label>
                    <input type ='text' name='lName' value={this.props.contact.lName} onChange={this.props.handleChange} />
                </div>
                
                <div style={formGroup}>
                    <label for="dob"> Date Of Birth </label>
                    <input type ='number' name='dob' value={this.props.contact.dob} onChange={this.props.handleChange} />
                    
                    <label for="pNumber"> Phone Number </label>
                    <input type ='number' name='pNumber' value={this.props.contact.pNumber} onChange={this.props.handleChange} /> 
                </div>
                {/* <button onClick={this.toggle}>Spouse</button>*/}

                <div style={formGroup}>
                    <label for="sFirst"> Spouse's First Name </label>
                    <input type ='text' name='sFirst' value={this.props.contact.sFirst} onChange={this.props.handleChange} />
                        
                    <label for="sLast"> Spouse's Last Name </label>
                    <input type ='text' name='sLast' value={this.props.contact.sLast} onChange={this.props.handleChange} />        
                </div>    
                
                <div style = {formGroup}>
                    <label for="sDob"> Spouse's Date of Birth </label>
                    <input type ='number' name='sDob' value={this.props.contact.sDob} onChange={this.props.handleChange} />    

                    <label for="sDob"> Spouse's Phone Number </label>
                    <input type ='sNumber' name='sNumber' value={this.props.contact.sNumber} onChange={this.props.handleChange} />
                </div>

                <div style= {formGroup}>
                    <label for="sAddress"> Address </label>
                    <input type ='text' name='sAddress' value={this.props.contact.sAddress} onChange={this.props.handleChange} />
                    
                    <label for="city"> City </label>
                    <input type ='text' name='city' value={this.props.contact.city} onChange={this.props.handleChange} />
                </div>
               
                <div style = {formGroup}>    
                    <label for='"state'> State </label>
                    <select type ='text' name='state' value={this.props.contact.state} onChange={this.props.handleChange}>
                        <option> Please Select State </option>
                        {stateOpts}
                    </select>    
                    
                    <label for="zipCode"> Zip Code </label>
                    <input type ='number' name='zipCode' value={this.props.contact.zipCode} onChange={this.props.handleChange} />
                </div>
                
                <div style = {formGroup}>
                    <label for="filing_status"> Filing Status: </label>
                </div>
               
                <div style = {formGroup}>
                    <label for="filing_status"> Single </label>
                    <input type ='radio' name='filing_status' checked={this.props.contact.filing_status === "single"} value="single" onChange={this.props.handleChange} />
                
                    <label for="filing_status"> Married filing jointly </label>
                    <input type ='radio' name='filing_status' checked={this.props.contact.filing_status === "married"} value="married" onChange={this.props.handleChange} />
                </div>
                
                <div style = {formGroup}>
                    <label for="filing_status"> Married filing seperately </label>
                    <input type ='radio' name='filing_status' checked={this.props.contact.filing_status === "married_separately"} value="married_separately" onChange={this.props.handleChange} />
                
                    <label for="fName"> Head of household </label>
                    <input type ='radio' name='filing_status' checked={this.props.contact.filing_status === "head_of_household"} value="head_of_household" onChange={this.props.handleChange} />
                {/* Qualifing Widow(er)<input type ='radio' name='filing_status' checked={this.props.contact.filing_status === "single"} value="single" onChange={this.props.handleChange} /> */}
                </div>
                
                <div style = {formGroup}>
                    <label for="dependants"> Dependants </label>
                    <input type ='text' name='dependants' value={this.props.contact.dependants} onChange={this.props.handleChange} />
                </div>
                
                <div style = {formGroup}>
                    <label for="pay_rate"> Total Wages </label>
                    <input type ='number' name='pay_rate' value={this.props.contact.pay_rate} onChange={this.props.handleChange} />
                
                    <label for="exemptions"> Exemptions </label>
                    <input type ='number' name='exemptions' value={this.props.contact.exemptions} onChange={this.props.handleChange} />
                
                    <label for="otherIncome"> Additional Wages </label>
                    <input type ='number' name='otherIncome' value={this.props.contact.otherIncome} onChange={this.props.handleChange} />
                </div>
                
                <div style = {formGroup}>
                    <button>Submit</button>
                    
                </div>
                <p>*please leave items blank if not applicable</p>
            </form>
        )
    }
}

export default Form