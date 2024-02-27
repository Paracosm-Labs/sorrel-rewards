import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OffcanvasNav = () => {
  const navigate = useNavigate();


  const handleLogout = async () => {
      navigate(`/explore`);
      alert("Thank you for choosing Sorrel! See you Soon!")
  };



  return (
    <div className="offcanvas navpane offcanvas-end" tabIndex="-1" id="offcanvasNav" aria-labelledby="offcanvasNavLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavLabel">Explore Sorrel</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">

        <section>
          <div className="row">
            <div className="col mt-2">
            
              <Link to="/addons" className="nav-link">
              <button className="btn btn lg btn-outline-primary w-100" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-lg fa-puzzle-piece mt-4"></i><p className="mt-2">Addons</p>
              </button>
              </Link>


            </div>

            <div className="col mt-2">
              <a href="https://discord.gg/kBtNQ9dtFV" rel="noreferrer" target="_blank">
                <button className="btn btn lg btn-outline-primary w-100" type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                  <i className="fa-solid fa-lg fa-satellite-dish mt-4"></i><p className="mt-2">Community</p>
                </button>
              </a>
            </div>

            <div className="col mt-2">
              <button className="btn btn lg btn-outline-primary disabled w-100 d-none" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-bell-concierge mt-4 fa-lg"></i><p className="">Concierge</p>
              </button>
            </div>
            <div className="col mt-2">
              <button className="btn btn lg btn-outline-primary disabled w-100 d-none" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-plus mt-4 fa-lg"></i><p className="">Sorrel Lounges</p>
              </button>
            </div>
            <div className="col mt-2">
              <button className="btn btn lg btn-outline-primary disabled w-100 d-none" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-plus mt-4 fa-lg"></i><p className="">Sorrel <br/>Pay</p>
              </button>
            </div>
            <div className="col mt-2">
              <button className="btn btn lg btn-outline-primary disabled w-100 d-none" data-bs-dismiss="offcanvas" aria-label="Close">
                <i className="fa-solid fa-plus mt-4 fa-lg"></i><p className="">Family Office</p>
              </button>
            </div>

          </div>
        </section>


        <div className="mt-5 text-center">
          <p className="text-muted">By Paracosm Labs</p>
        </div>
      </div>
    </div>
  );
};

export default OffcanvasNav;
