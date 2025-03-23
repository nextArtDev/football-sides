'use client'
import React from 'react'
import { OrbitingCircles } from './orbiting-circles'
import StarSvg from '../StarSvg'
import OrbitingItem from './orbiting-item'
import { motion } from 'motion/react'
import Chooghaa from '@/app/background/components/Chooghaa'
import TextSlider from '../TextSlider'
type Props = {}

function OrbitingItems({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden"
    >
      <OrbitingCircles duration={70} iconSize={60} radius={150} speed={10}>
        <OrbitingItem>
          <p>افتخارات</p>
        </OrbitingItem>
        <OrbitingItem>
          <p>افتخارات</p>
        </OrbitingItem>
        <OrbitingItem>
          <p>افتخارات</p>
        </OrbitingItem>
        <OrbitingItem>
          <p>افتخارات</p>
        </OrbitingItem>
        <OrbitingItem>
          <p>افتخارات</p>
        </OrbitingItem>
        <OrbitingItem>
          <p>افتخارات</p>
        </OrbitingItem>
        <OrbitingItem>
          <p>افتخارات</p>
        </OrbitingItem>
        <OrbitingItem>
          <p>افتخارات</p>
        </OrbitingItem>
      </OrbitingCircles>
    </motion.div>
  )
}

export default OrbitingItems
