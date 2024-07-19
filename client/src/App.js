import React from 'react';
import Header from './components/Header/Header';
import Main from './pages/Home/Main';
import { Routes, Route } from 'react-router-dom';
import Boards from './pages/Boards/Boards';
import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Login from './pages/User/Login';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
          
      <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main/>}>
          <Route index element={<Home />}/>
          <Route path='/boards' element={<Boards />}   />
          <Route path='/settings' element={<Settings />}   />
        </Route>
      
      </Routes>
    </React.Fragment>
  )
}

export default App