import React from 'react'
import Loginform from './Loginform'
import Signupform from './Signupform'
import frame from '../assets/frame.png'
import { FcGoogle } from "react-icons/fc";
function Template({title,formtype,image,logged,setLogged}) {
  return (
    <div className='flex justify-between w-screen px-8 mb-5'>
        <div className='flex flex-col w-5/12 px-5'>
           <div className='mb-3'> 
               <h1 className=' font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
           </div>
           <div className='text-lg font-normal mb-5'>
                <span>Build skills for today, tomorrow, and beyond.</span>
                <br/>
                <span className='text-sky-500 italic'>Education to future-proof your career.</span>
           </div>
           <div className='mb-4 '>
               {formtype==="signup" ? <Signupform logged={logged} setLogged={setLogged}/> : <Loginform logged={logged} setLogged={setLogged}/>}
           </div>
           <div className='flex w-full justify-center items-center
           gap-x-1 mb-4 '>
               <div className='h-[1px] border border-slate-700 w-full'></div>
               <p className=' text-slate-400 font-semibold'>OR</p>
               <div className='h-[1px] border border-slate-700 w-full'></div>
           </div>
           <div className='w-full'>
               <button className='w-full flex border border-slate-500  py-2 justify-center rounded-md
               gap-x-2 items-center '>
                   <FcGoogle/>
                   <span className=' text-slate-400 font-semibold'>Sign up with Google</span>
               </button>
           </div>
        </div>
        <div className='w-5/12 relative'>
            <img src={frame} loading='lazy' className='w-11/12 h-10/12 absolute left-5 top-5'/>
            <img src={image} loading='lazy' className='w-11/12 h-10/12 absolute left-0 top-0'/>
        </div>
    </div>

    
  )
}

export default Template