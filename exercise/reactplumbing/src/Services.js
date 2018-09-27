import React from 'react';

const serviceDesign={
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

const Services = () => {
    return(
        <div style = {serviceDesign}>
            Services
        </div>
    )
}

export default Services 