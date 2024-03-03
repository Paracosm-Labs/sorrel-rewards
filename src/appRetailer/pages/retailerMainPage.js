import React, { useEffect, useState } from 'react';
import { useConnect } from '@particle-network/auth-core-modal';
import { getUserInfo } from '@particle-network/auth-core';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import DappLogo from "../../img/logo2x.png";
import { R_REWARDS, R_CAMPAIGNS, R_DASHBOARD, R_UNCONNECTED, R_LOANS, R_DEPOSIT } from '../../constants/retailerPageType';
import RetailerUnconnected from '../components/rUnconnected';
import Dashboard from '../components/dashboard';
import Campaigns from '../components/campaigns';
import Rewards from '../components/rewards';
import Deposit from '../components/deposit';
import Loans from '../components/loans';
import ModalRetailOnboard from '../components/modalRetailOnboard';
import ModalRechargeBtn from '../components/modalRecharge';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            case R_REWARDS:
                return <Rewards></Rewards>
            case R_LOANS:
                return <Loans></Loans> 
            case R_DEPOSIT:
                return <Deposit></Deposit> 
        default:
            return <>

                <RetailerUnconnected></RetailerUnconnected>
                <div class="col-lg-8 mx-auto">
                    <ModalRetailOnboard />
                </div>
             </>
    }
  }


  return (
    <>
    <div className="d-flex bg-sorrel-nav">
    <div className="container justify-content-center py-1">
      <Navbar bg="" className="navbar-light" expand="lg">
        <Navbar.Brand href="/">
          <img src={DappLogo}
            height="48"
            alt="Sorrel Rewards"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {connected ? (
                <>

                  <Nav className="m-auto text-center nav-items">
                    <NavItem className="px-3">
                      <Link to="#" className="nav-link" onClick={() => setPage(R_DASHBOARD)}><i className="fa-solid fa-dashboard"></i><br/>Dashboard</Link>
                    </NavItem>
                    <NavItem className="px-3">
                      <Link to="#" className="nav-link" onClick={() => setPage(R_CAMPAIGNS)}><i className="fa-solid fa-mattress-pillow"></i><br/>Campaigns</Link>
                    </NavItem>
                    <NavItem className="px-3">
                      <Link to="#" className="nav-link" onClick={() => setPage(R_REWARDS)}><i className="fa-solid fa-gifts"></i><br/>Rewards</Link>
                    </NavItem>
                    <NavItem className="px-3">
                      <Link to="#" className="nav-link" onClick={() => setPage(R_LOANS)}><i className="fa-solid fa-money-bill-wave"></i><br/>Loans</Link>
                    </NavItem> 
                    <NavItem className="px-3">
                      <Link to="#" className="nav-link" onClick={() => setPage(R_DEPOSIT)}><i className="fa-solid fa-plus-circle"></i><br/>Deposit</Link>
                    </NavItem>                    
                    <NavItem className="px-3 d-none">
                      <Link to="/wallet" className="nav-link"><i className="fa-solid fa-wallet"></i><br/>Wallet</Link>
                    </NavItem>
                    <NavItem className="px-3 d-none">
                      <Link to="/earn" className="nav-link"><i className="fa-solid fa-vault"></i><br/>Earn</Link>
                    </NavItem>
                    <NavItem className="px-3 d-none">
                      <Link to="/explore" className="nav-link"><i className="fa-solid fa-store"></i><br/>Explore</Link>
                    </NavItem>
                  </Nav>
             
                </>
            ) : (
                <></>
            )} 
            
            {connected ? (<>

                <ModalRechargeBtn />
                            
                <button className="btn btn-outline-danger my-2" type="button" onClick={handleDisconnect}>Log out</button>
            </>) : (
                <button className="btn btn-warning my-2" type="button" onClick={handleConnect}>Log in</button>
            )}                
                
            
          </Navbar.Collapse>
      </Navbar>
    </div>

          <ToastContainer
            position="top-center"
            autoClose={4000}
            newestOnTop={false}
            closeOnClick
            pauseOnFocusLoss
            draggable
          />

    </div>
        <div>{getPage()}</div>
        <footer class="pt-5 my-5 text-body-secondary border-top">
            Sorrel &middot; &copy; 2024
        </footer>
    </>
  );
};

export default RetailerMainPage;
