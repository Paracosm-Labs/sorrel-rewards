//walletPage.js
import React from 'react';
import TokenBalance from '../components/tokenBalance';
import RecentTransactions from '../components/recentTransactions';
import Promotions from '../components/promotions';
import Navbar from '../components/navbar';



const WalletPage = () => {

  return (
    <>
    <div className="wallet">
      
    
      <>
      <Navbar></Navbar>
      <TokenBalance></TokenBalance>
      
      <Promotions></Promotions>
      <RecentTransactions></RecentTransactions>
      </>



    </div>
    </>
  );
};

export default WalletPage;