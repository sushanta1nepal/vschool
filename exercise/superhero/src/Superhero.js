import React from 'react';

const Superhero = (props)=> {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.location}</h3>
            <img src ={props.imgUrl} alt=""height="550vh"/>
            <button className ="App" onClick={props.catchPhrase}>The Super Phrase</button>
            
        </div>
    )
}

export default Superhero;