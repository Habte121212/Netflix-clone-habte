import React, { useState } from 'react';
import './Login.css';
import logo from '../../../../assets/images/logo.png';

const Login = () => {
  const [SignState, setSignstate] = useState("Sign In");

  return (
    <div className='login'>
      <img src={logo} className='login_logo' alt="Netflix Logo" />
      <div className='login_form'>
        <h1>{SignState}</h1>
        <form>
          {SignState === "Sign Up" ? <input type="text" placeholder='Your name' /> : null}
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button type="submit">{SignState}</button>
          <div className='form_help'>
            <div className='remember'>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe"> Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form_switch'>
          {SignState === "Sign In" ? (
            <p>New to Netflix? <span onClick={() => setSignstate("Sign Up")}>Sign Up Now</span></p>
          ) : (
            <p>Already have an account? <span onClick={() => setSignstate("Sign In")}>Sign In Now</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;