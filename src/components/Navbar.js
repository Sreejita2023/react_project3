import React from 'react'
import { Link } from "react-router-dom";
// import { useState } from 'react';
import logo from "../assets/Logo.svg"
import { toast } from 'react-toastify';
function Navbar(props) {
    const logged=props.logged
    const setLogged=props.setLogged
    function clickHandle(){
      toast.success('Logged out', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      setLogged((prev)=>!prev)
    }
  return (
    <div className="flex justify-between mx-8 py-8   ">
          <div><Link to="/"><img className=" scale-75"src={logo}/></Link></div>
          <div className="flex gap-x-5 text-slate-300">
             <span><Link to="/">Home</Link></span>
             <span><Link to="/contact">Contact</Link></span>
             <span><Link to="/about">About</Link></span>
          </div>


          <div className="flex gap-x-5 text-slate-300">
               {
                 logged && 
                 <Link to="/">
                    <button onClick={clickHandle} className=" bg-white px-4 py-2 border-white bg-opacity-20 border rounded-md">Log out</button>
                 </Link>
               }
               {
                 logged && 
                 <Link to="/dashboard">
                    <button  className=" bg-white px-4 py-2 border-white bg-opacity-20 border rounded-md">Dashboard</button>
                 </Link>
               }
               {
                 !logged && 
                 <Link to="/login">
                    <button  className=" bg-white px-4 py-2 border-white bg-opacity-20 border rounded-md">Log in</button>
                 </Link>
               }
               {
                 !logged && 
                 <Link to="/signup">
                    <button  className=" bg-white px-4 py-2 border-white bg-opacity-20 border rounded-md">Sign up</button>
                 </Link>
               }

          </div>
       </div>
  )
}

export default Navbar