import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PC(props) {
  const { nodes, materials } = useGLTF('models/pc.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['tripo_node_100263a5-9391-48dd-adb8-87982c0cb85f'].geometry} material={materials['tripo_mat_100263a5-9391-48dd-adb8-87982c0cb85f']} />
    </group>
  )
}

useGLTF.preload('models/pc.glb')
