import React from 'react'
import Item from './Item'

function ItemList(props) {
    const ItemList = props.data.map((obj, index) => {
        return (
            <Item key={index} {...obj}/>
            );
        });

    return (
        <div className='ItemList'>
            {ItemList}
        </div>
    )
}

export default ItemList;