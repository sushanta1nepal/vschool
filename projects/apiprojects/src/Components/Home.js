import React from 'react';
import {withRouter} from 'react-router-dom'


const homeDesign={
    display:'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    alignItems: 'center',
    justifyContent:'center',
    color: 'grey',
    textDecoration: 'none',
    height: '10vh',
    width: '100vw',
    backgroundColor: 'pink',
    height: '78vh',
    // backgroundImage: 'url(https://d21tv0wm5mksdn.cloudfront.net/wp-content/uploads/2015/12/brightONE_Logo_PNG.png)',
}

const logo={
    width: '99vw',
    backgroundColor:'white',
    height: '78vh'
}

const Home = () => {
    return (
        <div style = {homeDesign}>
            <div> 
            <img style={logo} src='https://d21tv0wm5mksdn.cloudfront.net/wp-content/uploads/2015/12/brightONE_Logo_PNG.png'/>
            </div> 
        </div>
    )
}

export default withRouter (Home)