import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';

// const styles = theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing.unit,
//     },
//     withoutLabel: {
//       marginTop: theme.spacing.unit * 3,
//     },
//     textField: {
//       flexBasis: 200,
//     },
//   });
  
//   const ranges = [
//     {
//       value: '0-20',
//       label: '0 to 20',
//     },
//     {
//       value: '21-50',
//       label: '21 to 50',
//     },
//     {
//       value: '51-100',
//       label: '51 to 100',
//     },
//   ];

const FormDesign = {
    width: '90vw',
    padding: '1vw',
    background: '#FFFFFF',
    marginTop: ' auto',
    marginBottom: '1vw auto',
    boxShadow: '0px 1px gold',
    outline: 'none',
    border: 'none',
    background: 'transparent',
    font: '5vw',
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

const Form = props =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div style={design}>
            <input style = {FormDesign}
                type="text"
                onChange={ props.handleChange}
                value={props.make}
                name="make"
                placeholder="Make"/>
            
            <input style = {FormDesign}
                type="text"
                onChange={ props.handleChange}
                value={props.model}
                name="model"
                placeholder="Model" />
            
            <input style = {FormDesign}
                type="number"
                onChange={ props.handleChange}
                value={props.year}
                name='year'
                placeholder='Year' />
            
            <input style = {FormDesign}
                type='number'
                onChange={ props.handleChange}
                value={props.horsePower}
                name='horsePower'
                placeholder='Horse Power' />
            
            <input style = {FormDesign}
                type='text'
                onChange= {props.handleChange}
                value= {props.category}
                name='category'
                placeholder='Category' />
                
                
            <input style = {FormDesign}
                type='number'
                onChange={props.handleChange}
                value= {props.price}
                name='price'
                placeholder='Price' />
            
            <input style={FormDesign}
                type='text'
                onChange={props.handleChange}
                value={props.image}
                name= 'image'
                placeholder='Image'/>
            </div>    
                <button style={design}>{props.btnText}</button>
        </form>
    )
}

export default Form