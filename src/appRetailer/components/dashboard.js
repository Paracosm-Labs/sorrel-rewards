import React, { useState, useEffect } from 'react';
import DataChart from '../../components/dashboard/dataChart';
import PieChart from '../../components/dashboard/pieChart';
import DataActivity from '../../components/dashboard/dataActivity';
import ModalManageCampaign from './modalManageCampaign';
import ModalManageTier from './modalManageTier';
// import OffcanvasManageTier from '../components/campaigns/offcanvasManageTier';

const Dashboard = () => {
  return (
    <>
    <div className="rewards">
      <div className="row mt-3 mb-4">
        <div className="col">
          {/* <PieChart></PieChart> */}
        </div>
        <div className="col">
          <DataChart></DataChart>
        </div>
        <div className="col">
          <DataChart></DataChart>
        </div>
      </div>
      <div className="actions m-3">
        <ModalManageCampaign />
        <ModalManageTier />
      </div>
      <DataActivity></DataActivity>

    </div>
    </>
  );
};

export default Dashboard;