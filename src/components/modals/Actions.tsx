import React from 'react'
import Base from './Base'
import { MdClose } from 'react-icons/md'
function Actions({isOpen,setConnect,type}:{isOpen:boolean,setConnect:any,type:string}) {
  return (
    <Base isOpen={isOpen} children={<Comp type={type} setConnect={setConnect} isOpen={isOpen}/>}/>
  )
}
const Comp = ({isOpen,setConnect,type}:{isOpen:boolean,setConnect:any,type:string})=>{
    return(
        <div className='flex flex-col items-center text-center gap-6 lg:w-[40vw] py-12'>
            <div>
    <MdClose onClick={()=>setConnect(false)} className='bg-black text-white rounded-full p-1 absolute top-5 right-5 text-3xl '/>
            </div>
            <div className='h-32 w-32 bg-gray-400 rounded-full'>
    
            </div>
            <div className='text-2xl'>
            1inch.io wants to connect with your wallet <br />
             on  Polygon
             <br />
             <br />
             app.1inch.io 
            </div>
               <div className={`${type==="Approve"?'bg-[#2F66F6]':'bg-red-600'}  rounded-xl text-2xl text-white font-semibold w-fit py-2 px-8`}> {type}</div>
        </div>
    )
        }

export default Actions