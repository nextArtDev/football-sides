'use client'
import * as THREE from 'three'
import { JSX, Suspense, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Preload, Image as ImageImpl } from '@react-three/drei'
import { ScrollControls, Scroll, useScroll } from '@react-three/drei'

function Image({
  url,
  ...props
}: { url: string } & JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null)
  return (
    <mesh ref={ref} {...props}>
      <ImageImpl url={url} transparent />
    </mesh>
  )
}

function Page({ urls, width }: { urls: string[]; width: number }) {
  return (
    <group>
      <Image
        url={urls[0]}
        position={[-width / 2.5, 0, 0]}
        scale={[width / 3, 5, 1]}
      />
      <Image url={urls[1]} position={[0, 0, 0]} scale={[width / 3, 5, 1]} />
      <Image
        url={urls[2]}
        position={[width / 2.5, 0, 0]}
        scale={[width / 3, 5, 1]}
      />
    </group>
  )
}

function Pages() {
  const { width } = useThree((state) => state.viewport)
  const scroll = useScroll()
  const group = useRef<THREE.Group>(null)
  const pages = 4 // Should match ScrollControls pages prop

  useFrame(() => {
    if (group.current) {
      group.current.position.x = THREE.MathUtils.damp(
        group.current.position.x,
        -scroll.offset * (width * pages),
        8,
        0.016
      )
    }
  })

  return (
    <group ref={group}>
      <Page
        urls={['/niazmand.png', '/niazmand.png', '/niazmand.png']}
        width={width}
      />
      <Page
        urls={['/niazmand.png', '/niazmand.png', '/niazmand.png']}
        width={width}
      />
      <Page
        urls={['/niazmand.png', '/niazmand.png', '/niazmand.png']}
        width={width}
      />
      <Page
        urls={['/niazmand.png', '/niazmand.png', '/niazmand.png']}
        width={width}
      />
    </group>
  )
}

export default function HorizontalScrollControl() {
  return (
    <Suspense fallback={null}>
      <ScrollControls horizontal damping={0.1} pages={4}>
        <Scroll>
          <Pages />
        </Scroll>
        <Scroll html>
          <h1 style={{ position: 'absolute', left: '10vw' }}>Section 1</h1>
          <h1 style={{ position: 'absolute', left: '110vw' }}>Section 2</h1>
          <h1 style={{ position: 'absolute', left: '210vw' }}>Section 3</h1>
          <h1 style={{ position: 'absolute', left: '310vw' }}>Section 4</h1>
        </Scroll>
      </ScrollControls>
      <Preload />
    </Suspense>
  )
}
