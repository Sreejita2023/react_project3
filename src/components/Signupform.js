import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { AiOutlineEyeInvisible,AiOutlineEye } from "react-icons/ai";
function Signupform(props) {
  const logged=props.logged
  const setLogged=props.setLogged
  const navigate=useNavigate()
  const [values,setValues]=useState({
      email:"",
      create:"",
      first:"",
      last:"",
      confirm:"",

  })
  const [visible1,setVisible1]=useState(false)
  const [visible2,setVisible2]=useState(false)
  const [group,setGroup]=useState("student")
  console.log(values)
  console.log(visible1)
  console.log(visible2)
  function changeHandler(event){
      const {name,value}=event.target
      setValues((prev)=>({
          ...prev,[name]:value
      }))
  }
  function submitHandler(event){
    event.preventDefault()
    if(values.create===values.confirm){
      setLogged((prev)=>!prev)
      toast.success('Account created', {
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
    else{
      toast.error('Password do not match', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      navigate("#")
    }
  }
  return (
    <div>
      <div className='flex bg-slate-800 w-fit py-2 px-1 rounded-full gap-x-2'>
        <div onClick={()=>setGroup("student")} className={`py-2 px-4 font-semibold font-base rounded-full cursor-pointer ${group==="student"?"bg-black":"bg-transparent"}`}>Student</div>
        <div onClick={()=>setGroup("instructor")} className={`py-2 px-4 font-semibold font-base rounded-full cursor-pointer ${group==="instructor"?"bg-black":"bg-transparent"}`}>Instructor</div>
      </div>
      <form onSubmit={submitHandler}>
        <div className='flex justify-between flex-wrap my-2 max-w-full'>
          <label class="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
              First Name
            </span>
            <input required type="text" name="first" className="mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400 block max-w-full rounded-md focus:border-slate-300 " placeholder="Anubhav" onChange={changeHandler} value={values.first}/>
          </label>
          <label class="block">
            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
              Last Name
            </span>
            <input required type="text" name="last" className="mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400 block w-full rounded-md focus:border-slate-300 " placeholder="Das" onChange={changeHandler} value={values.last}/>
          </label>
        </div>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
            Email Address
          </span>
          <input required type="email" name="email" className="mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400 block w-full rounded-md focus:border-slate-300 " placeholder="Enter email address" onChange={changeHandler} value={values.email}/>
        </label>
        <div className='flex justify-between flex-wrap my-3'>
            <label class="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
                Create Password
              </span>
              <div className=" flex justify-between items-center mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400  w-full rounded-md focus-within:border-slate-300 focus-within:border-2">
                 <input required type={visible1? "text":"password"} name="create" className='bg-transparent outline-none focus:outline-none w-full' placeholder="Enter password" onChange={changeHandler} value={values.create} 
                />
                <div className='cursor-pointer' onClick={()=>setVisible1((prev)=>!prev)}>
                    {visible1?(<AiOutlineEyeInvisible fontSize="1.25rem"/>):(<AiOutlineEye fontSize="1.25rem"/>)}
                </div>
              </div>
            </label>
            <label class="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-base font-medium text-white">
                Confirm Password
              </span>
              <div className=" flex justify-between items-center mt-1 px-3 py-2 bg-richblack-800 border-0 shadow-sm placeholder-slate-400  w-full rounded-md focus-within:border-slate-300 focus-within:border-2">
                 <input required type={visible2? "text":"password"} name="confirm" className='bg-transparent outline-none focus:outline-none w-full' placeholder="Confirm password" onChange={changeHandler} value={values.confirm} 
                 
                />
                <div className='cursor-pointer' onClick={()=>setVisible2((prev)=>!prev)}>
                    {visible2?(<AiOutlineEyeInvisible fontSize="1.25rem"/>):(<AiOutlineEye fontSize="1.25rem"/>)}
                </div>
              </div>
            </label>
        </div>
        <button className='flex justify-center bg-yellow-500 text-black w-full my-2 py-3 font-semibold rounded-md' >Sign In</button>
      </form>
    </div>
  )
}

export default Signupform