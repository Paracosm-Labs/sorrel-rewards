// RetailerListings.js

import React from 'react';

const dummyRetailerData = [
  {
    id: 1,
    name: 'Sorrel Mart',
    description: 'Your one-stop shop for Sorrel Rewards!',
    promotions: [
      { id: 101, title: 'Summer Sale', tokenValue: 20 },
      { id: 102, title: 'Back-to-School Discounts', tokenValue: 15 },
    ],
  },
  {
    id: 2,
    name: 'Fashion Haven',
    description: 'Trendy fashion for all seasons.',
    promotions: [
      { id: 201, title: 'Flash Sale on New Arrivals', tokenValue: 25 },
      { id: 202, title: 'Exclusive Member Discounts', tokenValue: 18 },
    ],
  },
  // Add more retailers as needed
];

const RetailerListings = () => {
  return (
    <section>
      {dummyRetailerData.map((retailer) => (
        <div key={retailer.id} className="retailer-card p-3 m-3">
          <h3>{retailer.name}</h3>
          <p>{retailer.description}</p>
          <h4>Promotions:</h4>
          <ul>
            {retailer.promotions.map((promotion) => (
              <li key={promotion.id}>
                {promotion.title} - {promotion.tokenValue} Tokens
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default RetailerListings;
