import React from 'react';
import './style.css'

const letters={
    color: 'grey',
    fontFamily: 'timesNewRoman',

}



const Hitlist = props => {
    
    
    return(
        <div>
            <h1 style={letters}>Name: {props.name}</h1>
            <img className = 'images' src={props.image}></img>
        </div>
    )
}

export default Hitlist