import React, { useState } from 'react';
import { useConnect } from '@particle-network/auth-core-modal';

const WalletConnect = () => {
  const { connect, disconnect, connected } = useConnect();
  const [userInfo, setUserInfo] = useState(null);

  const handleConnect = async () => {
    if (!connected) {
      try {
        const info = await connect();
        setUserInfo(info);
        console.log('Connected successfully.', info);
      } catch (error) {
        console.error('Failed to connect:', error);
      }
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      setUserInfo(null); // Clear user info upon disconnecting
      console.log('Disconnected successfully.');
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  return (
    <>
      {connected ? (
        <div className="btn-group">
          <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Connected
          </button>
          <ul className="dropdown-menu">
            {/* <li>{userInfo.wallets[1].public_address}</li>  */}
            <li><a className="dropdown-item" href="#" onClick={handleDisconnect}>Disconnect Wallet</a></li>
            {/* You can add more options here */}
          </ul>
        </div>
      ) : (
        <button className="btn btn-warning" onClick={handleConnect}>Connect Wallet</button>
      )}

      {connected && userInfo && (
        <div className="user-info mt-2">
          {/* Display user information here */}
          
          {/* You can add more user info fields here as needed */}
        </div>
      )}
    </>
  );
};

export default WalletConnect;
