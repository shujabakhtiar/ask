// App.js
import React from 'react';
import { Route, Routes  } from 'react-router-dom';
import { Home } from './pages/Home';
import Navbar from './components/navbar/Navbar';
import { Project } from './pages/Project';
import "./App.css"

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <div className='z-0'>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="about" element={<Project/>} />
      </Routes>
        </div>
     
    </div>
      
  
  );
};

export default App;
