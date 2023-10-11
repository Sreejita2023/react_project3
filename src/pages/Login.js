import React from 'react'
import Navbar from '../components/Navbar'
import photo from '../assets/login.png'
import Template from '../components/Template'
function Login() {
  return (
    <Template  title="Welcome Back" formtype="login" image={photo}/>
  )
}

export default Login