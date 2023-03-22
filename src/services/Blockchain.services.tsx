import {ethers} from 'ethers'
import { getGlobalState, setGlobalState } from '../store';
import { SafeFactory } from '@safe-global/safe-core-sdk';
import EthersAdapter from '@safe-global/safe-ethers-lib';


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
    const safe = await SafeFactory.create({
      ethAdapter: new EthersAdapter({
        ethers,
        signerOrProvider: new ethers.providers.JsonRpcProvider(
          process.env.REACT_APP_INFURA_KEY
        ),
      }),
    });
    const accounts = safe.getAddress();
    console.log(accounts);
  
    
    setGlobalState("safeAccounts", accounts);
  };


