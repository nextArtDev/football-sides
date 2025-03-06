import React from 'react'
import Orb from './components/Orb1'
import ScrollAnimationScene from './components/scrollTriggerStars'

function page() {
  return (
    <section className="relative">
      <div
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: '0',
          left: '0',
        }}
        className=" w-full min-h-screen h-screen flex flex-col items-center justify-center"
      >
        {/* Desktop */}
        <Orb />

        {/* Mobile  */}
        {/* <Orb sphereRadius={2.5} baseWidth={0.3} baseHeight={0.3} /> */}
      </div>
      {/* <ScrollAnimationScene /> */}
    </section>
  )
}

export default page
