import React from 'react'
import {BsFuelPump} from 'react-icons/bs'
import Toggle from './Buttons/Toggle'
function Navbar() {
  return (
    <div className='bg-[#231F20] p-4 flex justify-between fixed w-screen'>
        <div className=' '>
         <img src='/assets/logo.png' />
        </div>
        <div className='flex gap-6 items-center'>
            <h2 className='text-white text-3xl '>History</h2>
            <div className='flex items-center bg-[#5C84EB] rounded-full gap-2 px-2 h-fit py-1'>
                <BsFuelPump className='text-black text-3xl '/>
                <h2 className='text-white text-2xl'>100 BANK</h2>
            </div>
            <Toggle/>
        </div>
    </div>
  )
}

export default Navbar