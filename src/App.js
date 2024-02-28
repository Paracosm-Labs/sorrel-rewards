import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from './pages/dashboardPage';
import WalletPage from './pages/walletPage';
import ExplorePage from './pages/marketplacePage';
import CampaignsPage from './pages/campaignsPage';
import RewardsPage from './pages/rewardsPage';
import LandingPage from './pages/landingPage';
import LoginConsumerPage from './appConsumer/pages/loginConsumerPage';
import { CONSUMER_DEPLOYMENT, RETAILER_DEPLOYMENT } from './constants/deploymentType';
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
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
      </Routes>
    </Router>
  );
}

export default App;