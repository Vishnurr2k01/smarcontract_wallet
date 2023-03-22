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
import SafeAppsSDK from '@gnosis.pm/safe-apps-sdk';


type Opts = {
  allowedDomains?: RegExp[];
  debug?: boolean;
};
function App() {
  
  
  const opts: Opts = {
    allowedDomains: [/gnosis-safe.io/],
    debug: false
  };
  

  const SafeAppSdk = new SafeAppsSDK(opts);

  const [connectedAccount] = useGlobalState('connectedAccount')
  
   const fetchBalance = async () => {

    await getSafeAddress()
    if(getGlobalState('safeAccounts') === null && SafeAppSdk) {
        console.log('No Safe Account')
        
    } else {
      
        const safeAccount = getGlobalState('safeAccounts')
        console.log(safeAccount)
        try {
          const balance:any = await SafeAppSdk.safe.getInfo()
          const chain = await SafeAppSdk.safe.getChainInfo();
        console.log(balance,'balance',chain,'chain')
        } catch (error) {
          console.log(error)
        }
    }

    
    
    }

  useEffect(()=>{
    if(connectedAccount===''){
      connectToMetamask()
    }
  },[])

  useEffect(()=>{
    
    fetchBalance()
  },[getGlobalState('safeAccounts')])
 
  return (
    <div className=''>
<Router
>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/deploy' element={<Deploy/>}/>
      </Routes>
      <Footer/>
</Router>
    </div>
  );
}

export default App;
