import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OffcanvasManageTier = () => {
  const navigate = useNavigate();


  const handleRedeem = async () => {
      //process points redemption
      navigate(`/explore`);
      alert("Successfully Redeemed! Thank you for choosing Sorrel!")
  };



  return (
    <div className="offcanvas navpane offcanvas-end" tabIndex="-1" id="offcanvasManageTier" aria-labelledby="offcanvasManageTierLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasManageTierLabel">Manage Tier</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body mx-3">

        <section>
          <div className="row">
            <div className="col mt-2">
            
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>

            </div>

            <div className="col mt-2">


            </div>


          <button type="button" className={`mt-5 btn btn-lg w-100 btn-success`} data-bs-dismiss="offcanvas">
            Redeem
          </button>

          </div>
        </section>


      </div>
    </div>
  );
};

export default OffcanvasManageTier;
