//Dashboard.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import DataChart from '../components/dashboard/dataChart';
import PieChart from '../components/dashboard/pieChart';
import DataActivity from '../components/dashboard/dataActivity';
import OffcanvasManageCampaign from '../components/campaigns/offcanvasManageCampaign';
import OffcanvasManageTier from '../components/campaigns/offcanvasManageTier';

const DashboardPage = () => {


  return (
    <>
    <div className="rewards">
    	<Navbar></Navbar>
      <div className="row mb-4">
        <div className="col">
          <PieChart></PieChart>
        </div>
        <div className="col">
          <DataChart></DataChart>
        </div>
        <div className="col">
          <DataChart></DataChart>
        </div>
      </div>
      <div className="actions m-3">
        <a href="#" className="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#offcanvasManageCampaign" aria-controls="offcanvasManageCampaign">
          + Add Campaign
        </a>
        <a href="#" className="btn btn-success mx-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvasManageTier" aria-controls="offcanvasManageTier">
          + Add Tier
        </a>
      </div>
      <DataActivity></DataActivity>
      <OffcanvasManageCampaign />
      <OffcanvasManageTier />


    </div>
    </>
  );
};

export default DashboardPage;