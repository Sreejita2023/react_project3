import React from 'react'
import Loginform from './Loginform'
import photo from '../assets/login.png'
import back from '../assets/frame.png'
function Login() {
  return (
    <div className='flex justify-around w-screen'>
      <div>
        <div>
           <h1>Welcome Back</h1>
           <p>
             <span>Build skills for today, tomorrow, and beyond.</span>
             <br/>
             <span>Education to future-proof your career.</span>
           </p>
        </div>
        <div>
          <Loginform/>
        </div>
      </div>

      <div>
         <img src={photo} loading='lazy' className='w-96 '/>
         <img src={back} loading='lazy' className='w-96 '/>
      </div>
    </div>
  )
}

export default Login