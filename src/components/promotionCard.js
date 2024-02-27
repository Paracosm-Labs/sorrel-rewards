// components/PromotionCard.js
import React from 'react';
import OffcanvasRedeem from './offcanvasRedeem';

const PromotionCard = ({ retailer, description, tokenValue }) => {
  return (
    <>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{retailer}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Token Value: {tokenValue}</p>
        <a href="#" className="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRedeem" aria-controls="offcanvasRedeem">
          Redeem Now
        </a>
      </div>
    </div>
    <OffcanvasRedeem></OffcanvasRedeem>
    </>
  );
};

export default PromotionCard;
