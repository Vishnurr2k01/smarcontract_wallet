import {ethers} from 'ethers'
import { getGlobalState, setGlobalState } from '../store';
import { SafeFactory } from '@safe-global/safe-core-sdk';
import EthersAdapter from '@safe-global/safe-ethers-lib';
import Web3 from 'web3';
import Web3Adapter from '@safe-global/safe-web3-lib';
import axios from 'axios';


declare let window: any;


export const connectToMetamask = async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setGlobalState('connectedAccount',accounts[0])
        } catch (error) {
            console.log(error)
        }
    } else {
        console.log('Install Metamask')
    }
}
export const getSafeAddress = async () => {
    const connectedAccount = getGlobalState('connectedAccount')
    const checksummed = Web3.utils.toChecksumAddress(connectedAccount)
   if(connectedAccount!==''){
     const accounts = await axios.get(`https://safe-transaction-goerli.safe.global/api/v1/owners/${checksummed}/safes/`)
     setGlobalState('safeAccounts',accounts.data.safes)
     setGlobalState('selectedSafe',accounts.data.safes[0])
   }
    
  };


