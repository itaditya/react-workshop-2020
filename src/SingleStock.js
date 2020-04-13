import React, { useState } from 'react';

const stock = {
  title: 'Facebook Inc',
  amount: 130,
  code: 'FB',
};

function Stocks() {
  const [stateStockAmt, setStateStockAmt] = useState(stock.amount);

  function handleStockBuy() {
    setStateStockAmt(oldAmount => oldAmount + 1);
  }

  function handleStockSell() {
    setStateStockAmt(oldAmount => oldAmount - 1);
  }

  return (
    <div className="stock-item">
      <div className="stock-amount">{stateStockAmt}</div>
      <h4 className="stock-title">{stock.title}</h4>
      <div className="stock-code">{stock.code}</div>
      <div className="stock-btn-wrapper">
        <button className="stock-btn stock-btn-buy" onClick={handleStockBuy}>
          Buy
        </button>
        <button className="stock-btn stock-btn-sell" onClick={handleStockSell}>
          Sell
        </button>
      </div>
    </div>
  );
}

export default Stocks;
