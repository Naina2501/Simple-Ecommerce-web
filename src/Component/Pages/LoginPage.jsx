import React from 'react'
import "./Css/login.css"
const LoginPage = () => {
  return (
    <div className='login-page'>
      <div className="login-container">
        <h1>Sign-up</h1>
        <div className="login-signup-field">
        <input type='text' placeholder='your name' className='form-control'></input>
         <input type='email' placeholder='your email' className='form-control'></input>
         <input type='password' placeholder='your password' className='form-control'></input>
        </div>
        <button className='btn btn-primary mt-4 w-100'> Continue</button>
        <p className='signup-login'>Already have an Account <span>Login here</span></p>
       <div className="login-agree">
        <input type="checkbox" className='form-check' />
        <p>By continuing ,I agree to the terms of use and privacy policy. </p>
       </div>
      </div>
      
    </div>
  )
}

export default LoginPage
