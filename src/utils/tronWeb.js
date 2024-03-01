import { WALLET_AVAILABLE_NOT_LOGGED_IN, WALLET_NOT_DETECTED, WALLET_SUCCESS } from "../constants/wallet";
import { isSupportedNetwork } from "./network";



//https://github.com/ibnzUK/Tron-Wallet-React-Integration/blob/main/src/App.js
const getWalletDetails = async () => {
  if (window.tronWeb) {
    //checking if wallet injected
    if (window.tronWeb.ready) {
      //we have wallet and we are logged in
      return {
        status: WALLET_SUCCESS,
        name: window.tronWeb.defaultAddress.name,
        address: window.tronWeb.defaultAddress.base58,
        network: window.tronWeb.fullNode.host,
        isSupportedNetwork: isSupportedNetwork(window.tronWeb.fullNode.host),
        link: "true",
      };
    } else {
      //we have wallet but not logged in
      return {
        status: WALLET_AVAILABLE_NOT_LOGGED_IN,
        name: "none",
        address: "none",
        network: "none",
        link: "false",
        isSupportedNetwork: null,
      };
    }
  } else {
    //wallet is not detected at all
    return {
      status: WALLET_NOT_DETECTED,
      name: null,
      address: null,
      network: null,
      link: null,
      isSupportedNetwork: null,
    };
  }
};

export default getWalletDetails;
