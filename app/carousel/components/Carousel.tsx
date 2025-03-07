'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'

type Props = {}

function Carousel({}: Props) {
  const totalSlides = 7
  const [currentIndex, setCurrentIndex] = useState(1)
  const [active, setActive] = useState()
  return (
    <section>
      <div className="slider w-[100vw] h-[100vh]">
        <div className="slider-title absolute top-0 left-0 w-[300vw] h-[100vh] flex z-[20] pointer-events-none">
          <div className="title flex-1 w-full h-full flex items-center justify-center">
            <h1
              className={cn(
                'text-center font-bold text-2xl text-[#ffffff20]',
                active && 'text-[#fff80]'
              )}
              style={{ transition: 'color 0.25s ease, opacity 0.25s ease' }}
            >
              Iron Edge1
            </h1>
          </div>
          <div className="title flex-1 w-full h-full flex items-center justify-center">
            <h1
              className={cn('text-center font-bold text-2xl text-[#ffffff20]')}
              style={{ transition: 'color 0.25s ease, opacity 0.25s ease' }}
            >
              Iron Edge2
            </h1>
          </div>
          <div className="title flex-1 w-full h-full flex items-center justify-center">
            <h1
              className={cn('text-center font-bold text-2xl text-[#ffffff20]')}
              style={{ transition: 'color 0.25s ease, opacity 0.25s ease' }}
            >
              Iron Edge3
            </h1>
          </div>
        </div>
        <div className="slide-images w-[550px] h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50">
          <div
            className={cn('img-top absolute inset-0')}
            style={{
              clipPath: active
                ? 'polygon(90% 0%, 100% 0%, 10% 50%, 90% 50%)'
                : 'polygon(85% 0%, 0 0, 0 50%, 85% 50%)',
              transition: 'clip-path 1s cubic-bezier(0.75, 0.82, 0.165,1)',
            }}
          ></div>
          <div
            className="img-bottom  absolute inset-0"
            style={{
              clipPath: active
                ? 'polygon(90% 50%, 10% 50%, 10% 100%, 90% 100%)'
                : 'polygon(100% 50%, 15% 50%, 15% 100%, 100% 100%)',
              transition: 'clip-path 1s cubic-bezier(0.75, 0.82, 0.165,1)',
            }}
          ></div>
        </div>
      </div>
    </section>
  )
}

export default Carousel
