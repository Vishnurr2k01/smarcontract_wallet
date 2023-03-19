import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
 
  return (
    <div className=''>
<Router
>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Footer/>
</Router>
    </div>
  );
}

export default App;
