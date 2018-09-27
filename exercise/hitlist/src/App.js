import React, { Component } from "react";
import Axios from "axios";
import Hitlist from "./Hitlist";
import NavBar from './NavBar'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    Axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
      this.setState({
        data: response.data
      });
    });
  }

  render() {
    const hit = this.state.data.map((person, i) => {
      return (
        <Hitlist
          key={person.name + i}
          image={person.image}
          name={person.name}
        />
      );
    });

    const styles={
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        width: '90%'
    }

    return(
    <div>
        <NavBar />
        <div style={styles}>{hit}</div>;
    </div>
    )
  }
}

export default App;
