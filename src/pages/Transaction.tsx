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