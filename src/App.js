import React, { useEffect } from 'react';
import "./App.css"
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Ribbons from "./components/Animation"
import Ballpit from './components/Loading';
import { useState } from 'react';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  if(isLoading){
    return(
      <div style={{position: 'relative', overflow: 'hidden', height: '100vh', width: '100%', backgroundColor: '#212121'}}>
        <Ballpit
          count={100}
          colors= {['white','green','#14FF00']}
          gravity={0.5}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>
    )
  }
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
