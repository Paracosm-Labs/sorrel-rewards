import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WalletPage from './appConsumer/pages/walletPage';
import ExplorePage from './appConsumer/pages/marketplacePage';
import LandingPage from './pages/landingPage';
import { CONSUMER_DEPLOYMENT, RETAILER_DEPLOYMENT } from './constants/deploymentType';
import LoginConsumerPage from './appConsumer/pages/loginConsumerPage';
import RetailerMainPage from './appRetailer/pages/retailerMainPage';
// other imports

function App() {
  const redirectLogin = () => {
    if(process.env.REACT_APP_USER_DEPLOYMENT == CONSUMER_DEPLOYMENT){
      return <Navigate to="/consumerlogin" />
    }
    if(process.env.REACT_APP_USER_DEPLOYMENT == RETAILER_DEPLOYMENT){
      return <RetailerMainPage></RetailerMainPage>
    }    
    return <LandingPage />
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={redirectLogin()} />
        <Route path="/consumerlogin" element={<LoginConsumerPage />} />
        <Route path="/retailerlogin" element={<RetailerMainPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        
      </Routes>
    </Router>
  );
}

export default App;