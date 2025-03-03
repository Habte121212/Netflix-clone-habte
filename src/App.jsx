import './App.css'
import Home from './assets/pages/home/home';
import { Routes, Route } from 'react-router-dom';
import Login from './assets/pages/Home/Login/Login';


function App() {
  

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element= { <Home/>} />
          <Route path='/Login' element= { <Login/>} />
        </Routes>
      
      </div>
    </>
  );
}

export default App
