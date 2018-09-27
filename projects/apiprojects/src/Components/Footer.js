import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const footDesign={
    margin: '0',
    // overFlow: 'hidden',
    backgroundColor: '#99FF00',
    float: 'center',
    textAlign: 'center',
    padding: '14px, 16px',
    textDecoration: 'none',
    fontSize: '17px',
    justifyContent: 'center',
    width: '99vw',
    height:'10vh',
     
 }
 
 const linkDesign = {
    textDecoration: 'none'
}


const Footer =() => {
    return (
        <div style= {footDesign}>
        <div className='footLinks' style = {linkDesign}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
        </div>    
    )
}

export default Footer