import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Simple from './components/modals/Base';

function App() {
  return (
    <div className=''>
<Navbar/>
<Profile/>
<Simple children={<></>} isOpen={false}/>
<Footer/>
    </div>
  );
}

export default App;
