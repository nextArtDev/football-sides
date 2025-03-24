'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ReactLenis from 'lenis/react'
import Image from 'next/image'

type Props = {}

function DeepScroll({}: Props) {
  const cardPositions = [
    { top: '30%', left: '55%' },
    { top: '20%', left: '10%' },
    { top: '50%', left: '20%' },
    { top: '45%', left: '60%' },
    { top: '40%', left: '30%' },
    { top: '45%', left: '5%' },
    // { top: '20%', left: '50%' },
    // { top: '48%', left: '10%' },
    // { top: '20%', left: '40%' },
    // { top: '45%', left: '45%' },
  ]
  gsap.registerPlugin(ScrollTrigger)
  const container = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      const lenis = new Lenis()
      lenis.on('scroll', ScrollTrigger.update)
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })
      gsap.ticker.lagSmoothing(0)
      const cards = document.querySelectorAll('#card')
      cards.forEach((card) => {
        gsap.set(card, {
          z: -50000,
          scale: 0,
        })
      })
      ScrollTrigger.create({
        trigger: '#scope',
        start: 'top top',
        // end: `+=${window.innerHeight *  5}px`,
        end: `+=${window.innerHeight * 1.1}px`,
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          cards.forEach((card, i) => {
            // const staggerOffset = i * 0.08
            const staggerOffset = i * 0.15
            const scaledProgress = (self.progress - staggerOffset) * 3
            const individuProgress = Math.max(0, Math.min(1, scaledProgress))
            const targetZ = i === cards.length - 1 ? 1500 : 2000
            const newZ = -50000 + (targetZ + 50000) * individuProgress
            const scaleProgress = Math.min(1, individuProgress * 10)
            const scale = Math.max(0, Math.min(1, scaleProgress))

            gsap.set(card, {
              z: newZ,
              scale,
            })
          })
        },
      })
    },
    { scope: container }
  )

  return (
    <ReactLenis root>
      <div ref={container} className="relative">
        <div
          id="scope"
          className="h-[50vh] md:h-screen overflow-hidden relative "
        >
          {/* <div className="h-[250vh] w-[250vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  img-in transform-3d z-[-1] "> */}
          <div className="h-[50vh]  w-[100vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  img-in transform-3d z-[-1] ">
            <div className="  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[47%] -translate-z-[300rem] rotate-x-[91.6deg] ">
              {Array.from({ length: 30 }).map((_, i) => (
                <article key={i}>
                  {/* <h1 className="text-3xl">Work</h1> */}
                  <h1 className="text-3xl"> </h1>
                </article>
              ))}
            </div>
          </div>
          {cardPositions.map(({ top, left }, i) => (
            <div
              key={i}
              id="card"
              className="absolute w-[200px] h-[150px] md:w-[400px] md:h-[250px] will-change-transform overflow-hidden transform transform-3d "
              style={{ top: top, left: left }}
            >
              <Image
                fill
                alt="gallery"
                className="rounded-xl w-full h-full object-cover"
                src={`/images/${i + 100}.webp`}
              />
            </div>
          ))}
        </div>
      </div>
    </ReactLenis>
  )
}

export default DeepScroll
