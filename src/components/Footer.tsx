import React from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'
import {TiSocialYoutubeCircular} from 'react-icons/ti'
function Footer() {
  return (
    <div style={{
        border:'1px solid black'
    }} className='fixed bottom-0 flex justify-end pr-12 gap-12 py-2 w-screen items-center bg-[#D9D9D9]'>
            <AiOutlineTwitter className='text-5xl text-[#5C84EB]'/>
            <FaDiscord className='text-5xl text-[#5C84EB]'/>
            <TiSocialYoutubeCircular className='text-5xl text-red-600'/>
    </div>
  )
}

export default Footer