import React from 'react';
import { useNavigate } from 'react-router-dom';


const LandingPage =  () =>  {
    const navigate = useNavigate();

    const navigateToConsumerLogin = () => {
        navigate('/consumerlogin');
      };
    
      const navigateToRetailerLogin = () => {
        navigate('/retailerlogin');
      };
    return (<>
    <div class="col-lg-8 mx-auto p-4 py-md-5">
  <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
    <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
      
      <span class="fs-4">Sorrel </span>
    </a>
  </header>

  <main>
    <h1 class="text-body-emphasis">Welcome to Sorrel</h1>
    
    <hr class="col-3 col-md-2 mb-5"/>

    <div class="row g-5">
      <div class="col-md-6">
        <h2 class="text-body-emphasis">Consumer</h2>
        <p>Unlock a world of benefits, perks, and exclusive offers by entering loyalty programs from your favourite stores!</p>
        <p> Earn points with every purchase, and watch your rewards stack up faster than ever before. </p>
        <button className='btn btn-primary' onClick={navigateToConsumerLogin}>Enter</button>
      </div>
      <div class="col-md-6">
        <h2 class="text-body-emphasis">Retailer</h2>
        <p>Increase customer retention and elevate your marketing efficiency with Sorrel Rewards' promotions and loyalty programs.</p>
        <p>Partner with Sorrel and take your business to new heights!</p>
        <button className='btn btn-primary' onClick={navigateToRetailerLogin}>Enter</button>
      </div>

    </div>
  </main>
  <footer class="pt-5 my-5 text-body-secondary border-top">
    Sorrel &middot; &copy; 2024
  </footer>
</div>
    </>);
}

export default LandingPage ;