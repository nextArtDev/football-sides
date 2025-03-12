import React, { useState } from 'react'
import { motion } from 'motion/react'
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
  scorer?: string
  className?: string
}

export default function ScoreCard({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  matchTime = 'نتیجه نهایی',
  scorer = false,
  className,
}: ScoreProps) {
  const [scored, setScored] = useState(false)
  const [awScore, setAwScore] = useState(awayScore)
  const [popAnimation, setPopAnimation] = useState(false)

  return (
    <div className={cn('p-10 overflow-hidden', className)}>
      <motion.div
        className={`rounded-3xl ${scored ? 'bg-[#09374d]' : 'bg-none'} p-1`}
        animate={{ height: scored ? 160 : 100 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {/* <div className="mx-auto flex w-[440px] items-center justify-evenly rounded-3xl bg-black p-4 text-white"> */}
        <div className="mx-auto flex w-full items-center justify-evenly bg-black p-1 text-white">
          {/* Home Team */}
          <div className="flex flex-col">
            <img
              src={homeTeam.logo}
              alt={homeTeam.name}
              className="mb-2 h-[70px] w-[70px] object-contain"
            />
            {!scored && <span>{homeTeam.name}</span>}
          </div>

          {/* Score */}
          <div className="text-center">
            <motion.div
              className="text-xl md:text-4xl font-bold"
              animate={popAnimation ? { opacity: [1, 0, 1] } : { opacity: 1 }} // Popping animation
              transition={{ duration: 0.5 }} // Control animation speed
              onAnimationComplete={() => setPopAnimation(false)}
            >
              {homeScore}-{awScore}
            </motion.div>
            <div className="text-base">{matchTime}</div>
          </div>

          {/* Away Team */}
          <div className="flex flex-col">
            <img
              src={awayTeam.logo}
              alt={awayTeam.name}
              className="mb-2 h-[70px] w-[70px] object-contain"
            />
            {!scored && <span>{awayTeam.name}</span>}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
