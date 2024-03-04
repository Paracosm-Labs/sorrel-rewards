import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import QRCode from "react-qr-code";

function ModalQR({ qrId }) {
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleQR = () => {
        // Implement logic
        handleClose();
    };

    return (
        <>
            <button className="btn btn-sm btn-outline-success mx-1" onClick={handleShow}>
                QR Code
            </button>

            <Modal show={show} onHide={handleClose} size="md" className="qr-modal">
                <Modal.Header closeButton>
                    <Modal.Title>Campaign QR Code</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <div className="mb-3" style={{ height: "auto", margin: "0 auto", width: "80%" }}>
                        <QRCode
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={qrId}
                        viewBox={`0 0 256 256`}
                        />
                    </div>
                    <p style={{ textAlign: "center" }}>{qrId}</p>
                    <button  onClick={handleQR} className="btn btn-outline-primary" style={{ display: "block", margin: "0 auto" }}>Close</button>
                    
                </Modal.Body>
            </Modal>

        </>
    );
}

export default ModalQR;
