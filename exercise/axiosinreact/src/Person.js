import React from 'react'
import Axios from 'axios'

const Person = props => {
    return (
          <div>
                <h1>Name: {props.name}</h1>
                <h2>Height: {props.height} CM</h2>
                <h3>Weight: {props.mass} Lbs</h3>
                <h4>Hair Color: {props.hair_color}</h4>
                <h4>Skin Color: {props.skin_color}</h4>
                <h4>Eye Color: {props.eye_color}</h4>
                <h5>Year of Birth: {props.birth_year}</h5>
                <h6>Gender: {props.gender}</h6>

            </div>
    )
}

export default Person
