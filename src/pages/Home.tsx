import React from 'react'

import HomeCard from '../components/Cards/HomeCard'
import Header from '../components/Header'
import QrComponent from '../components/QrComponent'
import ConnectDapp from '../components/modals/ConnectDapp'
function Home() {
  
  return (
    <div className='py-28 justify-evenly px-20'>
       <div className='max-w-[80vw]'>
      <Header />
       </div>
       <div className='flex w-[80vw] '>
       <div style={{
        border:'2px solid black',
        overflowY:'scroll',
       }} className='mt-6 w-2/3 p-2 rounded-2xl min-h-[60vh] overflow-y-scroll'>
        <div className='grid grid-cols-6 text-center bg-[#D9D9D9] text-2xl py-2 rounded-t-xl'>
            <div className='col-span-2'>Token</div>
            <div className='col-span-1'>Balance</div>
            <div className='col-span-1'>Price</div>
            <div className='col-span-2'>Action</div>
        </div>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>
        <HomeCard/>

       </div>
      <QrComponent/>
       </div>
      
       
      
    </div>
  )
}

export default Home