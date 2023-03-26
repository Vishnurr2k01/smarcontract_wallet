import React, { useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getGlobalState, useGlobalState } from './store';
import { connectToMetamask, getSafeAddress } from './services/Blockchain.services';
import Deploy from './pages/Deploy';
import { ethers } from 'ethers'
import EthersAdapter from '@safe-global/safe-ethers-lib'
import SafeAppsSDK, { SafeInfo } from '@gnosis.pm/safe-apps-sdk';
import Safe from '@safe-global/safe-core-sdk';
import Web3 from 'web3';
import Web3Adapter from '@safe-global/safe-web3-lib';
import Protected from './Router/Protected';



type Opts = {
  allowedDomains?: RegExp[];
  debug?: boolean;
};
function App() {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [safeAccount] = useGlobalState('safeAccounts')
  
   
  useEffect(()=>{
    if(connectedAccount===''){
      connectToMetamask()
    }
  },[])
  
  
  const opts: Opts = {
    // allowedDomains: [/gnosis-safe.io,/],
    debug: false
  };
  

  const appsSdk = new SafeAppsSDK(opts);


const fetchBalance = async () => {
const provider = new Web3.providers.HttpProvider(`${process.env.REACT_APP_INFURA_KEY}`)
const web3 = new Web3(provider)
// const addr = await appsSdk.safe.getInfo()
// console.log(addr,'ivde')
try {
  const ethAdapter = new Web3Adapter({ web3, signerAddress: connectedAccount});
    console.log(safeAccount)
    // const safeInfo = await safeSdk.getBalance()
    const safeSdk = await Safe.create({ ethAdapter: ethAdapter, safeAddress: '0x06f5f6fa99355462a1BD6089C0691BA6d733ac4B' });
    console.log(safeSdk)
    const safeInfo = await appsSdk.safe.getChainInfo()
    console.log(safeInfo)
  } catch (error) {
    console.log(error)
  }
  
  }
  useEffect(()=>{
  
    fetchBalance()
  },[getGlobalState('safeAccounts'),appsSdk])
 
  return (
    <div className=''>
<Router
>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Protected smartwallet={safeAccount} isConnected={connectedAccount}> <Home/> </Protected>}/>
        <Route path='/profile' element={<Protected smartwallet={safeAccount} isConnected={connectedAccount}> <Profile/> </Protected>}/>
        <Route path='/deploy' element={<Deploy/>}/>
      </Routes>
      <Footer/>
</Router>
    </div>
  );
}

export default App;
