import * as THREE from 'three'
import React, { JSX, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
    Object_3: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    '/models/soccer_ball-v1.glb'
  ) as GLTFResult
  const modelRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= 0.007

      modelRef.current.position.z -= 0.01
      modelRef.current.rotation.x += 0.0002
    }
  })

  return (
    <group {...props} dispose={null} ref={modelRef} position={[0, -1, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials['Material.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
        // scale={0.15}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials['Material.002']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
        // scale={0.25}
      />
    </group>
  )
}

useGLTF.preload('/models/soccer_ball-v1.glb')
