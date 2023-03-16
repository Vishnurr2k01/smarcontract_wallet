import React from 'react'
import {AiOutlineSwap} from 'react-icons/ai'

function HomeCard() {
  return (
    <div className='bg-[#D7D9E4] p-2 px-4 grid rounded-2xl grid-cols-6 mt-4 items-center text-center'>
        <div className='col-span-2  flex items-center gap-2'>

                <img src='/assets/logo2.png' />
            <div className='flex flex-col'>
                <h2 className='text-2xl'>Bankless DAO</h2>
                <h2>35000 BANK</h2>
            </div>
        </div>
<div className='col-span-1'>
<h2>$3500</h2>
</div>
<div className='col-span-1'>
<h2>$3500</h2>
</div>
<div className='col-span-2 text-center' >
<div className='flex gap-6 items-center justify-center'>
<AiOutlineSwap style={{
    border:'2px solid #2F66F6'
}} className='font-semibold text-3xl text-[#2F66F6] p-1 rounded-md'/>
<AiOutlineSwap style={{
    border:'2px solid #2F66F6'
}} className='font-semibold text-3xl text-[#2F66F6] p-1 rounded-md'/>
<AiOutlineSwap style={{
    border:'2px solid #2F66F6'
}} className='font-semibold text-3xl text-[#2F66F6] p-1 rounded-md'/>
</div>
</div>
    </div>
  )
}

export default HomeCard