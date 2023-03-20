import {ethers} from 'ethers'
import { setGlobalState } from '../store';


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

