'use client'
import { PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React from 'react'
import Star from './Pentagon'
import { useScroll, useTransform } from 'motion/react'

const Scene = () => {
  const { scrollYProgress } = useScroll()
  const xPosition = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.5, 0.8, 1],
    [1, 0.3, -0.2, 1.2, -0.1, 0.2]
  )
  const yPosition = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.5, 0.8, 1],
    [1, 0.3, -0.2, 1.2, -0.1, 0.2]
  )
  const zPosition = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 0.5, 0.8, 1],
    [1, 0.3, -0.2, 0.2, -0.1, 0.2]
  )

  const { camera } = useThree()

  useFrame(() => {
    const xPos = xPosition.get()
    const yPos = yPosition.get()
    const zPos = zPosition.get()
    camera.position.set(xPos, yPos, zPos)
    camera.lookAt(0, 0, 0)
  })
  return (
    <group>
      <PerspectiveCamera makeDefault />
      <ambientLight />
      <Star
        position={[-2, -0.3, 0]}
        rotation={[0, 0, -Math.PI / 2]} // Rotate 90 degrees
        scale={[0.1, 0.1, 0.1]}
        color="#ff0000"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
      />
      <Star
        position={[0, 0, 0]}
        rotation={[0, 0, Math.PI / 2]} // Rotate 90 degrees
        scale={[0.2, 0.2, 0.2]}
        color="gold"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
      />
      <Star
        position={[2, -0.3, 0]}
        rotation={[0, 0, -Math.PI / 2]} // Rotate 90 degrees
        scale={[0.1, 0.1, 0.1]}
        color="#00ff00"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
        depth={0.2}
      />
    </group>
  )
}

type Props = {}

function StarScroll({}: Props) {
  return (
    <section className="relative h-[200vh]">
      <div className="sticky top-0 left-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75, near: 0.1, far: 1000 }}
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: '0',
            left: '0',
          }}
          className="  w-full min-h-screen h-screen"
        >
          <Scene />
        </Canvas>
      </div>
    </section>
  )
}

export default StarScroll
