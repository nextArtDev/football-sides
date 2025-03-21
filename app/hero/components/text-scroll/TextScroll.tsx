import React from 'react'
import ScrollVelocity from './ScrollVelocity'

function TextScroll() {
  return (
    <section dir="rtl" className="">
      <ScrollVelocity
        texts={['ورزش  دانش اخلاق ', 'ورزش  دانش اخلاق ', 'ورزش  دانش اخلاق ']}
        //   velocity={velocity}
        velocity={30}
        className="custom-scroll-text text-5xl opacity-40 font-extrabold"
      />
    </section>
  )
}

export default TextScroll
