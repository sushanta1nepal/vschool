import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const navDesign={
   margin: '0',
   overFlow: 'hidden',
   backgroundColor: '#99FF00',
   float: 'center',
   textAlign: 'center',
   padding: '14px, 16px',
   textDecoration: 'none',
   fontSize: 'px',
   justifyContent: 'center',
   width: '99vw',
   height:'10vh',
   
   display: 'flex',
   alighItems:'center',
   alignText:'center',
   paddingTop:''
}
const linkDesign = {
    textDecoration: 'none'
}

const Navbar = () => {
    return (
        <div style = {navDesign}>
            <div className='navbarLinks' style = {linkDesign}>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
        </div>
    )
}

export default Navbar