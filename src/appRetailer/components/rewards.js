//rewards.js
import React from 'react';
import TokenBalance from '../../components/tokenBalance';
import OffcanvasManageRewards from '../components/offcanvasManageRewards';


const Rewards = () => {

  // Dummy data for campaigns
  const rewards = [
    { id: 1, name: 'Reward 1', qty: '50', endDate: '2022-12-31', status: 'Active' },
    { id: 2, name: 'Reward 2', qty: '20', endDate: '2022-08-31', status: 'Active' },
    { id: 3, name: 'Reward 3', qty: '202', endDate: '2023-03-01', status: 'Active' },
    // Add more campaigns as needed
  ];


  return (
    <>
    <div className="rewards">
      <h2>Rewards</h2>
    
      <div className="actions m-3">
        <a href="#" className="btn btn-success mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasManageRewards" aria-controls="offcanvasManageRewards">
          + Add Rewards
        </a>
      </div>

        <div className="table-responsive mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>End Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rewards.map((reward) => (
                <tr key={reward.id}>
                  <td>{reward.name}</td>
                  <td>{reward.qty}</td>
                  <td>{reward.endDate}</td>
                  <td>{reward.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



      <OffcanvasManageRewards />



    </div>
    </>
  );
};

export default Rewards;