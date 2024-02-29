//navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import WalletConnect from './walletConnect';
import OffcanvasNav from './offcanvasNav';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import DappLogo from "../img/logo2x.png";

const NavBar = () => {
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
          <Nav className="m-auto text-center m-auto nav-items">
            <NavItem className="px-3">
              <Link to="/" className="nav-link"><i className="fa-solid fa-dashboard"></i><br/>Dashboard</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to="/campaigns" className="nav-link"><i className="fa-solid fa-mattress-pillow"></i><br/>Campaigns</Link>
            </NavItem>
            <NavItem className="px-3">
              <Link to="#" className="nav-link"><i className="fa-solid fa-gifts"></i><br/>Rewards</Link>
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
          <Nav className="ml-auto">

            <NavItem className="text-center">
              <button className="btn btn-outline-success mx-2">Recharge +</button>
            </NavItem>

            <WalletConnect></WalletConnect>
              <button className="btn btn lg btn-outline" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNav" aria-controls="offcanvasNav">
                <span className="navbar-toggler-icon"></span>
              </button>

          </Nav>
          </Navbar.Collapse>
      </Navbar>


    </div>
    <OffcanvasNav></OffcanvasNav>
    </div>
    </>
  );
};

export default NavBar;