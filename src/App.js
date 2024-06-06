import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import "./App.css"
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Home/>
        <About/>
        <Project/>
        <Skills/>
        <Contact/>
      </div>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/skill" element={<Skills/>} />
      </Routes>
    </Router>
  );
};

export default App;
