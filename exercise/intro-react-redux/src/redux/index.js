// const redux = require('redux')
import { createStore } from 'redux'

// Init state
const initState = {
    count: 0
}


// Action 
export const addOne = () => {
    return {
        type: "ADD_ONE"
    }
}

export const subOne = () => {
    return {
        type: "SUB_ONE"
    }
}

// Reducer
const reducer = (prevState = initState, action) => {
    switch(action.type){
        case "ADD_ONE":
            return {
                count: prevState.count + 1
            }
        case "SUB_ONE":
            return {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}


export default createStore(reducer)