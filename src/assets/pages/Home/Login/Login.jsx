import React, { useState } from 'react';
import './Login.css';
import logo from '../../../../assets/images/logo.png';
import { login, signup } from "../../../../firebase.js";
import netflixSpinner from '../../../images/netflixSpinner.webp';  // Correct the import

const Login = () => {
  const [SignState, setSignstate] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);  // ✅ Store error message
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setError(null); // Reset errors
    setLoading(true);

    try {
      if (SignState === "Sign In") {  // ✅ Fixed typo
        await login(email, password);
        console.log("✅ User logged in");
      } else {
        await signup(name, email, password);
        console.log("✅ User signed up");
      }
    } catch (err) {
      console.error("❌ Authentication Error:", err.message);
      setError(err.message);  // ✅ Display error to user
    }
    setLoading(false);
  };

  return (
    loading ? (
      <div className='login_spinner'>
        <img src={netflixSpinner} alt="Loading..." />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} className='login_logo' alt="Netflix Logo" />
        <div className='login_form'>
          <h1>{SignState}</h1>
          {error && <p style={{ color: "red" }}>{error}</p>}  {/* ✅ Show errors */}

          <form onSubmit={user_auth}>  {/* ✅ Prevent form reload */}
            {SignState === "Sign Up" && (
              <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder='Your name' 
                required 
              />
            )}
            <input 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              placeholder='Email' 
              required 
            />
            <input 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              placeholder='Password' 
              required 
            />
            <button type="submit">{SignState}</button> {/* ✅ No onClick needed */}

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
    )
  );
};

export default Login;
