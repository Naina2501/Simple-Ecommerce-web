import React from 'react'
import { useState } from 'react'
import "./Css/login.css"
const LoginPage = () => {
const [state,setState]=useState("Login")
const [formData,setformData]=useState({
  username:"",
  password:"",
  email:"",
})

const changeHandler=(e)=>{
setformData({...formData,[e.target.name]:e.target.value});
}

const login = async ()=>{
console.log("login function",formData)
let resData;
 await fetch('http://localhost:4000/login',{
  method:'POST',
  headers:{
    Accept:'application/json',
    'Content-Type':'application/json',
  },
  body:JSON.stringify(formData),

 }).then((response)=>response.json()).then((data)=>resData=data)
  if(resData.success){
  localStorage.setItem('auth-token',resData.token)
  window.location.replace("/");  
  }
  else{
    alert(resData.errors)
  }
}

const signup = async ()=>{
 console.log("Signup function",formData) 
 let resData;
 await fetch('http://localhost:4000/signup',{
  method:'POST',
  headers:{
    Accept:'application/json',
    'Content-Type':'application/json',
  },
  body:JSON.stringify(formData),

 }).then((response)=>response.json()).then((data)=>resData=data)
  if(resData.success){
  localStorage.setItem('auth-token',resData.token)
  window.location.replace("/");  
  }
  else{
    alert(resData.errors)
  }
}


  return (
    <div className='login-page'>
      <div className="login-container">
        <h1>{state}</h1>
        <div className="login-signup-field">
        { state==="Sign Up"?<input type='text' placeholder='your name' className='form-control'value={formData.username} name="username" onChange={changeHandler}></input>:<></>} 
         <input type='email' placeholder='your email' className='form-control' name="email" value={formData.email} onChange={changeHandler} ></input>
         <input type='password' placeholder='your password' name='password' value={formData.password} onChange={ changeHandler} className='form-control'></input>
        </div>
        <button className='btn btn-primary mt-4 w-100' onClick={()=>{state==="Login"?login():signup()}}> Continue</button>
        {state==='Sign Up'? <p className='signup-login'>Already have an Account ? <span onClick={()=>{setState("Login")}}>Login here</span></p>
      :  <p className='signup-login'>Create an Account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
       }
        
        <div className="login-agree">
        <input type="checkbox" className='form-check' />
        <p>By continuing ,I agree to the terms of use and privacy policy. </p>
       </div>
      </div>
      
    </div>
  )
}

export default LoginPage
