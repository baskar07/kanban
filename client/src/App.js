import React from 'react';
import Header from './components/Header/Header';
import Main from './pages/Home/Main';
import { Routes, Route } from 'react-router-dom';
import Boards from './pages/Boards/Boards';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Login from './pages/User/Login';
import Signup from './pages/User/Signup';
import VerifyEmail from './pages/User/VerifyEmail';
import AuthLayout from './components/Layout/AuthLayout';
import AppLayout from './components/Layout/AppLayout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthLayout/>}>
        <Route path='signup' element={<Signup />} />
        <Route path='verify' element={<VerifyEmail />} />
      </Route>
      <Route path='/' element={<AppLayout />}>

      </Route>

      
      

      
      <Route path='/home' element={<Home />}/>

  
      
    </Routes>
    
  )
}

export default App