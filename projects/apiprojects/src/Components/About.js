import React from 'react';
import {withRouter} from 'react-router-dom'

const aboutDesign={
    display:'grid',
    justifyContent:'space-evenly',
    alignItems: 'center',
    fontSize:'50px'
}

const About = () => {
    return (
        <div style={aboutDesign}>
            <p> THE BEST TAX COMPANY IN THE WORLD</p>
            <p>GUARANTEED BEST RATES AND RETURNS IN THE WHOLE WORLD</p>
            <p>GET ATLEAST 33% OFF YOUR TAXES</p>
            <p>AVERAGE SAVINGS OF $10,000 PER CLIENT</p>
        </div>
    )
}

export default withRouter(About)