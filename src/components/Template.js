import React from 'react'
import Loginform from './Loginform'
import Signupform from './Signupform'
import frame from '../assets/frame.png'
function Template({title,formtype,image}) {
  return (
    <div className='flex justify-between w-screen px-8 '>
        <div className='flex flex-col w-5/12 px-5'>
           <div className='mb-3'> 
               <h1 className=' font-semibold text-[1.875rem] leading-[2.375rem] '>{title}</h1>
           </div>
           <div className='text-lg font-normal mb-5'>
                <span>Build skills for today, tomorrow, and beyond.</span>
                <br/>
                <span className='text-sky-500 italic'>Education to future-proof your career.</span>
           </div>
           <div>
               {formtype==="signup" ? <Signupform/> : <Loginform/>}
           </div>
           <div>
               <div></div>
               <p>OR</p>
               <div></div>
           </div>
           <div>
               <button>
                   <span>Sign up with Google</span>
               </button>
           </div>
        </div>
        <div className='w-5/12'>
            <img src={image} loading='lazy' className='w-96 '/>
            <img src={frame} loading='lazy' className='w-96 '/>
        </div>
    </div>

    
  )
}

export default Template