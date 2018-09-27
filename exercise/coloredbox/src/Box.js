import React from 'react';
import PropTypes from 'prop-types';

const Boxes = (props) => {
    const styles = {
        backgroundColor: props.color,
        textAlign: 'center',
        height: '20vh',
        width: '20%',
        display: 'inline-block',
        color: props.textColor
       }
    
    return (
    <div style={styles}>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <p>{props.information}</p>
    </div>
    )
}
Boxes.propTypes = {
    subtitle : PropTypes.string.isRequired
}

export default Boxes;
