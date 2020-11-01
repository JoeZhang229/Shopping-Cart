import React from 'react'
import itemList from './ItemList'

const Item = (props) => {

    const { handleCart, setItems, items } = props;

    return itemList.map(item => (
        <div className='item-div'
        key={item.id}
        >
            <div>
                {item.name}
                ${item.price}
            </div>
            <button 
                name='add'
                onClick={(e) => {handleCart(e); setItems(items + item); console.log(items)}}
                >Add to Cart</button>
        </div>
        ));
}

export default Item
