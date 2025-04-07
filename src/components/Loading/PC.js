import React from 'react'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('models/pcOptimize.glb')

export function PC(props) {

  const { nodes, materials } = useGLTF('models/pcOptimize.glb')
  
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['tripo_node_100263a5-9391-48dd-adb8-87982c0cb85f'].geometry} material={materials['tripo_mat_100263a5-9391-48dd-adb8-87982c0cb85f']} />
    </group>
  )
}

