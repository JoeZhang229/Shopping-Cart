import React from 'react'
import Item from './Item'

const Home = (props) => {
    const { cartNum, setCartNum, handleCart, setItems, items } = props
    return (
        <div>
            <h3>Homepage</h3>
            <Item 
                cartNum={cartNum} 
                setCartNum={setCartNum}
                handleCart={handleCart} 
                setItems={setItems}
                items={items}
            />
        </div>
    )
}

export default Home
