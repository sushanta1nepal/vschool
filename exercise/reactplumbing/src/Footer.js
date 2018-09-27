import React from 'react';
import {Link} from 'react-router-dom';



const footDesign={
    display:'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    alignItems: 'center',
    justifyContent:'center',
    color: 'grey',
    textDecoration: 'none',
    height: '10vh',
    width: '100vw',
    backgroundColor: 'cyan',

}


const Footer= () => {
    return (
        <div style={footDesign}>
        <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/contact'>Contact</Link>
           <Link to='/services'>Services</Link>
        </div>
    )
}

export default Footer