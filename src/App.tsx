import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Simple from './components/modals/Base';
import ConnectDapp from './components/modals/ConnectDapp';

function App() {
 
  return (
    <div className=''>
<Navbar/>
{/* <Profile/> */}
<Home/>
<Footer/>
    </div>
  );
}

export default App;
