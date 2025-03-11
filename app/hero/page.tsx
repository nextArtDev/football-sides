import React from 'react'
import Hero from './components/Hero'
import OrbitingItems from './components/orbiting-circles/orbiting-items'
import DeepScroll from './components/deep-scroll/DeepScroll'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="w-full min-h-screen h-screen ">
      <Hero />
      <div className="h-[80vh] md:h-screen  ">
        <OrbitingItems />
      </div>
      <div className="h-screen bg-blue-500"></div>
      <DeepScroll />
      <div className="h-screen bg-red-500"></div>
    </div>
  )
}
