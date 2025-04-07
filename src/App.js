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
import { Avatar } from './components/Loading/Avatar';
import { PC } from './components/Loading/PC';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  if(isLoading) {
    return(
      <div style={{height: '100vh', width: '100vw'}}>
        <Canvas shadows camera={{position: [8, 2, 5], fov: 30}}>
          <color attach="background" args={["#191919"]}/>
          <Loading/>
          <group position-y={-1}>
            <Avatar />
            <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
              <boxGeometry />
              <meshNormalMaterial />
            </mesh>
            <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
              <planeGeometry />
              <meshNormalMaterial wireframe />
            </mesh>
          </group>
          <group rotation-y={Math.PI / 2} position={[0, 0, 1.1]}>
            <group position={[0.3, 0, 0]}>
              <PC/>
            </group>
            <mesh scale={[0.8, 0.6, 3]} position-y={-0.60}>
              <boxGeometry />
              <meshNormalMaterial wireframe/>
            </mesh>
          </group>
          <ambientLight intensity={1}/>
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
