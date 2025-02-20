import React from 'react';
import "./App.css"
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Ribbons from "./components/Animation"

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Ribbons
        baseThickness={30}
        colors={['#ffffff']}
        speedMultiplier={0.5}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
      />
      <Home id="home"/>
      <About id="about"/>
      <Project id="project"/>
      <Skills id="skill"/>
      <Contact id="contact"/>
    </div>
  );
};

export default App;
