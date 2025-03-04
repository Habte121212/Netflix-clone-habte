import './App.css';
import Home from './assets/pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './assets/pages/Home/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './firebase';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => { 
      console.log("Auth State Changed:", user); // ✅ Debug log
      if (user) {
        console.log("Logged In");
        navigate('/'); 
      } else {
        console.log("Logged Out");
        navigate('/login'); 
      }
    });

    return () => unsubscribe(); // ✅ Cleanup to avoid memory leaks
  }, [navigate]); // ✅ Dependency added

  return (
    <div>
      <ToastContainer theme = 'dark'/>
      <Routes>
        <Route path="/" element={<Home />} />  {/* ✅ Ensure this works */}
        <Route path="/login" element={<Login />} />  {/* ✅ Corrected '/login' */}
      </Routes>
    </div>
  );
}

export default App;
