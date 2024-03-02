import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

function ModalTopup() {
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleTopup = () => {
        // Implement logic
        handleClose();
        toast.success(`Topup successful: ${amount} Points`);
    };

    return (
        <>
            <button className="btn btn-sm btn-outline-success mx-1" onClick={handleShow}>
                Topup
            </button>

            <Modal show={show} onHide={handleClose} size="md" className="topup-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Topup Campaign</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => { e.preventDefault(); handleTopup(); }}>
                        <div className="mb-3">
                            <label htmlFor="amountInput" className="form-label">Amount</label>
                            <input type="number" className="form-control" id="amountInput" onChange={(e) => setAmount(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ display: "block", margin: "0 auto" }}>Topup</button>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default ModalTopup;
