import React from 'react'
import Header from '../components/Header'
import QrComponent from '../components/QrComponent'
import { MdEdit } from 'react-icons/md'
import {FiMail} from 'react-icons/fi'
function Profile() {
  return (
    <div className='pt-28 justify-evenly px-20'>
        <div className='max-w-[80vw]'>
      <Header/>
       </div>
       <div className='flex w-[80vw]  '>
        <div className='w-2/3'>

    <div className='flex flex-col items-center justify-center mx-auto shadow-2xl rounded-2xl px-8 py-12 gap-6 mt-12 w-fit'>
    <div className='bg-gray-400 h-32 w-32 rounded-full'>

    </div>
    <div className='text-2xl flex items-center gap-2'><h1>Name.Eth  </h1><MdEdit/> 
    </div>
    <div style={{
        border:'2px solid #D7D9E4'
    }} className='flex items-center gap-4 w-fit p-2 rounded-md' >
<FiMail className='text-xl text-[#2F66F6]'/>
<div>
    <h2 className='text-xs text-gray-500'>Email address</h2>
    <h2 className='text-base'>baer@bankless.community</h2>
</div>
    </div>
    <div className='bg-[#2F66F6] w-fit text-white text-2xl px-6 py-2 rounded-full'>
        Save
    </div>
    </div>
        </div>
        <QrComponent/>

        </div>
        </div>

  )
}

export default Profile