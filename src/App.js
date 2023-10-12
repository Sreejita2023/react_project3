import React from "react";
import "./App.css";
import { Route,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import { useState } from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Mainstream from "./pages/Mainstream";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [logged,setLogged]=useState(false)
  return (
    <div className=" bg-black text-white min-h-screen w-screen flex flex-col">
        
       <Navbar logged={logged} setLogged={setLogged}/>
       <div className="flex justify-center items-end h-full">
          <Routes>
            <Route path="/" element={<Mainstream/>}>
                <Route index element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" className="py-50" element={<About/>}/>
                <Route path="/login" element={<Login logged={logged} setLogged={setLogged}/>} />
                <Route path="/signup" element={<Signup logged={logged} setLogged={setLogged}/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          </Routes>
          <ToastContainer/>
       </div>

    </div>
  )
}

export default App;
