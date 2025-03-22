import Chooghaa from '@/app/background/components/Chooghaa'
import React from 'react'
// import RotatingStar from './RotatingStar'
// import FallingStars from './falling-stars/FallingStars'
// import DynamicLogo from './DynamicLogo'
import DynamicLogo from './FallingLogo'
import TextScroll from './text-scroll/TextScroll'

function Hero() {
  return (
    <div className="relative  w-full h-screen flex flex-col items-center justify-center text-center gap-4">
      {/* <Chooghaa className="absolute opacity-65 w-full h-1/3 bottom-0 -z-10 mix-blend-difference" /> */}
      <Chooghaa className="fixed opacity-80 w-full h-1/3 bottom-0 -z-10 rotate-180 " />
      <TextScroll />
      <article className="px-2 ">
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          {/* <DynamicLogo /> */}
          <DynamicLogo />
        </div>
        {/* <FallingStars /> */}
        <p>باشگاه و مدرسه فوتبال</p>
        <h1 className="text-4xl text-white  font-bold  mix-blend-difference ">
          سپاهان مسجدسلیمان
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
