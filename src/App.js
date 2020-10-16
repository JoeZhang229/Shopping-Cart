import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
      </div>
    </BrowserRouter>
  );
}

export default App;
