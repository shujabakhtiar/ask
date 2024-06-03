// App.js
import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import { Home } from './pages/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/common/Footer';
import "./App.css"
import { Models } from './pages/Models';
import { Materials } from './pages/Materials';

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <div className='z-0'>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/models" element={<Models/>} />
         <Route path="/materials" element={<Materials/>} />
      </Routes>
        </div>
        <Footer/>

    </div>
      
  
  );
};

export default App;
