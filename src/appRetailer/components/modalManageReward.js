import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

function ModalManageReward() {
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState(0);
    const [expiryDate, setExpiryDate] = useState(new Date());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleReward = () => {
        // Implement logic
        handleClose();
        toast.success(`Reward successfully added`);
    };

    return (
        <>
            <button className="btn btn-sm btn-outline-success mx-1" onClick={handleShow}>
                Add Reward
            </button>

            <Modal show={show} onHide={handleClose} size="md" className="reward-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Manage Reward</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => { e.preventDefault(); handleReward(); }}>
                          <div className="input-group mb-3">
                            <span className="input-group-text" id="reward-name">Name</span>
                            <input type="text" className="form-control" placeholder="Enter Name of Reward" aria-label="Tier Name" />
                          </div>

                            <div className="input-group mb-3">
                                <label htmlFor="address" className="input-group-text">Description</label>
                                <textarea rows="2" className="form-control" aria-label="reward-description"/>
                            </div>

                            <div class="input-group mb-3">
                              <label htmlFor="formFile" className="input-group-text">Image</label>
                              <input className="form-control" type="file" id="formFile" />
                            </div>

                          <div className="input-group mb-3">
                            <span className="input-group-text" id="reward-availability">Availability</span>
                            <input type="number" className="form-control" placeholder="Enter quantity available" aria-label="Reward Availability" />
                          </div>

                          <div className="input-group mb-3">
                            <label className="input-group-text" htmlFor="expiry-date">Expiry</label>
                            <DatePicker className="form-control" id="expiry-date" minDate={new Date()} selected={expiryDate} onChange={(date) => setExpiryDate(date)} />
                          </div>

                          <div className="input-group mb-3">
                            <span className="input-group-text" id="points-required">Points Required</span>
                            <input type="number" className="form-control" placeholder="Enter Points required to redeem" aria-label="Points Required" />
                          </div>

                          <div className="input-group mb-3">
                            <span className="input-group-text">Redemption</span>
                            <textarea className="form-control" aria-label="instructions" placeholder="What are the instructions to redeem this reward"></textarea>
                          </div>

                          <button type="submit" className="btn btn-success">Create Reward</button>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default ModalManageReward;
