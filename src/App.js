import React from 'react';
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
      <Home id="home"/>
      <About id="about"/>
:
    </div>
  );
};

export default App;
