import Chooghaa from '@/app/background/components/Chooghaa'
import React from 'react'
import SplittingStars from './spinning-text/splitting-stars'
import { Demo } from './CircularRotator'

type Props = {}

function Hero({}: Props) {
  return (
    <div className="relative  w-full h-full flex flex-col items-center justify-center text-center gap-4">
      <Chooghaa className="absolute inset-0 -z-10 mix-blend-difference" />
      <Demo />
      <article className="px-2">
        <p>باشگاه و مدرسه فوتبال</p>
        <h1 className="text-3xl text-white  font-bold  mix-blend-difference ">
          باشگاه و مدرسه فوتبال سپاهان مسجدسلیمان
        </h1>
        <h2 className="text-lg font-semibold">
          آموزش فوتبال و فوتسال بانوان و آقایان <br /> در رده‌های سنی 6 تا 17
          سال
        </h2>
      </article>
    </div>
  )
}

export default Hero
