import React, { useState } from 'react'
import itemList from './ItemList';

function Cart(props) {
    const { handleCart, setItems, items } = props;

    return (
        <div>
            <h3>Shopping Cart</h3>
            {items.length === 0 ? 
                <div>
                    Your Cart is empty!
                </div> :
                null
            }
            <div>Total Price: </div>
            <button 
                name='removeAll' 
                onClick={(e) => {handleCart(e); setItems([]); console.log(items)}}
                >Remove All</button>
        </div>
    )
}

export default Cart
