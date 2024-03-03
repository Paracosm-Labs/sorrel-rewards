import React from 'react';
import TokenBalance from '../../components/tokenBalance';

const Loans = () => {
  return (
    <>
      <div className="Loans">
        <h2 className="text-center mb-4">Loan Management</h2>

        <div className="d-flex justify-content-center">
          <div className="card text-center" style={{maxWidth: "600px"}}>
            <div className="card-header">
            	<TokenBalance/>
            </div>
            <div className="card-body">

              <p className="card-text">600 Available | 50,000 Frozen</p>
              <p className="card-text">Credit Limit: $1,500</p>
              <p className="card-text">Total Borrowed: $500</p>
              <p className="card-text">Current Interest Rate: 4% APR</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-info m-2">Freeze Points</button>
              <button className="btn btn-outline-success m-2">Borrow Funds</button>
              <button className="btn btn-outline-primary m-2">Repay Loan</button>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Loans;
