//rewards.js
import React from 'react';
import TokenBalance from '../../components/tokenBalance';
import ModalManageReward from './modalManageReward';


const Rewards = () => {

  // Dummy data for campaigns
  const rewards = [
    { id: 1, name: 'Reward 1', qty: '50', ptsRequired:  '500', expiry: '2022-12-31', status: 'Active' },
    { id: 2, name: 'Reward 2', qty: '20', ptsRequired:  '500', expiry: '2022-08-31', status: 'Paused' },
    { id: 3, name: 'Reward 3', qty: '202', ptsRequired:  '500', expiry: '2023-03-01', status: 'Active' },
    // Add more campaigns as needed
  ];


  return (
    <>
    <div className="rewards">
      <h2>Rewards</h2>
    
      <div className="actions m-3">
        <ModalManageReward/>
      </div>

        <div className="table-responsive mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Points Required</th>
                <th>Quantity</th>
                <th>Expiry</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {rewards.map((reward) => (
                <tr key={reward.id}>
                  <td>{reward.name}
                    <br/><span className="badge bg-success">
                      {reward.status}
                    </span>
                  </td>
                  <td>{reward.ptsRequired}</td>
                  <td>{reward.qty}</td>
                  <td>{reward.expiry}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-success mx-1">Action</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



      



    </div>
    </>
  );
};

export default Rewards;