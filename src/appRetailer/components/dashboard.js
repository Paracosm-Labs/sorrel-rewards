import React, { useState, useEffect } from 'react';
import DataChart from '../../components/dashboard/dataChart';
import PieChart from '../../components/dashboard/pieChart';
import DataActivity from '../../components/dashboard/dataActivity';
import ModalRetailOnboard from './modalRetailOnboard';
import ModalManageCampaign from './modalManageCampaign';
import ModalManageTier from './modalManageTier';

const Dashboard = () => {
  return (
    <>
    <div className="rewards">
      <div className="row mt-3 mb-4">
        <div className="col">
            {/* <PieChart></PieChart> */}
            <div className="mt-3">
              <div className="mb-3"><ModalRetailOnboard /></div>
              <div className="mb-3"><ModalManageCampaign /></div>
              <div className="mb-3"><ModalManageTier /></div>
            </div>
        </div>
        <div className="col">
          <DataChart></DataChart>
        </div>
        <div className="col">
          <DataChart></DataChart>
        </div>
      </div>

      <DataActivity></DataActivity>

    </div>
    </>
  );
};

export default Dashboard;