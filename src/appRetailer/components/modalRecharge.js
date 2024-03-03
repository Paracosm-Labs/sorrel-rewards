import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

function ModalRecharge() {
    const [show, setShow] = useState(false);
    const [tiers, setTiers] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleRecharge = (tierData) => {
        // implement the logic as needed
        handleClose();
        toast.success(`Recharge Successful`);
    };

    return (
        <>
            <button className="btn btn-outline-success mx-4 my-2" onClick={handleShow}>
                Recharge +
            </button>

            <Modal show={show} onHide={handleClose} size="lg" className="recharge-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Recharge Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="currency-selector">
                          <div className="input-group mb-3 text-end">
                            <label className="input-group-text" htmlFor="c-type">Currency</label>
                            <select className="form-select" id="c-type">
                              <option selected value="1">USDT</option>
                              <option value="2">USDD</option>
                              <option value="3">gTTD</option>
                              <option value="4">gBBD</option>
                              <option value="4" disabled>More coming soon...</option>
                            </select>
                          </div>

                    </div>
                    <div className="row plans-container">
                        <div className="col card m-3 p-3">
                            <h3>$19</h3>
                            <ul>
                                <li>1,000 Sorrel Points</li>
                                <li>Feature 2</li>
                                {/* Add more features as needed */}
                            </ul>
                            <button className="btn btn-outline-primary">Buy Now</button>
                        </div>
                        <div className="col card m-3 p-3">
                            <h3>$89</h3>
                            <ul>
                                <li>5,000 Sorrel Points</li>
                                <li>Feature 2</li>
                                {/* Add more features as needed */}
                            </ul>
                            <button className="btn btn-outline-primary">Buy Now</button>
                        </div>
                        <div className="col card m-3 p-3">
                            <h3>Custom</h3>
                            <form className=''>
                                <ul>
                                    <div class="mb-3">
                                        <input type="number" class="form-control" id="pointsAmount" />
                                    </div>                                        
                                    <li>Customizable features</li>
                                    {/* Custom plan details */}
                                </ul>
                                <button className="btn w-100 btn-outline-primary">Buy Now</button>
                            </form>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ModalRecharge;
