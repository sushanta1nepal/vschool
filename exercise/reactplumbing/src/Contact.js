import React from 'react';


const contactDesign={
    display:'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    alignItems: 'center',
    justifyContent:'center',
    color: 'grey',
    textDecoration: 'none',
    height: '10vh',
    width: '100vw',
    backgroundColor: 'pink',
    height: '78vh'

}

const Contact = () => {
    return(
        <div style= {contactDesign}>
            Contact
        </div>
    )
}

export default Contact