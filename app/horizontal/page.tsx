'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import HorizontalScrollControl from './components/HorizontalScrollControl'

type Props = {}

function page({}: Props) {
  return (
    <section className="relative w-full h-full overflow-hidden bg-black">
      <div className="h-[50vh] bg-red-500"></div>
      <div className="relative  h-[50vh] md:h-[90vh]">
        <Canvas className="canvas" camera={{ position: [0, 0, 5], fov: 75 }}>
          <HorizontalScrollControl />
        </Canvas>
      </div>
      <div className="h-screen bg-red-500"></div>
    </section>
  )
}

export default page
