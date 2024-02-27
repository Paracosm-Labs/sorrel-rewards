//campaignsPage.js
import React from 'react';
import Navbar from '../components/navbar';
import TokenBalance from '../components/tokenBalance';
import OffcanvasManageCampaign from '../components/campaigns/offcanvasManageCampaign';
import OffcanvasManageTier from '../components/campaigns/offcanvasManageTier';


const CampaignsPage = () => {

  // Dummy data for campaigns
  const campaigns = [
    { id: 1, name: 'Campaign 1', startDate: '2022-01-01', endDate: '2022-12-31', status: 'Active', type: 'Digital Stamp Collection', pointsPool:23000 },
    { id: 2, name: 'Campaign 2', startDate: '2022-02-01', endDate: '2022-08-31', status: 'Active', type: 'Digital Stamp Collection', pointsPool:20000 },
    { id: 3, name: 'Campaign 3', startDate: '2022-03-01', endDate: '2023-03-01', status: 'Completed', type: 'Digital Stamp Collection', pointsPool:42500 },
    // Add more campaigns as needed
  ];


  return (
    <>
    <div className="campaigns">
    <Navbar></Navbar>
      <h2>Campaigns</h2>
      
      <div className="actions m-3">
        <a href="#" className="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasManageCampaign" aria-controls="offcanvasManageCampaign">
          + Add Campaign
        </a>
        <a href="#" className="btn btn-success mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasManageTier" aria-controls="offcanvasManageTier">
          + Add Tier
        </a>
      </div>


        <div className="table-responsive mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>End Date</th>
                <th>Points Remaining</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id}>
                  <td>{campaign.name}<br/>{campaign.status}</td>
                  <td>{campaign.type}</td>
                  <td>{campaign.endDate}</td>
                  <td>{campaign.pointsPool}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      <OffcanvasManageCampaign />
      <OffcanvasManageTier />



    </div>
    </>
  );
};

export default CampaignsPage;