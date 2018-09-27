import React from 'react';


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
    backgroundImage: 'url(https://d21tv0wm5mksdn.cloudfront.net/wp-content/uploads/2015/12/brightONE_Logo_PNG.png)',
    width: 'absolute',

}


const home = () => {
    return(
        <div style = {homeDesign}>
            Home
        </div>
    )
}
export default home