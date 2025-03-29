'use client'
import React, { useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Team {
  name: string
  logo: string
}

interface ScoreProps {
  homeTeam: Team
  awayTeam: Team
  homeScore: number
  awayScore: number
  matchTime: string
  scorer: string
  className?: string
}

export default function ScoreCard({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  className,
}: ScoreProps) {
  const [popAnimation, setPopAnimation] = useState(false)

  return (
    <div className={cn('py-0.5', className)}>
      <motion.div
        className={`rounded-3xl   p-1`}
        animate={{ height: 100 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div className="mx-auto flex   items-center justify-evenly rounded-xl md:rounded-3xl bg-primary  text-black text-center">
          {/* Home Team */}
          <div className="flex flex-col items-center justify-center text-xs">
            <figure className="relative mb-2 h-[40px] md:h-[70px] w-[40px] md:w-[70px] ">
              <Image
                fill
                src={homeTeam.logo}
                alt={homeTeam.name}
                className="object-contain"
              />
            </figure>

            <span className="text-xs line-clamp-2 text-center max-w-[70px] md:text-sm ">
              {homeTeam.name}
            </span>
          </div>

          {/* Score */}
          <div className="text-center flex flex-col gap-0.5 items-center justify-center ">
            <motion.div
              className="text-2xl md:text-4xl font-bold"
              animate={popAnimation ? { opacity: [1, 0, 1] } : { opacity: 1 }} // Popping animation
              transition={{ duration: 0.5 }} // Control animation speed
              onAnimationComplete={() => setPopAnimation(false)}
            >
              {homeScore}-{awayScore}
            </motion.div>
            <p className="font-normal text-sm md:text-sm">{'1403/05/02'}</p>
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center justify-center text-xs">
            <figure className="relative mb-2 h-[40px] md:h-[70px] w-[40px] md:w-[70px] ">
              <Image
                fill
                src={awayTeam.logo}
                alt={awayTeam.name}
                className="object-contain"
              />
            </figure>

            <span className="  text-xs line-clamp-2 text-center max-w-[70px] md:text-sm ">
              {awayTeam.name}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
