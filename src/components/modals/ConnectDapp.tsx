import React from 'react'
import Base from './Base'
import { MdClose } from 'react-icons/md'
function ConnectDapp({isOpen,setConnect}:{isOpen:boolean,setConnect:any}) {
  return (
    <Base isOpen={isOpen} children={<Comp setConnect={setConnect} isOpen={isOpen}/>}/>
  )
}


const Comp = ({isOpen,setConnect}:{isOpen:boolean,setConnect:any})=>{
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
            
        }} type="text" className=' rounded-xl py-4 px-8 text-lg w-80' placeholder='QR code/link'/>
        <div className='bg-[#696F8C] rounded-xl text-2xl text-white font-semibold w-fit py-2 px-8'> Connect</div>
    </div>
)
}
export default ConnectDapp