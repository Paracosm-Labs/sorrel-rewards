import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const OffcanvasManageCampaign = () => {
  const navigate = useNavigate();


  const handleRedeem = async () => {
      //process points redemption
      navigate(`/explore`);
      alert("Successfully Redeemed! Thank you for choosing Sorrel!")
  };



  return (
    <>
    <div className="offcanvas navpane offcanvas-end" tabIndex="-1" id="offcanvasManageCampaign" aria-labelledby="offcanvasManageCampaignLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasManageCampaignLabel">Add/Manage Campaign</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body mx-3">

        <section>
          <div className="row">
            <div className="col mt-2">   

              <div class="input-group mb-3">
                <span class="input-group-text" id="c-name">Name</span>
                <input type="text" class="form-control" placeholder="Describe your Campaign" aria-label="Campaign Name" aria-describedby="c-descript" />
              </div> 


              <div class="input-group mb-3">
                <label class="input-group-text" for="c-type">Type</label>
                <select class="form-select" id="c-type">
                  <option selected>Choose...</option>
                  <option value="1">Digital Stamp Collection</option>
                  <option value="2">Quest</option>
                  <option value="3">Three</option>
                </select>
              </div>


              <div class="input-group mb-3">
                <label class="input-group-text" for="c-duration">Duration</label>
                <select class="form-select" id="c-duration">
                  <option selected>Choose...</option>
                  <option value="1">Datepicker</option>
                  <option value="1">3 months</option>
                  <option value="2">6 months</option>
                  <option value="3">9 months</option>
                  <option value="3">12 months</option>
                  <option value="3">Indefinite</option>
                </select>
              </div>

              <small className="text-left text-sm sorrel-bal">Available Points: 900000</small>
              <div class="input-group mb-3">
                <span class="input-group-text" id="c-max-points-alloc">Points Allocation</span>
                <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="c-max-points-alloc" />
              </div> 

              <div class="input-group mb-3">

                <span class="input-group-text" id="c-points-alloc">Points per Action</span>
                <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="c-points-alloc" />

              </div>

              <div class="input-group mb-3">

                <span class="input-group-text" id="c-points-threshold">Points Threshold</span>
                <input type="text" class="form-control" placeholder="" aria-label="Username" aria-describedby="c-points-threshold" />

              </div>



              <div class="btn-group-vertical" role="group" aria-label="Eligible Actions">
                <p class="input-group-text">Eligible Actions</p>

                <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btncheck1">Proof of Purchase</label>

                <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btncheck2">Customer Review</label>

                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btncheck3">Social Media Engagement</label>

                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btncheck3">Birthday</label>

                <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
                <label class="btn btn-outline-primary" for="btncheck3">Other</label>
              </div>


            </div>



          <button type="button" className={`mt-5 btn btn-lg w-100 btn-success`} data-bs-dismiss="offcanvas">
            Create Campaign
          </button>

          </div>
        </section>


      </div>
    </div>
    </>
  );
};

export default OffcanvasManageCampaign;
