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


function App() {
  const [logged,setLogged]=useState(false)
  return (
    <div className=" bg-black text-white !h-screen w-screen flex flex-col">
        
       <Navbar logged={logged} setLogged={setLogged}/>
       <div className="flex justify-center items-center h-full">
          <Routes>
            <Route path="/" element={<Mainstream/>}>
                <Route index element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          </Routes>
       </div>

    </div>
  )
}

export default App;
