import { useState, useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Ribbons from "./components/Animation"
import "./App.css"
import { Canvas } from '@react-three/fiber';
import { Loading } from './components/Loading/Loading';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 20000)
  }, [])

  if(isLoading) {
    return(
      <div style={{height: '100vh', width: '100vw'}}>
        <Canvas shadows camera={{position: [0, 2, 5], fov:  30}}>
          <color attach="background" args={["#191919"]}/>
          <Loading/>
        </Canvas>
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
