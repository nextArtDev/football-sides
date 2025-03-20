'use client'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { ReactNode, Suspense } from 'react'

const RenderModel = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <Canvas
      className={clsx('w-ful h-screen -z-10 relative', className)}
      shadows={false}
      dpr={[1, 2]}

      // dpr is the device pixel ratio. Here we are setting it to 1 and 2 for retina displays to prevent blurriness in the model rendering on high resolution screens.
    >
      <OrbitControls />

      <Suspense fallback={null}>{children}</Suspense>

      {/* <Environment preset="forest" /> */}
      <directionalLight intensity={10} />
      <Environment
        files="/images/hdri2.jpg"
        background
        backgroundBlurriness={0.08}
      />
    </Canvas>
  )
}

export default RenderModel
