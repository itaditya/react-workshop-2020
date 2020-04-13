import React from 'react';
import './App.css';

import Stocks from './SingleStock.js';
// import Stocks from './ListStocks.js';

function App() {
  return (
    <div className="App">
      <h1 className="app-heading">Stocks App</h1>
      <Stocks />
    </div>
  );
}

export default App;
