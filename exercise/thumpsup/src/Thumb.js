import React from 'react';

const Follow = (props) => {
    const img = props.status ? upimg : downimg;
    return (
        <button onClick ={props.handleClick}>
            {text}
        </button>
    )
}

export default Thumb
