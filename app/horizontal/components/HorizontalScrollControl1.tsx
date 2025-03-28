'use client'
/* eslint-disable jsx-a11y/alt-text */
import {
  Image as ImageImpl,
  Preload,
  Scroll,
  ScrollControls,
  useScroll,
} from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import { Group, Mesh } from 'three'

interface ImageProps {
  position: number[]
  scale: number[]
  url: string
  // Add any additional props here
}

function Image(props: ImageProps) {
  const ref = useRef<Mesh>(null)
  const group = useRef<Group>(null)
  const data = useScroll()

  useFrame((state, delta) => {
    if (group.current) {
      group.current.position.z = THREE.MathUtils.damp(
        group.current.position.z,
        Math.max(0, data.delta * 50),
        4,
        delta
      )
    }
    if (ref.current?.material) {
      const material = ref.current.material as THREE.Material & {
        grayscale?: number
      }
      if (material.grayscale !== undefined) {
        material.grayscale = THREE.MathUtils.damp(
          material.grayscale,
          Math.max(0, 1 - data.delta * 1000),
          4,
          delta
        )
      }
    }
  })

  return (
    <group ref={group}>
      <ImageImpl
        {...props}
        position={props.position as [number, number, number]}
        scale={
          props.scale as
            | number
            | [number, number]
            // | [number, number, number]
            | undefined
        }
        transparent
        ref={ref}
      />
    </group>
  )
}

interface PageProps {
  m?: number
  urls: string[]
  position?: THREE.Vector3 | [number, number, number]
  scale?: THREE.Vector3 | [number, number, number]
}

function Page({ m = 0.4, urls, ...props }: PageProps) {
  const { width } = useThree((state) => state.viewport)
  const w = width < 10 ? 1.5 / 3 : 1 / 3
  const scale = [width * w - m * 2, 5, 1] as [number, number, number]

  return (
    <group {...props}>
      <Image
        position={[-width * w, 0, -1] as [number, number, number]}
        scale={scale}
        url={urls[0]}
      />
      <Image
        position={[0, 0, 0] as [number, number, number]}
        scale={scale}
        url={urls[1]}
      />
      <Image
        position={[width * w, 0, 1] as [number, number, number]}
        scale={scale}
        url={urls[2]}
      />
    </group>
  )
}

function Pages() {
  const { width } = useThree((state) => state.viewport)
  return (
    <>
      <Page
        position={[-width * 1, 0, 0] as [number, number, number]}
        urls={['/niazmand.png', '/niazmand.png', '/niazmand.png']}
      />
      <Page
        position={[width * 0, 0, 0] as [number, number, number]}
        urls={['/niazmand.png', '/niazmand.png', '/niazmand.png']}
      />
      <Page
        position={[width * 1, 0, 0] as [number, number, number]}
        urls={['/niazmand.png', '/niazmand.png', '/niazmand.png']}
      />
      <Page
        position={[width * 2, 0, 0] as [number, number, number]}
        urls={['/niazmand.png', '/niazmand.png', '/niazmand.png']}
      />
    </>
  )
}

export default function HorizontalScrollControl() {
  return (
    <Suspense fallback={null}>
      <ScrollControls horizontal damping={1} pages={4} distance={1}>
        <Scroll>
          <Pages />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: 'absolute', top: '20vh', left: '-75vw' }}>
            home
          </h1>
          <h1 style={{ position: 'absolute', top: '20vh', left: '25vw' }}>
            to
          </h1>
          <h1 style={{ position: 'absolute', top: '20vh', left: '125vw' }}>
            be
          </h1>
          <h1 style={{ position: 'absolute', top: '20vh', left: '225vw' }}>
            home
          </h1>
        </Scroll>
      </ScrollControls>
      <Preload />
    </Suspense>
  )
}
