'use client'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { Group, Object3DEventMap } from 'three'
import Star from '../Pentagon'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
type Props = {}

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Scene({}: Props) {
  const start1Ref = useRef<Group>(null)
  const start2Ref = useRef<Group>(null)
  const start3Ref = useRef<Group>(null)
  const start4Ref = useRef<Group>(null)
  const start5Ref = useRef<Group>(null)

  const start1GroupRef = useRef<Group<Object3DEventMap>>(null)
  const start2GroupRef = useRef<Group<Object3DEventMap>>(null)

  const groupRef = useRef<Group<Object3DEventMap>>(null)

  useGSAP(() => {
    if (
      !start1Ref.current ||
      !start2Ref.current ||
      !start3Ref.current ||
      !start4Ref.current ||
      !start5Ref.current ||
      !start1GroupRef.current ||
      !start2GroupRef.current ||
      !groupRef.current
    )
      return

    // Set start starting location
    gsap.set(start1Ref.current.position, { x: -1.5 })
    gsap.set(start1Ref.current.rotation, { z: -0.5 })

    gsap.set(start2Ref.current.position, { x: 1.5 })
    gsap.set(start2Ref.current.rotation, { z: 0.5 })

    gsap.set(start3Ref.current.position, { y: 5, z: 2 })
    gsap.set(start4Ref.current.position, { x: 2, y: 4, z: 2 })
    gsap.set(start5Ref.current.position, { y: -5 })

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: 'back.out(1.4)',
      },
    })
    // we animate timeline if we have'nt scroll yet, it means we don't set an animation when we scrolled
    if (window.scrollY < 20) {
      // rotation and position at first glance and before scrolling
      introTl
        .from(start1GroupRef.current.position, { y: -5, x: 1 }, 0)
        .from(start1GroupRef.current.rotation, { z: 3 }, 0)
        .from(start2GroupRef.current.position, { y: 5, x: 1 }, 0)
        .from(start2GroupRef.current.rotation, { z: 3 }, 0)
    }

    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
      },
    })

    scrollTl
      // Rotate start group
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      // Start 1 - black cherry
      .to(start1Ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(start1Ref.current.rotation, { z: 0.3 }, 0)

      // Start 2 - Lemon Lime
      .to(start2Ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      .to(start2Ref.current.rotation, { z: 0 }, 0)

      // Start 3 - Grape
      .to(start3Ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(start3Ref.current.rotation, { z: -0.1 }, 0)

      // Start 4 - Strawberry Lemonade
      .to(start4Ref.current.position, { x: 0, y: -0.3, z: 1 }, 1)
      .to(start4Ref.current.rotation, { z: 0.3 }, 0)

      // Start 5 -Watermelon
      .to(start5Ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      .to(start5Ref.current.rotation, { z: -0.25 }, 0)
      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: 'sine.inOut' },
        1.3
      )
  })

  return (
    <group ref={groupRef}>
      <group ref={start1GroupRef}>
        <Star
          ref={start1Ref}
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]} // Rotate 90 degrees
          scale={[0.2, 0.2, 0.2]}
          color="gold"
          outerRadius={1}
          innerRadius={0.5}
          points={5}
        />
      </group>
      <group ref={start2GroupRef}>
        <Star
          ref={start2Ref}
          position={[-2, -0.3, 0]}
          rotation={[0, 0, -Math.PI / 2]} // Rotate 90 degrees
          scale={[0.1, 0.1, 0.1]}
          color="#ff0000"
          outerRadius={1}
          innerRadius={0.5}
          points={5}
        />
      </group>
      <Star
        ref={start3Ref}
        position={[2, -0.3, 0]}
        rotation={[0, 0, -Math.PI / 2]} // Rotate 90 degrees
        scale={[0.1, 0.1, 0.1]}
        color="#00ff00"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
        depth={0.2}
      />

      <Star
        ref={start4Ref}
        position={[2, -0.3, 0]}
        rotation={[0, 0, -Math.PI / 2]} // Rotate 90 degrees
        scale={[0.1, 0.1, 0.1]}
        color="#00ff00"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
        depth={0.2}
      />
      <Star
        ref={start5Ref}
        position={[2, -0.3, 0]}
        rotation={[0, 0, -Math.PI / 2]} // Rotate 90 degrees
        scale={[0.1, 0.1, 0.1]}
        color="#00ff00"
        outerRadius={1}
        innerRadius={0.5}
        points={5}
        depth={0.2}
      />
      {/* <OrbitControls /> */}
      {/* <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} /> */}
    </group>
  )
}
