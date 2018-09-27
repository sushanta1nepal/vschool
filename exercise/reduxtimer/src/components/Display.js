import React from 'react';
import { connect } from 'react-redux';

const Display = props => {
    return (
        <div>
            <span>{props.mins}</span>
            <span>{props.sec}</span>
            <span>{props.millis}</span>
            <span>{}</span>
        </div>
    )
}

export default connect (state => state, {})(Display);

