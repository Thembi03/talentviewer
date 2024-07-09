import React, { useState } from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const[action,setAction] = useState("Sign Up");
  const navigate = useNavigate();
  const handleToggleAction = () => {
    if (action === "Sign Up") {
      setAction("Login");
   
    }
    else {
      // Handle login logic and navigation to profile
      // For simplicity, assume navigation happens after a second click
      handleLogin();
    }
  };
  const handleToggleActionSignUp = () => {
    if (action === "Login") {
      setAction("Sign Up");
   
    }
    else {
      // Handle login logic and navigation to profile
      // For simplicity, assume navigation happens after a second click
      handleLogin();
    }
  };
  const handleLogin = () =>{
    navigate('/Profile');
  }

    return (
    <div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
      <div className='inputs'>
      {action==="Login"?<div></div>:<div className='input'>
          
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Company Name'/>
      </div> }
        
        <div className='input'>
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email'/>
        </div>
        <div className='input'>
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Password'/>
        </div>
        {action === "Login"?<div></div>:<div className='input'>
            <img src={password_icon} alt="" />
            <input type="password" placeholder=' Confirm Password'/>
        </div>}
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password"><span>Forgot Password?</span></div>}
      <div className="submit-container">
        
        <div className={action === "Login"?"submit gray":"submit"} onClick={handleToggleActionSignUp}>Sign up</div>

        <div className={action ==="Sign Up"?"submit gray":"submit"} onClick={handleToggleAction}>Log In</div>

      </div>
    </div>
  )
}

export default LoginSignup

