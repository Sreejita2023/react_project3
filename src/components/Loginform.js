import React, { useCallback } from 'react'
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
function Loginform(props) {
    const logged=props.logged
    const setLogged=props.setLogged
    const navigate=useNavigate()
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
    function submitHandler(event){
      event.preventDefault()
      setLogged((prev)=>!prev)
      toast.success('Logged in', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate("/dashboard")
    }
    
  return (
    <div>
        <form onSubmit={submitHandler}>
        <label class="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
            Email Address
          </span>
          <input required type="email" name="email" className="mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400 block w-full rounded-md focus:border-slate-300 " placeholder="Enter email address" onChange={changeHandler}/>
        </label>
        <label class="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
            Password
          </span>
          <div className=" flex justify-between items-center mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400  w-full rounded-md focus-within:border-slate-300 focus-within:border-2">
             <input required type={visible? "text":"password"} name="password" className='bg-transparent outline-none focus:outline-none w-full' placeholder="Enter password" onChange={changeHandler} value={values.password} 
             
            />
            <div className='cursor-pointer' onClick={()=>setVisible((prev)=>!prev)}>
                {visible?(<AiOutlineEyeInvisible fontSize="1.25rem"/>):(<AiOutlineEye fontSize="1.25rem"/>)}
            </div>
          </div>
          <Link to="#">
            <div className='flex justify-end text-cyan-500 text-xs mt-1'>Forgot Password</div>
          </Link>
         
        </label>
          
        <button className='flex justify-center bg-yellow-500 text-black w-full my-2 py-3 font-semibold rounded-md' >Sign In</button>
        </form>
    </div>
  )
}

export default Loginform