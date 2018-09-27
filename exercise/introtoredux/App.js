var redux = require('redux')

var state = {
    contacts:[]
      
}

// ACTION FUNCTIONS
function addContact(name){
    return{
        type: "ADD_CONTACT",
        name: name
    }
}
function subContact(subName){
    return{
        type:'SUB_CONTACT',
        subName: subName
        
    }
}



function reducer(prevState = state, action){
    switch(action.type){
        case "ADD_CONTACT": // ACTION TYPES
        return{
            contacts: [...prevState.contacts, action.name]
        }
        case "SUB_CONTACT":
        var i = prevState.contacts.indexOf(action.subName)
        prevState.contacts.splice(i,1)
        return{
            contacts: [...prevState.contacts]
        }
        default:
        return prevState
    }
}
    var store = redux.createStore(reducer)

    store.subscribe(function(){
        console.log(store.getState())
    })


store.dispatch(addContact("sushant"))
store.dispatch(addContact("sushant2"))
store.dispatch(addContact("sushant3"))
store.dispatch(subContact("sushant"))

