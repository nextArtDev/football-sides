'use client'
// time: 1:11:00
import { useRef } from 'react'

import { motion, useScroll, useTransform } from 'motion/react'
import Waves from '@/app/hero/components/waves/Waves'

const Parallax = ({ type }: { type?: string }) => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    // our target is our whole section
    target: ref,
    //'start start': animation 'start's when the 'top' of the element is the top of the view port
    //'end start': animation is gonna 'end' when the 'top' of the target element riches the bottom of the view port
    offset: ['start start', 'end start'],
  })

  // y = yText => if (scrollYProgress === 0 ) return 0% , and if(scrollYProgress ===1) return 500%
  // It means if scrollYProgress===0 than y = 0% , and if scrollYProgress===1 then y = 500% and everything between them divides.
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%'])
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const yMinusBg = useTransform(scrollYProgress, [0, 1], ['0%', '-60%'])
  const xBg = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])
  const xMinusBg = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const rotateBg = useTransform(scrollYProgress, [0, 1], ['0', '360'])

  return (
    <div
      className="parallax w-full h-full relative flex items-center justify-center overflow-hidden "
      ref={ref}
      style={{
        // backgroundImage: 'url("/images/stadium.jpg")',
        backgroundSize: 'cover',
        width: ' 100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        // background:
        //   type === 'services'
        //     ? 'linear-gradient(180deg, #111132, #0c0c1d)'
        //     : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <Waves
        lineColor="#fff"
        // backgroundColor="rgba(255, 255, 255, 0.2)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
      {/* <motion.h1 style={{ fontSize: '100px', y: yText }}>
        {type === 'services' ? 'What We Do?' : 'What We Did?'}
      </motion.h1> */}
      <motion.div
        className="mountains"
        style={{
          backgroundImage: 'url("/images/goalkeeper.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%',
          scale: 0.4,
          position: 'absolute',
          bottom: '-15%',
          left: '-35%',
          zIndex: '4',
          x: xBg,
          y: yMinusBg,
          opacity: '80%',
          mixBlendMode: 'inherit',
        }}
      ></motion.div>
      <motion.div
        className="planets"
        style={{
          backgroundImage: `url('/images/player3.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom',
          width: '100%',
          height: '100%',
          scale: 0.8,
          position: 'absolute',
          top: '-10%',
          left: '30%',
          backgroundRepeat: 'no-repeat',
          zIndex: '2',
          opacity: '80%',
          x: xMinusBg,
          y: yBg,
          //   backgroundImage: `url(${
          //     type === 'services' ? '/planets.png' : '/sun.png'
          //   })`,
        }}
      ></motion.div>
      <motion.div
        className="stars origin-center"
        whileInView={{ rotate: '360deg' }}
        transition={{
          type: 'spring',
          bounce: 0.25,
          repeat: Infinity,
          duration: 2,
        }}
        style={{
          backgroundImage: 'url("/images/ball.png")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          scale: 0.1,
          transformOrigin: 'center',
          backgroundPosition: 'bottom',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '-35%',
          left: '-5%',
          zIndex: '3',
          //   rotate: rotateBg,
          y: yBg,
        }}
      ></motion.div>
    </div>
  )
}

export default Parallax
