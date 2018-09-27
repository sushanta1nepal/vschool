import React from 'react'

const Location = (props) => {
    return (
        <div>
            <h1>{props.place}</h1>
            <p>Price: {props.price}</p>
            <p>Best Time to Visit: {props.timeToGo}</p>
        </div>
    )
}

export default Location;