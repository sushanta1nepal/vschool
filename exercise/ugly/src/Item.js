
import React from 'react'
import { connect } from 'react-redux'
import { deleteItem } from './redux/index'
import './redux/index'

function Item(props) {
    // change to class with a state = { status: true }
    // this will also need state = { title, descr., imgUrl}
    // state = { oldUrl = props.image }

    // create handleDelete functions 
        // create object with items url
        // call action function from redux 

    // create handleEdit
        // toggle status true|false

    // create handleEditSubmit
        // wrap the state in an object and send it to redux
        // let post  = { title, desc, url, oldUrl}
        // this.props.editItem(post)
    
    const imageStyle = {
        height: "100px",
        width: "100px",
        border: "solid blue 10px"
    }

    return (
        <div className='item'>
            <h1>Title: {props.title} </h1>
            <img style={imageStyle} src={props.image} />
            <h3>Description: {props.description} </h3>
            <button onClick={props.deleteItem}>Delete</button>
            <button onClick={props.editItem}>EDIT</button>
            {/* check state: status and insert dynamic rendering here 
                if true
                    return blank div 
                else 
                    return form */}
        </div>
    )
}

export default connect(state => state, { deleteItem })(Item);