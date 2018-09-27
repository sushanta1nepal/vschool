import React from 'react';


const nav={
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    paddingBottom: '5px',
    color: 'red',
    

}

const navbar = () => {
    
    
    return(
        <div style = {nav}>
            <h2>DON CORLEONE</h2>
            <h3>REALLY REALLY WANTS</h3>
            <h4>THESE PEOPLE DEAD</h4>
            <h5>IF YOU SEE THESE GUYS</h5>
            <h6>DO NOT CALL THE POLICE</h6>
            <p>CALL YOUR NEIGHBORHOOD MAFIA</p>

        </div>

    )
}


export default navbar
