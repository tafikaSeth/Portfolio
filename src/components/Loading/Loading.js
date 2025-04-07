import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { OrbitControls, PointMaterial } from "@react-three/drei";

export const Loading = () => {

    const pointsRef = useRef()

    const particles = useMemo(() => {
        const positions = new Float32Array(4000)
        for(let i= 0; i < positions.length; i++) {
            positions[i] = (Math.random() - 0.5) * 10
        }
        return  positions
    }, [])

    useFrame(() => {
        if(pointsRef.current) {
            pointsRef.current.rotation.y += 0.0005
        }
    })

    return (
        <points ref={pointsRef}>
            <OrbitControls/>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.length / 3}
                    array={particles}
                    itemSize={3}
                />
            </bufferGeometry>
            <PointMaterial color="green" size={0.02}/>
        </points>
    )

}