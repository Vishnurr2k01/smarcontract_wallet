import React, { useEffect, useState } from 'react'
import Base from './Base'

import WalletConnect from "@walletconnect/client";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
// import { SafeAppConnector } from '@gnosis.pm/safe-apps-provider';

import { MdClose } from 'react-icons/md'
import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk';
import { getGlobalState, useGlobalState } from '../../store';
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';

function ConnectDapp({isOpen,setConnect}:{isOpen:boolean,setConnect:any}) {
  return (
    <Base isOpen={isOpen} children={<Comp setConnect={setConnect} isOpen={isOpen}/>}/>
  )
}


const Comp = ({isOpen,setConnect}:{isOpen:boolean,setConnect:any})=>{
  // const [connected, setConnected] = useState(false);
  const [sdk, setSDK] = useState(null);
  const [url,setUrl] = useState('')
  const [wcuri,setWcuri] = useState('')

  // const fun = async ()=>{
  //   try {
  //     const provider = new WalletConnectProvider({
  //       infuraId: "INFURA_ID",
  //     });
  //     await provider.enable();
  //     const uri = await provider.wc.uri;
  // setWcuri(uri)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // async function connectToDapp() {
  //   await fun()
  //   try {
  //     // create a new WalletConnectProvider instance
  //     const walletConnectProvider = new WalletConnectProvider({
  //       bridge: wcuri,
  //     });
  
  //     // create a new SafeAppConnector instance
  //     const safeAppConnector = new SafeAppConnector();
  
  //     // connect the SafeAppConnector to the WalletConnectProvider
  //     await safeAppConnector.connect(walletConnectProvider);
  
  //     // create a new ethers.js provider using the SafeAppConnector
  //     const provider = new ethers.providers.Web3Provider(safeAppConnector.getProvider());
  
  //     // navigate to the dApp URL with the provider
  //     window.location.href = `${url}?provider=${provider.connection.url}`;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

    // Create a new instance of WalletConnectProvider and connect it to the dapp's Ethereum address and chain ID
    

  const connect = async () => {
    const connector = new WalletConnect({
      uri: '',
      clientMeta: {
        description: "WalletConnect Developer App",
        url: url,
        icons: ["https://example.walletconnect.org/favicon.ico"],
        name: "WalletConnect Example",
      },
     
    });
  }

return(
    <div className='flex flex-col items-center text-center gap-6 lg:w-[40vw] py-12'>
        <div>
<MdClose onClick={()=>setConnect(false)} className='bg-black text-white rounded-full p-1 absolute top-5 right-5 text-3xl '/>
        </div>
        <div className='h-32 w-32 bg-gray-400 rounded-full'>

        </div>
        <div className='text-2xl'>
            Connect with wallet Connect
            <br />
            Do not close this window while connecting 
        </div>
        <input style={{
            boxShadow:'5px 8px 4px rgba(109, 82, 82, 0.37)',
            
        }} type="text" value={url} onChange={(e)=>setUrl(e.target.value)} name='url' className=' rounded-xl py-4 px-8 text-lg w-80' placeholder='QR code/link'/>
        <div className='bg-[#696F8C] rounded-xl text-2xl text-white font-semibold w-fit py-2 px-8'> Connect</div>
    </div>
)
}
export default ConnectDapp