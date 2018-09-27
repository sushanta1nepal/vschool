import React from 'react';
import { connect } from 'react-redux';
import {startTimer, stopTimer, resetTimer, lapTimer} from '../redux';

const Controls = (props) => {

    let intervalId
    const start = () => {
        if(!intervalId){
            intervalId = setInterval(() => {
                props.startTimer()
            }, 1000)}
    }

    const stop = (props) => {
        clearInterval(intervalId)
        if(intervalId){
            intervalId = false
        }
    }

    return (
        <div>
            <button onClick={start}>START</button>
            <button onClick={stop}>STOP</button>
            <button onClick={props.resetTimer}>RESET</button>
            <button onClick={props.initstate}>LAP</button>
        </div>
    )
}

export default connect(null, {startTimer,stopTimer, resetTimer, lapTimer})(Controls)
