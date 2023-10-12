import React from 'react'

import photo from '../assets/login.png'
import Template from '../components/Template'
function Login(props) {
  const logged=props.logged
  const setLogged=props.setLogged
  return (
    <Template  title="Welcome Back" formtype="login" image={photo} logged={logged} setLogged={setLogged} />
  )
}

export default Login