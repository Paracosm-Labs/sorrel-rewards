import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormWizard from 'react-form-wizard-component';
import "react-form-wizard-component/dist/style.css";
import { toast } from 'react-toastify';

function ModalManageCampaign() {
    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddCampaign = (campaignData) => {
        // implement the logic as needed
        handleClose();
        toast.success(`Campaign successfully added`);
    };


    return (
        <>
            <button className="btn btn-outline-success mx-3" onClick={handleShow}>
                + Add Campaign
            </button>

            <Modal show={show} onHide={handleClose} size="lg" className="campaign-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Create Your Campaign</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormWizard
                      stepSize="xs"
                      onComplete={handleClose}
                    >
                        <FormWizard.TabContent title="Basic Setup">
                            {/* Step 1: Basic Setup */}

                          <div className="input-group mb-3">
                            <span className="input-group-text" id="c-name">Name</span>
                            <input type="text" className="form-control" placeholder="Describe your Campaign" aria-label="Campaign Name" aria-describedby="c-descript" />
                          </div> 

                          <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="c-type">Type</label>
                            <select className="form-select" id="c-type">
                              <option selected disabled>Choose your Campaign type</option>
                              <option value="1">Digital Stamp Collection</option>
                              <option value="3" disabled>More coming soon...</option>
                            </select>
                          </div>

                          <div  className="row">
                              <div className="col">
                                  <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="c-startdate">Start Date</label>
                                    <DatePicker className="form-control" id="c-startdate" minDate={new Date()} selected={startDate} onChange={(date) => setStartDate(date)} />
                                  </div>
                              </div>

                              <div className="col text-end">
                                  <div className="input-group mb-3">
                                    <label className="input-group-text" htmlFor="c-enddate">End Date</label>
                                    <DatePicker className="form-control" id="c-enddate" minDate={new Date()} selected={endDate} onChange={(date) => setEndDate(date)} />
                                  </div>
                              </div>
                          </div>

                        </FormWizard.TabContent>

                        <FormWizard.TabContent title="Points Setup">
                            {/* Step 2: Points Setup */}
                          <p className="text-end"><small>Available Points: 900000</small></p>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="c-max-points-alloc">Points Allocation</span>
                            <input type="number" className="form-control" placeholder="" aria-label="Username" aria-describedby="c-max-points-alloc" />
                          </div> 

                          <div className="input-group mb-3">

                            <span className="input-group-text" id="c-points-alloc">Points per Action</span>
                            <input type="number" className="form-control" placeholder="" aria-label="Username" aria-describedby="c-points-alloc" />

                          </div>

                          <div className="input-group mb-3">

                            <span className="input-group-text" id="c-points-threshold">Points Threshold</span>
                            <input type="number" className="form-control" placeholder="" aria-label="Username" aria-describedby="c-points-threshold" />

                          </div>
                        </FormWizard.TabContent>
                        <FormWizard.TabContent title="Campaign Rules">
                            {/* Step 3: Campaign Rules */}
                              <p className="">Select which Tier(s) this campaign is available for</p>
                              

                              <div className="btn-group mb-3" role="group" aria-label="Select which Tier(s) this campaign is available for">
                                <input type="checkbox" className="btn-check" id="tier1" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="tier1">Bronze</label>

                                <input type="checkbox" className="btn-check" id="tier2" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="tier2">Silver</label>

                                <input type="checkbox" className="btn-check" id="tier3" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="tier3">Gold</label>

                                <input type="checkbox" className="btn-check" id="tier4" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="tier4">Platinum</label>

                                <input type="checkbox" className="btn-check" id="tier5" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="tier5">Elite</label>
                              </div>

                              <p className="">Eligible Actions</p>
                              <div className="btn-group mb-3" role="group" aria-label="Eligible Actions">
                                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="btncheck1">Proof of Purchase</label>

                                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="btncheck2">Customer Review</label>

                                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="btncheck3">Social Media Engagement</label>

                                <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="btncheck4">Birthday</label>

                                <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor="btncheck5">Other</label>
                              </div>
                            <button onClick={() => handleAddCampaign()} className="btn btn-success">Add Campaign</button>
                        </FormWizard.TabContent>
                    </FormWizard>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalManageCampaign;
