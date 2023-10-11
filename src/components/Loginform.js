import React, { useCallback } from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";

import { useState} from 'react';
function Loginform() {
    const [values,setValues]=useState({
        email:"",
        password:"",
    })
    const [visible,setVisible]=useState(false)
    console.log(values)
    console.log(visible)
    function changeHandler(event){
        const {name,value}=event.target
        setValues((prev)=>({
            ...prev,[name]:value
        }))
    }
    const handleMouseDownPassword=(event)=>{
        event.preventDefault()
    }
   
  return (
    <div>
        <form>
        <label class="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
            Email Address
          </span>
          <input type="email" name="email" className="mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400 block w-full rounded-md focus:border-slate-300 " placeholder="Enter email address" onChange={changeHandler}/>
        </label>
        <label class="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
            Password
          </span>
          <div className=" flex justify-between mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400  w-full rounded-md hover:border-slate-300 hover:border-2">
             <input type={visible? "text":"password"} name="password" className='bg-transparent outline-none focus:outline-none' placeholder="Enter password" onChange={changeHandler} value={values.password} 
             onMouseDown={handleMouseDownPassword}
            />
            <button onClick={()=>setVisible((prev)=>!prev)}>
                {visible?(<AiOutlineEyeInvisible/>):(<AiOutlineEye/>)}
            </button>
          </div>
          
        </label>
        </form>
    </div>
  )
}

export default Loginform