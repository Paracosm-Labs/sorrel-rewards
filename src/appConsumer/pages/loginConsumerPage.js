import React from 'react';
import WalletConnect from '../../components/walletConnect';


const LoginConsumerPage =  () =>  {
    return (<>
    <div class="col-lg-8 mx-auto p-4 py-md-5">
  <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
    <a href="/" class="d-flex align-items-center text-body-emphasis text-decoration-none">
      
      <span class="fs-4">Sorrel</span>
    </a>
  </header>

  <main>
    <h1 class="text-body-emphasis">Welcome to Sorrel Loyalty Programs and Promotions</h1>
    <p class="fs-6 col-md-8">Fast. Secure. Powered by the blockchain.</p>
    <p class="fs-5 col-md-8">Discover a world of perks and privileges with Sorrel! From earning points with every purchase to unlocking exclusive discounts and offers, your favourite store's loyalty programs put the power of savings and rewards right at your fingertips.</p>

    <div class="mb-5">
      <WalletConnect></WalletConnect>
    </div>

    <hr class="col-3 col-md-2 mb-5"/>
  </main>
  <footer class="pt-5 my-5 text-body-secondary border-top">
    Sorrel &middot; &copy; 2024
  </footer>
</div>
    </>);    
}

export default LoginConsumerPage ;