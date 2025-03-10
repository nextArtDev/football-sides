'use client'
import React, { useRef } from 'react'

import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'motion/react'
import { CircularRotator } from '../CircularRotator'
import StarSvg from '../StarSvg'
type Props = { className?: string }

export const FallingStars = (className: Props) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef })
  const xPosition = useTransform(scrollYProgress, [0, 1], [0, -80])
  const xSmallPosition = useTransform(scrollYProgress, [0, 1], [50, 500])
  const yPosition = useTransform(scrollYProgress, [0, 1], [100, -2500])
  const scale = useTransform(scrollYProgress, [0, 1], [3, 1])
  const space = useTransform(scrollYProgress, [0, 1], [0, 3])
  return (
    <motion.section
      style={{}}
      className="relative   flex flex-col items-center justify-center gap-y-4"
      ref={sectionRef}
    >
      <motion.article
        className="flex "
        style={{ y: yPosition, scale, x: xSmallPosition }}
      >
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
      </motion.article>
      <motion.article
        style={{ y: yPosition, scale, x: xSmallPosition }}
        className="flex "
      >
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
        <motion.div>
          <StarSvg />
        </motion.div>
      </motion.article>
    </motion.section>
  )
}
export default FallingStars
