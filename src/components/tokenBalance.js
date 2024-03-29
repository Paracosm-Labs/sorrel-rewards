// TokenBalance.js
import React, { useState, useEffect} from 'react';
import SorrelImg from '../img/logo2x.png';
import { BeatLoader } from 'react-spinners';

const TokenBalance = () => {
  const [balance, setBalance] = useState(100);
  const [isAnimated, setIsAnimated] = useState(false);

  // Function to handle the logic of making the value animate then back to normal.
  const handleValueAnimate = () => {
    // Set the value to animation
    setIsAnimated(true);

    // After 1 second, set the value back to normal
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000);
  }

  const formattedBalance = balance + 500; //new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(balance);

  useEffect(() => {
        if (balance !== 0) {
          handleValueAnimate();
        }

  }, [formattedBalance]);


  return (<>

    <div className="account-balance mb-3">
      <div className="card">
        <div className="card-body mx-3 text-center">
          <h6 className="mt-2"><img src={SorrelImg} alt="Currency" className="currency-icon rounded-circle px-1" height="24" />
            Sorrel Points</h6>
          <h1 className="card-text">
            {balance ? <span className={isAnimated ? 'vibrate-1' : '' }>{formattedBalance}</span> 
            : 
            <BeatLoader color="#109e77" size={10} />}
          </h1>
        </div>
      </div>
    </div>

  </>
  );
};

export default TokenBalance;
