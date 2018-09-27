//componenets are just functions that return some JSX(HTML/JS)
import React from 'react';
import HelloWorld from './HelloWorld';

const App = () =>{
    const styles ={
        title: {
            backgroundColor: "pink",
            fontFamily: "timesNewRoman",
            fontSize: "50px",
            position: "relative"
        },
        description: {
            backgroundColor: "magenta",
            fontFamily: "sanSerif",
            fontSize: "25px",
            display: "flex",
            alignSelf: "flex-End"
            // position: "absolute", right: "0",

        },
        display: {
            display : "flex",
            flexDirection: "column"
        }
    }
    return(
        <div style={styles.display}>
            <HelloWorld />
            <h1 style={styles.title}> Como Estas? </h1> 
            <h1 style={styles.description}>Mucho Gusto y Tu? </h1>
            
        </div>
    )
}

export default App;