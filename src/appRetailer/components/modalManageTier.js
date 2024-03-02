import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FormWizard from 'react-form-wizard-component';
import "react-form-wizard-component/dist/style.css";
import { toast } from 'react-toastify';

function ModalManageTier() {
    const [show, setShow] = useState(false);
    const [tiers, setTiers] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddTier = (tierData) => {
        // implement the logic as needed
        handleClose();
        toast.success(`Tier successfully added`);
    };

    return (
        <>
            <button className="btn btn-outline-success mx-3" onClick={handleShow}>
                + Add Tier
            </button>

            <Modal show={show} onHide={handleClose} size="md" className="tier-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Add New Tier</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormWizard
                      stepSize="xs"
                      onComplete={handleClose}
                    >
                        <FormWizard.TabContent title="Tier Details">
                            {/* Tier Details */}

                          <div className="input-group mb-3">
                            <span className="input-group-text" id="tier-name">Name</span>
                            <input type="text" className="form-control" placeholder="Enter Tier Name" aria-label="Tier Name" />
                          </div>

                          <div className="input-group mb-3">
                            <span className="input-group-text" id="points-threshold">Points Threshold</span>
                            <input type="number" className="form-control" placeholder="Enter Points Threshold" aria-label="Points Threshold" />
                          </div>

                          <div className="input-group mb-3">
                            <span className="input-group-text">Benefits</span>
                            <textarea className="form-control" aria-label="Benefits" placeholder="Describe the benefits for this tier"></textarea>
                          </div>

                          <button onClick={() => handleAddTier({/* Tier Data */})} className="btn btn-success">Add Tier</button>

                        </FormWizard.TabContent>
                    </FormWizard>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalManageTier;
