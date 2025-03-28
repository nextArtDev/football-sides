import React from 'react'
import { MultiDirectionSlide } from './MultiDirectionalsSlide'
import MorphingText from './MorphingText'

const texts = [
  'تاکتیک',
  'تکنیک',
  'مهارتهای فردی',
  'دروازه‌بانی',
  '',
  '',
  '',
  '',
]

function ParallaxText() {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-evenly ">
      <MultiDirectionSlide
        className="font-display text-center text-4xl font-bold -tracking-widest  bg-white/30 backdrop-blur-sm rounded-md px-3 py-2 md:text-7xl md:leading-[5rem]"
        textLeft="با مدیریت"
        textRight="محمدمراد صالح‌نیا"
      />
      <MorphingText texts={texts} />
      <MultiDirectionSlide
        className="font-display text-center text-4xl font-bold -tracking-widest  bg-white/30 backdrop-blur-sm rounded-md px-3 py-2 md:text-7xl md:leading-[5rem]"
        textLeft="استپ، پاس"
        textRight="حرکت"
      />
    </section>
  )
}

export default ParallaxText
