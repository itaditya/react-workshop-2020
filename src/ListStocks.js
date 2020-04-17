import React, { useState } from 'react';

const stocksData = [
  {
    title: 'Facebook Inc',
    amount: 130,
    code: 'FB',
  },
  {
    title: 'Alphabet Inc',
    amount: 100,
    code: 'GOOGL',
  },
  {
    title: 'Netflix Inc',
    amount: 160,
    code: 'NFLX',
  },
  {
    title: 'Amazon Inc',
    amount: 80,
    code: 'AMZN',
  },
];

function StockItem(props) {
  const { stock } = props;
  const [stateStockAmt, setStateStockAmt] = useState(stock.amount);

  function handleStockBuy() {
    setStateStockAmt(oldAmount => oldAmount + 1);
  }

  function handleStockSell() {
    setStateStockAmt(oldAmount => oldAmount - 1);
  }

  return (
    <li className="stock-item">
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
    </li>
  );
}

function Stocks() {
  return (
    <ul className="stocks-list">
      {stocksData.map(stock => {
        return <StockItem stock={stock} key={stock.code} />;
      })}
    </ul>
  );
}

export default Stocks;
