'use client'
import React, { useRef } from 'react'
import RotatingStar from './RotatingStar'

import Image from 'next/image'
import ball from '@/public/images/ball.png'
import logo from '@/public/images/logo.png'
import { motion, useScroll, useTransform } from 'motion/react'
type Props = {}

function DynamicLogo({}: Props) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const yPosition = useTransform(scrollYProgress, [0, 1], [0, 1200])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  return (
    <motion.div
      // ref={sectionRef}
      style={{ y: yPosition }}
      className="relative  w-[150px] aspect-square items-center justify-center flex flex-col  "
    >
      <motion.div
        // style={{ translateY: yPosition }}
        className="absolute w-fit h-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0  "
      >
        <RotatingStar className="" />
      </motion.div>
      <motion.figure style={{ opacity }}>
        <Image
          fill
          alt="logo"
          src={logo}
          className="scale-50 cursor-not-allowed pointer-events-none"
        />
      </motion.figure>
    </motion.div>
  )
}

export default DynamicLogo
