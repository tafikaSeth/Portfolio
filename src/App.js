import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
    </div>
    // <Router>
    //   <div className='App'>
    //     <Home/>
    //     <About/>
    //     <Project/>
    //     <Skills/>
    //     <Contact/>
    //   </div>
    //   <Routes>
    //     <Route path="/" element={<Home/>} />
    //     <Route path="/about" element={<About/>} />
    //     <Route path="/project" element={<Project/>} />
    //     <Route path="/skill" element={<Skills/>} />
    //   </Routes>
    // </Router>
  );
};

export default App;
