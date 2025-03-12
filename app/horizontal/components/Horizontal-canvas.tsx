'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import HorizontalScrollControl from './HorizontalScrollControl'

type Props = {}

function HorizontalCanvas({}: Props) {
  return (
    <div className="relative  h-[50vh] md:h-[90vh]">
      <Canvas className="canvas" camera={{ position: [0, 0, 5], fov: 75 }}>
        <HorizontalScrollControl />
      </Canvas>
    </div>
  )
}

export default HorizontalCanvas
