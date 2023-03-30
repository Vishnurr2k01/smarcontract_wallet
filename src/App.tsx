import React, { useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { getGlobalState, setGlobalState, useGlobalState } from './store';
import { connectToMetamask, getSafeAddress } from './services/Blockchain.services';
import Deploy from './pages/Deploy';
import { ethers } from 'ethers'
import EthersAdapter from '@safe-global/safe-ethers-lib'
import SafeAppsSDK, { BaseTransaction, SafeInfo } from '@gnosis.pm/safe-apps-sdk';
import Safe from '@safe-global/safe-core-sdk';
import Web3 from 'web3';
import Web3Adapter from '@safe-global/safe-web3-lib';
import Protected from './Router/Protected';
import { SigningKey } from 'ethers/lib/utils';
import Transaction from './pages/Transaction';



type Opts = {
  allowedDomains?: RegExp[];
  debug?: boolean;
};
function App() {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [safeAccount] = useGlobalState('safeAccounts')
  const [safeaddr] = useGlobalState('selectedSafe')
  useEffect(()=>{
    getSafeAddress()
  },[connectedAccount])
   
  useEffect(()=>{
    if(connectedAccount===''){
      connectToMetamask()
    }
  },[])
  
  
  const opts: Opts = {
    // allowedDomains: [/gnosis-safe.io,/],
    debug: true
  };
  

  const appsSdk = new SafeAppsSDK(opts);


const fetchBalance = async () => {
const provider = new Web3.providers.HttpProvider(`${process.env.REACT_APP_INFURA_KEY}`)
const web3 = new Web3(provider)
// const addr = await appsSdk.safe.getInfo()
// console.log(addr,'ivde')
try {
  if(safeaddr!==''){
    const ethAdapter = new Web3Adapter({ web3, signerAddress: connectedAccount});
    // const safeInfo = await safeSdk.getBalance()
    const safeSdk = await Safe.create({ ethAdapter: ethAdapter, safeAddress: `${safeaddr}` });
    const safeInfo = await safeSdk.getOwners()

    const balance = await safeSdk.getBalance()
    //convert from bignumber to float and wei to eth
    const bal = balance.toString()
  setGlobalState('balance',bal)
  }
  } catch (error) {
    console.log(error)
  }
  
  }
//send a transaction to some address from connectedSafe
const SomerTransaction = async () => {
  const provider = new Web3.providers.HttpProvider(`${process.env.REACT_APP_INFURA_KEY}`)
const web3 = new Web3(provider)
console.log(safeaddr,'dsf')
  if(safeaddr!==''){
    const ethAdapter = new Web3Adapter({ web3, signerAddress: connectedAccount});
    // const safeInfo = await safeSdk.getBalance()
    const safeSdk = await Safe.create({ ethAdapter: ethAdapter, safeAddress: `${safeaddr}` });
  const txn =await safeSdk.createTransaction({
    options:{
      safeTxGas: 100000,

    },
    safeTransactionData:{
      to:'0xAa33Bb036F221546Ec433A2E5c6cBbDeB4d35B8E',
      value:'30000000000000000',
      data:'0x'
    }
  
  });
  //sign the transaction with connected wallet

  const sign = await safeSdk.signTransaction(txn,"eth_signTypedData_v4")
const res = await safeSdk.executeTransaction(sign)
  console.log(res)
  }

}


  const sendSample = async () => {
  console.log('reach')
try {
  const txn =[{
    to:'0xAa33Bb036F221546Ec433A2E5c6cBbDeB4d35B8E',
    value:'30000000000000000',
    data:'0x'
  }] 
  console.log('reach2')
  const safeHash = await appsSdk.txs.send({
    txs: txn
  })
  
  console.log(safeHash,'safeHash')
 
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
        {/* <Route path='/'  element={<Protected smartwallet={safeAccount} isConnected={connectedAccount}> <Home/> </Protected>}/>
        <Route path='/profile' element={<Protected smartwallet={safeAccount} isConnected={connectedAccount}> <Profile/> </Protected>}/> */}
         <Route path='/'  element={ <Deploy/> }/>
        <Route path='/profile' element={<Profile sendSample={sendSample}/> }/>
        <Route path='/home' element={<Home sendSample={SomerTransaction}/>}/>
        <Route path='/txn' element={<Transaction somerTransaction={SomerTransaction}/>}/>
      </Routes>
      <Footer/>
</Router>
    </div>
  );
}

export default App;
