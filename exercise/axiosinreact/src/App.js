import React, {Component} from 'react';
import Axios from 'axios';
import Person from './Person';

class App extends Component {
    constructor(){
        super()
        this.state = { 
            data: []

        }
    }
    
    
    componentDidMount(){
        Axios.get('https://swapi.co/api/people/').then(response =>{
            this.setState({
                data: response.data.results
            })
        })
    }


    render(){
        
        const starWars = this.state.data.map(person => {
            return(
          <Person
                name={person.name}
                height={person.height}
                mass={person.mass}
                hair_color={person.hair_color}
                skin_color={person.skin_color}
                eye_color={person.eye_color}
                birth_year={person.birth_year}
                gender={person.gender}


               
                />
            )
        })
        return(
            <div>
                <h1>{starWars}</h1>
              

            </div>
        )
    }

}

export default App;



 {/* name={person.name}
                key={person.url}
                height={person.height}
                weight={person.mass}
                eyecolor={person.eye_color}
                dob={person.birth_year}
                gender={person.gender} */}