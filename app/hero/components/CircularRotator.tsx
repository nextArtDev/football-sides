'use client'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import type { Transition } from 'motion/react'
import React, { CSSProperties, ReactNode } from 'react'

export type CircularRotatorProps = {
  children: ReactNode
  style?: CSSProperties
  duration?: number
  className?: string
  reverse?: boolean
  size?: number
  transition?: Transition
  label?: string
}

export function CircularRotator({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  size = 200,
  transition,
  label = 'Circular rotating content',
}: CircularRotatorProps) {
  const items = React.Children.toArray(children)
  const totalItems = items.length

  const finalTransition = {
    repeat: Infinity,
    ease: 'linear',
    ...transition,
    duration: transition?.duration ?? duration,
  }

  return (
    <motion.div
      className={cn('relative flex items-center justify-center', className)}
      style={{
        width: size,
        height: size,
        ...style,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={finalTransition}
      aria-label={label}
    >
      {items.map((child, index) => (
        <div
          key={index}
          className="absolute origin-center"
          style={{
            transform: `
              rotate(${(360 / totalItems) * index}deg)
              translate(${size / 2}px)
              rotate(${
                reverse
                  ? (360 / totalItems) * index
                  : (-360 / totalItems) * index
              }deg)
            `,
          }}
        >
          <div
            className="origin-center"
            style={{
              transform: `rotate(${
                reverse
                  ? (-360 / totalItems) * index
                  : (360 / totalItems) * index
              }deg)`,
            }}
          >
            {child}
          </div>
        </div>
      ))}
      <span className="sr-only">{label}</span>
    </motion.div>
  )
}
