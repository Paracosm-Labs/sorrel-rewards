// components/Promotions.js
import React from 'react';
import PromotionCard from './promotionCard';

const Promotions = () => {
  // Dummy retailer data
  const retailers = [
    {
      id: 1,
      name: 'Sorrel Mart',
    },
    {
      id: 2,
      name: 'Token Express',
    },
    // Add more retailers as needed
  ];

  // Dummy promotion data
  const promotions = [
    {
      id: 1,
      retailerId: 1,
      description: 'Get 10% off on all purchases!',
      tokenValue: 20,
    },
    {
      id: 2,
      retailerId: 2,
      description: 'Double tokens for your next order!',
      tokenValue: 15,
    },
    {
      id: 1,
      retailerId: 1,
      description: 'Double tokens for your next order!',
      tokenValue: 15,
    },
    {
      id: 2,
      retailerId: 2,
      description: 'Get 10% off on all purchases!',
      tokenValue: 15,
    }
    // Add more promotions as needed
  ];

  return (
    <section>
      <h2>Rewards</h2>
      <div className="row">
        {promotions.map((promotion) => {
          const retailer = retailers.find((r) => r.id === promotion.retailerId);
          return (
            <div key={promotion.id} className="col-md-3 mb-3">
              <PromotionCard
                retailer={retailer.name}
                description={promotion.description}
                tokenValue={promotion.tokenValue}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Promotions;
