import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import ConnectDapp from './modals/ConnectDapp'
import Actions from './modals/Actions'
function Header() {
  const [connect,setConnect] = React.useState(false)
  return (
    <div className='w-2/3 '>
    <div className=''>
         <h3 className='text-[#11183C] text-sm'>Total Balance</h3>
         <h2 className='text-5xl font-semibold'>$15.1</h2>
     </div>
     <div className='mt-8 flex ml-12 justify-between items-center mr-12'>
         <div className='bg-[#2F66F6] text-white text-2xl w-fit py-1 px-2 rounded-full' onClick={()=>setConnect(true)}>Connect a Dapp</div>
     <div style={{
         boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
         border:'1px solid #D7D9E4 '
     }} className='flex items-center rounded-lg p-3 gap-4'>
         <BiSearchAlt className='text-2xl text-black'/>
         <input className='bg-transparent border-none outline-none text-black text-2xl' placeholder='Search '/>
     </div>
    </div>
    {/* <ConnectDapp setConnect={setConnect} isOpen={connect}/> */}
    <Actions type='Disconnect' setConnect={setConnect} isOpen={connect}/>
    </div>
  )
}

export default Header