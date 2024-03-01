import React, { useEffect, useState } from 'react';
import getWalletDetails from '../../utils/tronWeb';
import { WALLET_AVAILABLE_NOT_LOGGED_IN, WALLET_NOT_DETECTED, WALLET_SUCCESS } from '../../constants/wallet';

const Deposit = () => {

    const [walletStatus, setWalletStatus] = useState(null);

    useEffect(() => {
        getWalletDetails().then((details) => {
            console.log(details);
            setWalletStatus(details.status);
        }).catch(err => {
            console.error(err);
        })
    }, []);

    switch (walletStatus) {
        case WALLET_SUCCESS:
            return (
                <>
                    <div className="mt-4 d-flex justify-content-center">
        
                            <form className=''>
                                <div class="mb-3">
                                    <label for="amountInput" class="form-label">Amount in USDT</label>
                                    <input type="number" class="form-control" id="amountInput" />
                                </div>
                                <button class="btn btn-primary">Deposit</button>
                            </form>                     
                    </div>
               
                </>
            );            
        case WALLET_NOT_DETECTED:    
        return (
            <>
                <div className="mt-4 d-flex justify-content-center">
                    It looks like you dont have TronLink installed. Please install the plugin to continue...
                </div>
           
            </>
        ); 
        case WALLET_AVAILABLE_NOT_LOGGED_IN:    
        return (
            <>
                <div className="mt-4 d-flex justify-content-center">
                    Please login to TronLink to continue...
                </div>
           
            </>
        );            
        default:
            return <></>
    }


}

export default Deposit;