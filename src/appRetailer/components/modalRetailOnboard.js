import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FormWizard from 'react-form-wizard-component';
import "react-form-wizard-component/dist/style.css";

function ModalRetailOnboard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="btn btn-outline-primary mx-3" onClick={handleShow}>
                Onboard Your Retail Store
            </button>

            <Modal show={show} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                    <Modal.Title>Retailer Onboarding</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormWizard
                      stepSize="xs"
                      onComplete={handleClose}
                    >
                        <FormWizard.TabContent title="Basic Information">
                            {/* Step 1: Basic Information */}
                            <div className="mb-3">
                                <label htmlFor="retailerName" className="input-group-text">Name</label>
                                <input type="text" className="form-control" id="retailerName" placeholder="Enter your company name"/>
                            </div>
                            <div className="mb-3">
                                <select className="form-select" id="category">
                                    <option selected disabled>Choose a category that best suits your business</option>
                                    <option value="1">Cafes & Restaurants</option>
                                    <option value="2">Retail Clothing</option>
                                    <option value="2">Packaged Goods & Specialty Items</option>
                                    <option value="3">Grocery Stores</option>
                                    <option value="4">Bookstores</option>
                                    <option value="5">Electronics & Appliances</option>
                                    <option value="6">Health & Beauty Salons</option>
                                    <option value="7">Fitness Centers & Gyms</option>
                                    <option value="8">Cinemas & Entertainment</option>
                                    <option value="9">Pet Supplies & Services</option>
                                    <option value="10">Home & Garden</option>
                                    <option value="11">Automotive Services</option>
                                    <option value="12">Bakeries & Confectioneries</option>
                                    <option value="13">Other</option>

                                </select>
                            </div>
                        </FormWizard.TabContent>

                        <FormWizard.TabContent title="Contact Information">
                            {/* Step 2: Contact Information */}
                            <div className="mb-3">
                                <label htmlFor="email" className="input-group-text">Email address</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="input-group-text">Phone Number</label>
                                <input type="tel" className="form-control" id="phone"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address" className="input-group-text">Address</label>
                                <textarea rows="2" className="form-control" id="address"/>
                            </div>
                        </FormWizard.TabContent>
                        <FormWizard.TabContent title="Blockchain Details">
                            {/* Step 3: Blockchain Wallet Address */}
                            <div className="mb-3">
                                <label htmlFor="walletAddress" className="form-label">Wallet Address</label>
                                <input type="text" className="form-control" id="walletAddress"/>
                            </div>
                        </FormWizard.TabContent>
                    </FormWizard>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalRetailOnboard;
