import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import HomeCard from '../components/Cards/HomeCard'
function Home() {
  return (
    <div className='pt-28 justify-evenly px-20'>
       <div className='w-2/3'>
       <div className=''>
            <h3 className='text-[#11183C] text-sm'>Total Balance</h3>
            <h2 className='text-5xl font-semibold'>$15.1</h2>
        </div>
        <div className='mt-8 flex ml-12 justify-between items-center mr-12'>
            <div className='bg-[#2F66F6] text-white text-2xl w-fit py-1 px-2 rounded-full'>Connect a Dapp</div>
        <div style={{
            boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
            border:'1px solid #D7D9E4 '
        }} className='flex items-center rounded-lg p-3 gap-4'>
            <BiSearchAlt className='text-2xl text-black'/>
            <input className='bg-transparent border-none outline-none text-black text-2xl' placeholder='Search '/>
        </div>
       </div>
       </div>
       <div className='flex w-[80vw] '>
       <div style={{
        border:'2px solid black'
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
       <div className='w-1/3 flex flex-col items-center'>
       <div style={{
        border:'2px solid black'
       }} className='w-80 h-80 mt-6 shadow-2xl rounded-2xl'>

       </div>
       <div className='bg-[#D7D9E4] w-fit text-2xl mt-6 p-3 rounded-full shadow-2xl'> 0x00000000</div>
       </div>
       </div>
       
      
    </div>
  )
}

export default Home