const initState = {
    secs: 0,
    mins: 0,
    millis: 0,
    lap:[]
}

export const startTimer = () => {
    return {
        type: 'START_TIMER'
    }
}

export const stopTimer = () => {
    return {
        type: 'STOP_TIMER'
    }
}

export const resetTimer = () => {
    return {
        type: 'RESET_TIMER'
    }
}

export const lapTimer = () => {
    return {
        type: 'LAP_TIMER'
    }
}

export default function reducer (prevState = initState, action){
    switch (action.type) {
        case 'START_TIMER':
        return {
            millis: prevState.millis + 1
        }

        case 'STOP_TIMER':
        return {
            millis: prevState.millis,
        }
        
        case 'RESET_TIMER':
        return {
            millis: initState.millis
        }
        
        case 'LAP_TIMER':
        return {
            laps: prevState.mins,
        } 

        default:
        return prevState;
    }
}