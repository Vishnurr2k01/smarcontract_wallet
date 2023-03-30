import React from 'react'
import { useGlobalState } from '../store'

function QrComponent() {
  const [selectedSafe] = useGlobalState('selectedSafe')
  return (
    <div className='w-1/3 flex flex-col items-center'>
    <div style={{
     border:'2px solid black'
    }} className='w-80 h-80 mt-6 shadow-2xl rounded-2xl'>

    </div>
    <div className='bg-[#D7D9E4] w-fit text-2xl mt-6 p-3 rounded-full shadow-2xl'> {selectedSafe!=='' ? selectedSafe.slice(0,15) : '0x0000000000'}</div>
    </div>
  )
}

export default QrComponent