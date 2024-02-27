import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboardPage';
import WalletPage from './pages/walletPage';
import ExplorePage from './pages/marketplacePage';
import CampaignsPage from './pages/campaignsPage';
import RewardsPage from './pages/rewardsPage';
// other imports

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        // other routes
      </Routes>
    </Router>
  );
}

export default App;