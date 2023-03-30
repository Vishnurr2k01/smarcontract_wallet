import React from 'react'
import Navbar from '../components/Navbar'
import { useGlobalState } from '../store'
import Web3 from 'web3'
import Web3Adapter from '@safe-global/safe-web3-lib'
import Safe from '@safe-global/safe-core-sdk'
import {TypedDataUtils} from 'eth-sig-util'
function Transaction({somerTransaction}:{somerTransaction:()=>void}) {
const [safeaddr] = useGlobalState('selectedSafe')
const [connectedAccount] = useGlobalState('connectedAccount')
 
const SomerTransaction = async () => {
    const provider = new Web3.providers.HttpProvider(`${process.env.REACT_APP_INFURA_KEY}`)
   
  const web3 = new Web3(provider)
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
  return (
    <div>
        <Navbar/>

<div className='pt-32'>

        <button className='text-xl bg-blue-600 text-white flex mx-auto px-6 py-3 rounded-full' onClick={somerTransaction}>Send</button>
</div>
    </div>
  )
}

export default Transaction