import React from 'react'
import Template from '../components/Template'
import photo from '../assets/signup.png'
function Signup(props) {
  const logged=props.logged
  const setLogged=props.setLogged
  return (
    <Template  title="Join the millions learning to code with StudyNotion for free" formtype="signup"  image={photo}
    logged={logged} setLogged={setLogged}  />
  )
}

export default Signup