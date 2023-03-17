import React from 'react'

function QrComponent() {
  return (
    <div className='w-1/3 flex flex-col items-center'>
    <div style={{
     border:'2px solid black'
    }} className='w-80 h-80 mt-6 shadow-2xl rounded-2xl'>

    </div>
    <div className='bg-[#D7D9E4] w-fit text-2xl mt-6 p-3 rounded-full shadow-2xl'> 0x00000000</div>
    </div>
  )
}

export default QrComponent