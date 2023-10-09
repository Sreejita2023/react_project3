import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Route,Routes} from 'react-router-dom';
import logo from "./assets/Logo.svg"

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Mainstream from "./pages/Mainstream";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className=" bg-black text-white !h-screen w-screen flex flex-col">
       <div className="flex justify-between mx-8 py-8 ">
          <div><Link to="/"><img className=" scale-75"src={logo}/></Link></div>
          <div className="flex gap-x-5 text-slate-300">
             <span><Link to="/">Home</Link></span>
             <span><Link to="/contact">Contact</Link></span>
             <span><Link to="/about">About</Link></span>
          </div>
          <div className="flex gap-x-5 text-slate-300">
             <button className=" bg-white px-4 py-2 border-white bg-opacity-20 border rounded-md"><Link to="/login">Log in</Link></button>
             <button className="bg-white bg-opacity-20 px-4 py-2 border-white border rounded-md"><Link to="/signup">Sign Up</Link></button>
          </div>
       </div>
       <div className="flex justify-center items-center h-full">
          <Routes>
            <Route path="/" element={<Mainstream/>}>
                <Route index element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
            </Route>
          </Routes>
       </div>

    </div>
  )
}

export default App;
