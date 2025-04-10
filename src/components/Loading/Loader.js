import React, { useRef } from "react"
import { Html, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber"

export const Loader = () => {

    const { progress } = useProgress()

    const sphereRef = useRef(null)
    
    useFrame(() => {
        if(sphereRef.current) {
            sphereRef.current.rotation.y  += 0.02
        }
    })

    return (
        <Html fullscreen>
            <div style={styles.overlay}>
            <div style={styles.container}>
                <div style={styles.loader3d}>
                    <Canvas>
                    <mesh
                        ref={sphereRef}
                        scale={[3, 3, 3]}
                    >
                        <octahedronGeometry />
                        <meshNormalMaterial wireframe/>
                     </mesh>
                     </Canvas>
                </div>
                <div style={styles.barWrapper}>
                    <div style={{...styles.bar, width:  `${progress}%`}}/>
                </div>
                <p style={styles.text}>Chargement... {Math.floor(progress)}%</p>
            </div>
            </div>
        </Html>
    )
}

const styles = {
    overlay: {
        backgroundColor: '#191919',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#14FF00',
        fontFamily: 'monospace',
        fontSize: '1rem',
    },
    loader3d : {
        width: '400px',
        height: '200px',
    },
    barWrapper: {
        width: '200px',
        heigth: '10px',
        background: '#333',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '10px',
    },
    bar: {
        height: '100%',
        background: '#14FF00',
        transition: 'width 0.3s ease-in-out',
    },
    text: {
        marginTop: '5px',
    }
}