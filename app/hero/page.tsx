import React from 'react'
import Hero from './components/Hero'
import OrbitingItems from './components/orbiting-circles/orbiting-items'
import DeepScroll from './components/deep-scroll/DeepScroll'
import { Canvas } from '@react-three/fiber'
import HorizontalScrollControl from '../horizontal/components/HorizontalScrollControl'
import Orb from '../3d-orb/components/Orb1'
import Parallax from '../parallax/components/Parallax2'
import HorizontalCanvas from '../horizontal/components/Horizontal-canvas'
import RollingGallery from './components/rolling-scores/RollingScores'
import CardSwiper from './components/image-slider/CardSwiper'
import Ball from './components/ball/Ball'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="w-full min-h-screen h-screen ">
      <Hero />
      {/* <section className="fixed -z-20 inset-0">
        <Ball />
      </section> */}
      <div className="h-[80vh]  ">
        <OrbitingItems />
      </div>
      <HorizontalCanvas />

      <div className="h-[100vh]">
        <Parallax />
      </div>
      <DeepScroll />
      <CardSwiper />
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <div className="h-[70vh] w-full my-0 py-0 ">
        <Orb />
      </div>
      {/* <div className="h-screen bg-blue-500"></div>
      <div className="h-screen bg-red-500"></div> */}
    </div>
  )
}
