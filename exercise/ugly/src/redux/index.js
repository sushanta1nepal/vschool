import { createStore } from 'redux'

const state = {
    items: []
}

export const addItem = (item) => {
    return {
        type: "ADD_ITEM",
        item
    }
}

export const deleteItem = (goodBye) => {
    return {
        type: "DELETE_ITEM",
        goodBye: goodBye
    }
}

export const editItem = (edit) =>{
    return {
        type: "EDIT_ITEM",
        edit
    }
}

// export const editUgly = () =>{
//     return{
//         type: "EDIT_CONTACT"
//     }
// }
const reducer = (prevState = state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                items: [...prevState.items, action.item]
            }
        case "DELETE_ITEM":
            var i = prevState.items.indexOf(action.goodBye)
            prevState.items.splice(i, 1)
            return {
                items: [...prevState.items]
            }

        case "EDIT_ITEM":
        var j = prevState.items.indexOf(action.edit)
       
            // return{
            
            //     newDes: ,
            //     newTit: ,
            //     newImg: 

            // }

        default:
            return prevState;
    }
}

export default createStore(reducer)