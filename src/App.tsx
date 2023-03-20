import React, { useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useGlobalState } from './store';
import { connectToMetamask } from './services/Blockchain.services';
import Deploy from './pages/Deploy';

function App() {

  const [connectedAccount] = useGlobalState('connectedAccount')

  useEffect(()=>{
    if(connectedAccount===''){
      connectToMetamask()
    }
  })
 
  return (
    <div className=''>
<Router
>
      <Navbar/>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/deploy' element={<Deploy/>}/>
      </Routes>
      <Footer/>
</Router>
    </div>
  );
}

export default App;
