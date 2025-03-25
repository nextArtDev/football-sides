'use client'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const Balls = () => {
  const [ballsLanded, setBallsLanded] = useState([false, false, false])

  const items = [
    { id: 1, className: ' ', text: 'باشگاه و مدرسه فوتبال' },
    {
      id: 2,
      className: 'text-4xl   font-bold   ',
      text: 'سپاهان مسجدسلیمان',
    },
    {
      id: 3,
      className: 'text-lg font-semibold',
      text: 'آموزش فوتبال و فوتسال بانوان و آقایان  ',
    },
    {
      id: 4,
      className: 'text-lg font-semibold',
      text: ' در رده‌های سنی 6 تا 17 سال',
    },
  ]

  //   Set balls as landed after their animation completes
  useEffect(() => {
    const timers = items.map((_, index) => {
      return setTimeout(() => {
        setBallsLanded((prev) => {
          const newState = [...prev]
          newState[index] = true
          return newState
        })
      }, 150 + index * 300) // Slightly after the ball lands
    })

    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <div className=" ">
      <div className="flex flex-col gap-3 ">
        {items.map((item, index) => (
          <div key={item.id} className="relative ">
            {/* First Ball Animation - Main Drop */}
            <motion.div
              style={{
                backgroundImage: 'url("/images/ball.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="absolute  top-0 left-0 right-0 mx-auto "
              initial={{
                y: -500,
                width: 60,
                height: 60,
                borderRadius: '50%',
                opacity: 1,
              }}
              animate={{
                y: 0,
                opacity: ballsLanded[index] ? 0 : 1,
                scale: ballsLanded[index] ? 0 : 1,
              }}
              transition={{
                y: {
                  type: 'spring',
                  damping: 6,
                  mass: 1,
                  stiffness: 100,
                  duration: 0.5,
                  delay: index * 0.3,
                },
                opacity: {
                  delay: 1.4 + index * 0.3,
                  duration: 0.3,
                },
                scale: {
                  delay: 1.4 + index * 0.3,
                  duration: 0.3,
                },
              }}
              onAnimationComplete={() => {
                // This triggers the second bounce animation
                if (!ballsLanded[index]) {
                  const secondBounceEl = document.getElementById(
                    `second-bounce-${index}`
                  )
                  if (secondBounceEl) {
                    secondBounceEl.style.display = 'block'
                  }
                }
              }}
            />

            {/* Second Bounce Animation */}
            <motion.div
              id={`second-bounce-${index}`}
              style={{
                // backgroundImage: 'url("/images/ball.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'none',
              }}
              //   className="absolute top-0 left-0 right-0 mx-auto shadow-lg"
              initial={{
                y: 0,
                // width: 80,
                height: 'auto',
                borderRadius: '50%',
                opacity: 1,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: ballsLanded[index] ? 0 : 1,
                scale: ballsLanded[index] ? 0 : 1,
              }}
              transition={{
                y: {
                  type: 'tween',
                  duration: 0.5,
                  times: [0, 0.5, 1],
                  ease: 'easeInOut',
                },
                opacity: {
                  delay: 0.4,
                  duration: 0.01,
                },
              }}
              onAnimationComplete={() => {
                // This triggers the third bounce animation
                if (!ballsLanded[index]) {
                  const thirdBounceEl = document.getElementById(
                    `third-bounce-${index}`
                  )
                  if (thirdBounceEl) {
                    thirdBounceEl.style.display = 'block'
                  }
                }
              }}
            />

            {/* Third Bounce Animation */}
            <motion.div
              id={`third-bounce-${index}`}
              style={{
                // backgroundImage: 'url("/images/ball.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'none',
              }}
              className="absolute top-0 left-0 right-0 mx-auto  "
              initial={{
                y: 0,
                // width: 80,
                // height: 80,
                borderRadius: '50%',
                opacity: 1,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: ballsLanded[index] ? 0 : 1,
                scale: ballsLanded[index] ? 0 : 1,
              }}
              transition={{
                y: {
                  type: 'tween',
                  duration: 0.4,
                  times: [0, 0.5, 1],
                  ease: 'easeInOut',
                },
                opacity: {
                  delay: 0.3,
                  duration: 0.1,
                },
              }}
            />

            {/* Text Element */}
            <motion.div
              className={` rounded-md    ${item.className}`}
              initial={{
                opacity: 0,
                y: 0,
                scale: 0,
                // width: 140,
              }}
              animate={{
                opacity: ballsLanded[index] ? 1 : 0,
                scale: ballsLanded[index] ? 1 : 0,
              }}
              transition={{
                opacity: {
                  delay: 1.5 + index * 0.3,
                  duration: 0.3,
                },
                scale: {
                  delay: 1.5 + index * 0.3,
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 200,
                },
              }}
            >
              <motion.span
                className="font-bold "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.7 + index * 0.3, duration: 0.3 }}
              >
                {item.text}
              </motion.span>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Balls
