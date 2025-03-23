'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React from 'react'

type Props = {
  text: string
  reverse?: boolean
  className?: string
}

function TextSlider({ text, reverse = false, className }: Props) {
  const sliderVariants = {
    initial: {
      x: `${reverse ? -40 : 40}%`,
    },
    animate: {
      x: `${reverse ? -100 : 100}%`,
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 10,
      },
    },
  }

  return (
    <motion.div
      className={cn(
        'slidingTextContainer text-yellow-500/60  text-[10vh] md:text-[15vh] -z-[10] w-[50%] font-bold ',
        className
      )}
      //   style={{
      //     position: 'absolute',
      //     fontSize: '15vh',
      //     bottom: '30%',
      //     whiteSpace: 'nowrap',
      //     // color: '#ffffff09',
      //     width: '50%',
      //     fontWeight: 'bold',
      //   }}
      variants={sliderVariants}
      initial="initial"
      whileInView="animate"
    >
      {text}
    </motion.div>
  )
}

export default TextSlider
