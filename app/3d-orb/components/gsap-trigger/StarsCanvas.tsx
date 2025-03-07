'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from './GsapStarTrigger'

type Props = {}

function StarsCanvas({}: Props) {
  return (
    <section className="relative h-[200vh]">
      <div className="sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen">
        <Canvas
          camera={{ position: [0, 0, 0], fov: 75, near: 0.1, far: 1000 }}
          //   style={{
          //     width: '100vw',
          //     height: '100vh',
          //     position: 'fixed',
          //     top: '0',
          //     left: '0',
          //   }}
          className="  w-full min-h-screen h-screen"
        >
          <Scene />
        </Canvas>
      </div>
    </section>
  )
}

export default StarsCanvas
