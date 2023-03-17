import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './pages/Profile';

function App() {
  return (
    <div className=''>
<Navbar/>
<Profile/>
<Footer/>
    </div>
  );
}

export default App;
