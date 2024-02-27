// src/components/Dashboard/RecentTransactions.js

import React from 'react';

const dummyTransactions = [
  {
    id: 1,
    type: 'Earned',
    amount: 20,
    date: '2024-01-10',
  },
  {
    id: 2,
    type: 'Redeemed',
    amount: 15,
    date: '2024-01-09',
  },
  {
    id: 3,
    type: 'Earned',
    amount: 30,
    date: '2024-01-08',
  },
];

const RecentTransactions = () => {
  return (
    <div className="recent-transactions">
      <h2>Recent Transactions</h2>
      <ul className="list-group">
        {dummyTransactions.map((transaction) => (
          <li key={transaction.id} className="list-group-item">
            <div className="transaction-info">
              <span className={`transaction-type ${transaction.type.toLowerCase()}`}>
                {transaction.type}
              </span>
              <span className="transaction-amount">{transaction.amount} Tokens</span>
            </div>
            <div className="transaction-date">{transaction.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
