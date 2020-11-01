import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { HashRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  const [cartNum, setCartNum] = useState(0);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const resetCart = () => {
    return setItems([])
  }

  const handleCart = (e) => {
    let buttonName = e.target.name;
    switch (buttonName) {
      case 'add': {
        return setCartNum(cartNum + 1);
      }
      case 'subtract': {
        return setCartNum(cartNum - 1);
      } 
      case 'removeAll': {
        setCartNum(0);
      }
    }
  } 
  
  return (
    <Router>
      <div className="App">
        <Navbar 
          cartNum={cartNum} />
        <Route 
          exact path='/' 
          render={() => (
            <Home
              cartNum={cartNum} 
              setItems={setItems}
              items={items}
              setCartNum={setCartNum}
              handleCart={handleCart} 
            />
          )}
          />
        <Route 
          exact path='/Cart' 
          render={() => (
            <Cart 
              cartNum={cartNum} 
              setCartNum={setCartNum}
              items={items}
              setItems={setItems}
              handleCart={handleCart} 
            />
          )}
        />
      </div>
    </Router>
  );
}

export default App;
