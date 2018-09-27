import React from 'react';

const aboutDesign={
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

const About = () => {
    return(
        <div style = {aboutDesign}>
            About
        </div>
    )
}
export default About