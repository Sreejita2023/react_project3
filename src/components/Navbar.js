import React from 'react'
import { Link } from "react-router-dom";
// import { useState } from 'react';
import logo from "../assets/Logo.svg"

function Navbar(props) {
    const logged=props.logged
    const setLogged=props.setLogged
  return (
    <div className="flex justify-between mx-8 py-8 mb-14  ">
          <div><Link to="/"><img className=" scale-75"src={logo}/></Link></div>
          <div className="flex gap-x-5 text-slate-300">
             <span><Link to="/">Home</Link></span>
             <span><Link to="/contact">Contact</Link></span>
             <span><Link to="/about">About</Link></span>
          </div>


          <div className="flex gap-x-5 text-slate-300">
               {
                 logged && 
                 <Link to="/dashboard">
                    <button onClick={()=>setLogged((prev)=>!prev)} className=" bg-white px-4 py-2 border-white bg-opacity-20 border rounded-md">Log out</button>
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