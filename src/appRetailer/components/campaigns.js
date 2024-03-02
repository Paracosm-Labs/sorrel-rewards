import React from 'react';
// import OffcanvasManageCampaign from './campaigns/offcanvasManageCampaign';
// import OffcanvasManageTier from './campaigns/offcanvasManageTier';
import ModalRetailOnboard from './modalRetailOnboard';
import ModalManageCampaign from './modalManageCampaign';
import ModalManageTier from './modalManageTier';
import ModalTopup from './modalTopup';


const Campaigns = () => {

  // Dummy data for campaigns
  const campaigns = [
    { id: 1, name: 'Easter Campaign 2024', startDate: '2022-01-01', endDate: '2022-12-31', status: 'Active', type: 'Digital Stamp Collection', pointsPool:23000 },
    { id: 2, name: 'Summer Fusion Surprise', startDate: '2022-02-01', endDate: '2022-08-31', status: 'Active', type: 'Digital Stamp Collection', pointsPool:20000 },
    { id: 3, name: 'Christmas Ultra Bonus', startDate: '2024-11-01', endDate: '2025-01-03', status: 'Upcoming', type: 'Digital Stamp Collection', pointsPool:42500 },
    // Add more campaigns as needed
  ];


  return (
    <>
    <div className="campaigns">
      <h2>Campaigns</h2>
      
      <div className="actions m-3">

        <ModalRetailOnboard />

        <ModalManageCampaign />

        <ModalManageTier />


      </div>


        <div className="table-responsive mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Running Period</th>
                <th>Points Remaining</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr className="py-3" key={campaign.id}>
                  <td className="">{campaign.name}
                    &nbsp;&nbsp;
                    <span className="badge rounded-pill bg-success">
                      {campaign.status}
                    </span>
                  </td>
                  <td>{campaign.type}</td>
                  <td>{campaign.startDate} - {campaign.endDate}</td>
                  <td>{campaign.pointsPool}</td>
                  <td>
                    <ModalTopup/>
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

export default Campaigns;