'use client'
// components/ScrollAnimationScene.tsx
'use client'
import { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import Lenis from '@studio-freight/lenis';
import * as THREE from 'three'
import Star from './Pentagon'

gsap.registerPlugin(ScrollTrigger)

const ScrollAnimationScene = () => {
  const starRef = useRef<THREE.Mesh>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Setup Lenis smooth scroll
    // const lenis = new Lenis({
    //   duration: 1.2,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // });

    // Connect GSAP to Lenis
    // lenis.on('scroll', ScrollTrigger.update);
    // gsap.ticker.add((time) => {
    //   lenis.raf(time * 1000);
    // });
    gsap.ticker.lagSmoothing(0)

    // Set up scroll triggers
    ScrollTrigger.create({
      trigger: '#page1',
      start: 'top top',
      end: 'bottom top',
      onEnter: () => {
        if (!starRef.current) return
        gsap.to(starRef.current?.rotation, {
          y: Math.PI * 4,
          duration: 1.5,
          ease: 'power4.out',
        })
      },
      onLeaveBack: () => {
        if (!starRef.current) return
        gsap.to(starRef.current?.rotation, {
          y: 0,
          duration: 1,
          ease: 'power2.inOut',
        })
      },
    })

    ScrollTrigger.create({
      trigger: '#page2',
      start: 'top center',
      end: 'bottom top',
      onEnter: () => {
        if (!starRef.current) return
        gsap.to(starRef.current?.position, {
          x: 3,
          y: -2,
          z: 1,
          duration: 2,
          ease: 'expo.inOut',
        })
        gsap.to(starRef.current?.rotation, {
          x: Math.PI * 2,
          z: Math.PI,
          duration: 2.5,
          ease: 'power4.inOut',
        })
      },
      onLeaveBack: () => {
        if (!starRef.current) return
        gsap.to(starRef.current?.position, {
          x: 0,
          y: 0,
          z: 0,
          duration: 1.5,
          ease: 'power2.inOut',
        })
      },
    })

    return () => {
      //   lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={contentRef} style={{ height: '200vh' }}>
      <section id="page1" style={{ height: '100vh', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <group ref={starRef}>
            <Star
              color="cyan"
              depth={0.8}
              outerRadius={1.2}
              innerRadius={0.3}
              position={[0, 0, 0]}
            />
          </group>
          <OrbitControls enabled={false} />
        </Canvas>
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <h1>Scroll Down</h1>
        </div>
      </section>

      <section id="page2" style={{ height: '100vh', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[-10, 10, 10]} intensity={1} color="pink" />
          <group ref={starRef}>
            <Star
              color="magenta"
              depth={1.2}
              outerRadius={1.5}
              innerRadius={0.2}
              position={[3, -2, 1]}
              rotation={[Math.PI, 0, Math.PI]}
            />
          </group>
          <OrbitControls enabled={false} />
        </Canvas>
        <div style={{ position: 'absolute', bottom: '20px', right: '20px' }}>
          <h1>Special Position</h1>
        </div>
      </section>
    </div>
  )
}

export default ScrollAnimationScene
