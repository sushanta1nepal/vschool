import React from 'react';

const HelloWorld =()=> {
    const styles = {
        titles: {
            backgroundColor: "red",
            fontFamily: "arial",
            fontSize: "100px",
            display: "flex",
            textAlign: "center",
            justifyContent: "center"
        }
    }
    return(
        <div>
            <h1 style={styles.titles}>Hola Mundo! </h1>
        </div>
    )
}

export default HelloWorld


