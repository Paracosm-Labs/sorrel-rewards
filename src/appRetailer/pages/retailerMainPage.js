import React, { useEffect, useState } from 'react';
import { useConnect } from '@particle-network/auth-core-modal';
import { getUserInfo } from '@particle-network/auth-core';

import DappLogo from "../../img/logo2x.png";
import OffcanvasNav from '../../components/offcanvasNav';
import { R_CAMPAIGNS, R_DASHBOARD, R_UNCONNECTED } from '../../constants/retailerPageType';
import RetailerUnconnected from '../components/rUnconnected';
import DashboardPage from '../components/dashboard';
import Dashboard from '../components/dashboard';
import Campaigns from '../components/campaigns';

const RetailerMainPage = () => {
  const { connect, disconnect, connected } = useConnect();
  const [userInfo, setUserInfo] = useState(null);
  const [page, setPage] = useState(connected? R_DASHBOARD: R_UNCONNECTED);




  const handleConnect = async () => {
    if (!connected) {
      try {
        const info = await connect();
        setUserInfo(info);
        setPage(R_DASHBOARD);
        console.log('Connected successfully.', info);
      } catch (error) {
        console.error('Failed to connect:', error);
      }
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      setUserInfo(null); // Clear user info upon disconnecting
      setPage(R_UNCONNECTED);
      console.log('Disconnected successfully.');
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  const getParticleUserInfo = async () => {
    let info = getUserInfo();
    console.log("getParticleUserInfo", info);
    setUserInfo(info);
  }

  useEffect(() => {
    getParticleUserInfo()
  }, []);

  const getPage = () =>{
    if(!connected){
        return <RetailerUnconnected></RetailerUnconnected>
    }
    switch (page) {
        case R_DASHBOARD:
            return <Dashboard></Dashboard>
            case R_CAMPAIGNS:
                return <Campaigns></Campaigns>
        default:
            return <RetailerUnconnected></RetailerUnconnected>
    }
  }


  return (
    <>
        <nav class="navbar navbar-expand-md bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href='/'>
                <img src={DappLogo} height="48" alt="Sorrel Rewards"/>
            </a>
            <div class="d-flex">
            {connected ? (
                <>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={() => setPage(R_DASHBOARD)}><i className="fa-solid fa-dashboard"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={() => setPage(R_CAMPAIGNS)}><i className="fa-solid fa-mattress-pillow"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i className="fa-solid fa-wallet"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i className="fa-solid fa-vault"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i className="fa-solid fa-store"></i></a>
                        </li>                        
                    </ul>                
                </>
            ) : (
                <></>
            )} 

            {connected ? (
                <button className="btn btn-primary" onClick={handleDisconnect}>Log out</button>
            ) : (
                <button className="btn btn-warning" onClick={handleConnect}>Log in</button>
            )}                
                <button className="btn btn lg btn-outline" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
        </nav>
        <OffcanvasNav></OffcanvasNav>
        <div>{getPage()}</div>
        <footer class="pt-5 my-5 text-body-secondary border-top">
            Sorrel &middot; &copy; 2024
        </footer>
    </>
  );
};

export default RetailerMainPage;
