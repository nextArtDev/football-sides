'use client'
import { motion } from 'motion/react'

const Balls = () => {
  const items = [
    { id: 1, color: 'bg-red-500', text: 'Creative' },
    { id: 2, color: 'bg-blue-500', text: 'Dynamic' },
    { id: 3, color: 'bg-green-500', text: 'Solutions' },
  ]

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gray-100">
      <motion.div className="flex flex-col items-center gap-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`${item.color} flex items-center justify-center shadow-lg`}
            layout // Enable layout transitions
            initial={{
              y: -1000,
              scale: 0,
              borderRadius: '50%',
              width: 48,
              height: 48,
            }}
            animate={{
              y: 0,
              scale: 1,
              borderRadius: '12px',
              width: 240,
              height: 80,
            }}
            transition={{
              y: {
                type: 'spring',
                stiffness: 300,
                damping: 15,
                mass: 2,
                delay: index * 0.2,
              },
              scale: {
                type: 'spring',
                delay: index * 0.2,
              },
              layout: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.5 + index * 0.1,
              },
              default: { duration: 0.3 },
            }}
          >
            {/* Text element with separate animation */}
            <motion.span
              className="text-white font-bold text-xl overflow-hidden whitespace-nowrap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.8 + index * 0.15,
                type: 'spring',
                stiffness: 150,
              }}
            >
              {item.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Balls
