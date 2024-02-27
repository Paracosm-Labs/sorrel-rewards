//marketplace.js
import React from 'react';
import Navbar from '../components/navbar';
import SearchBox from '../components/searchBox';
import Retailers from '../components/retailerListings';



const MarketplacePage = () => {

  return (
    <>
    <div className="rewards">
    	<Navbar></Navbar>
    	<SearchBox></SearchBox>
    	<Retailers></Retailers>


    </div>
    </>
  );
};

export default MarketplacePage;