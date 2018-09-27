import axios from 'axios'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import uuid from 'uuid';

const initState = {
    taxes: [],
    custDetails:[]
}

const config = {
    headers: {
        "X-Mashape-Key": "9s4lSj8V3WmshxKBMMGJDWRwUb4Dp1p8RUGjsnFUUQiJRHaxOp",
        Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjViOTAxNGIxOGZlNjMzMTVhMzA5MTMzOCIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTUzNjE2OTEzN30.ErOpvW1x2xzSpEasY0lKnuODB1EEmw6V_h3Cjb-ozK4'
    }
}


export const getTaxes = incoming =>{
    return function(dispatch){
        return axios.post('https://stylinandy-taxee.p.mashape.com/v2/calculate/2017', incoming, config).then(response =>{
            dispatch({
                type: 'GET_TAXES',
                taxes: response.data.annual
            })
        })
    }
}

export const addContact = (newContact, taxesInfo) => {
    return {
        type: "ADD_CONTACT",
        newContact, 
        taxesInfo
    }
}

const reducer = (prevState = initState, action) => {
    switch (action.type){
        case 'GET_TAXES':
            return{
                taxes: action.taxes,
                custDetails: [...prevState.custDetails]
            }
        case 'ADD_CONTACT': 
            const newCustomer = {
                taxes: action.taxesInfo, 
                custInfo: action.newContact
            }
            console.log(newCustomer)
                // newCustomer.custInfo.id = uuid()
            return {
                taxes: prevState.taxes,
                custDetails: [...prevState.custDetails, newCustomer]
            }
        default:
            return prevState
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk), 
)
