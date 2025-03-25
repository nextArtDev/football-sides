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
import InfiniteMenuDemo from '../infinite-menu/InfiniteMenuDemo'
import TextSlider from './components/TextSlider'
import Chooghaa from '../background/components/Chooghaa'
import ChooghaaYellow from '../background/components/ChooghaYellow'

type Props = {}

export default function page({}: Props) {
  return (
    <div className="w-full min-h-screen h-screen ">
      <Hero />
      {/* <section className="fixed -z-20 inset-0">
        <Ball />
      </section> */}
      <div className="relative overflow-x-hidden h-[80vh] bg-foreground  ">
        <OrbitingItems />
        <div className="flex flex-col  ">
          {/* <TextSlider
            text="اخلاق"
            className="absolute
md:bottom-[70%] bottom-[80%] mix-blend-difference"
          />
          <TextSlider
            text="دانش"
            className="absolute
md:bottom-[40%] bottom-[45%] mix-blend-difference"
            reverse
          /> */}
          <TextSlider
            text="ورزش، دانش، اخلاق."
            className="absolute z-[11]
md:bottom-0 bottom-[5%] mix-blend-difference "
          />
        </div>
      </div>
      <HorizontalCanvas />
      <InfiniteMenuDemo />
      <div className="h-[100vh]">
        <Parallax />
      </div>

      <CardSwiper />
      <div className="relative bg-[var(--foreground)]">
        <ChooghaaYellow className="absolute w-full top-0" />
        <DeepScroll />
      </div>
      <RollingGallery autoplay={true} pauseOnHover={true} />
      <div className="h-screen w-full my-0 py-0 ">
        <Orb backgroundColor={'var(--foreground)'} />
      </div>
      {/* <div className="h-screen bg-blue-500"></div>
      <div className="h-screen bg-red-500"></div> */}
    </div>
  )
}
