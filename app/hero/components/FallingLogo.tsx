'use client'
import React, { useRef, useEffect, useState } from 'react'
import RotatingStar from './RotatingStar'
import Image from 'next/image'
import ball from '@/public/images/ball.png'
import { motion, useScroll, useSpring, useTransform } from 'motion/react'

type Props = {}

function DynamicLogo({}: Props) {
  const containerRef = useRef(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)

  // Track dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setViewportHeight(window.innerHeight)
      if (containerRef.current) {
        setContainerHeight((containerRef.current as HTMLElement).offsetHeight)
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  // Scroll tracking with smooth spring physics
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    restDelta: 0.001,
  })

  // Animation ranges
  const yPosition = useTransform(
    smoothProgress,
    [0, 1],
    [0, viewportHeight * 0.4]
  )
  const opacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0])

  return (
    <div ref={containerRef} className="relative h-[120vh] w-full  ">
      <motion.div
        style={{
          y: yPosition,
          //   opacity,
          position: 'sticky',
          top: '15vh',
        }}
        className="relative w-[150px] aspect-square mx-auto flex items-center justify-center"
      >
        <motion.div className="absolute w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0">
          <RotatingStar className="w-full h-full" />
        </motion.div>
        <motion.figure style={{ opacity }}>
          <Image
            fill
            alt="logo"
            src={ball}
            className="scale-50 cursor-not-allowed pointer-events-none"
            //   style={{ transform: 'scale(0.5)' }}
          />
        </motion.figure>
      </motion.div>
    </div>
  )
}

export default DynamicLogo
