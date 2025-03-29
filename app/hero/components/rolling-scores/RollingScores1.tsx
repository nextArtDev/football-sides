'use client'
import { useCallback, useEffect } from 'react'
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  type PanInfo,
} from 'motion/react'
import ScoreCard from './score-card'
import { useScreenSize } from '@/hooks/useScreenSize'
import Chooghaa from '@/app/background/components/Chooghaa'

const DEFAULT_IMAGES = [
  '/default-image-1.jpg',
  '/default-image-2.jpg',
  '/default-image-3.jpg',
  '/default-image-4.jpg',
  '/default-image-5.jpg',
]

interface RollingGalleryProps {
  autoplay?: boolean
  pauseOnHover?: boolean
  images?: string[]
}

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = DEFAULT_IMAGES,
}: RollingGalleryProps) => {
  const { isSm } = useScreenSize()

  // 3D geometry
  const cylinderWidth = isSm ? 1100 : 1800
  const faceCount = images.length
  const faceWidth = (cylinderWidth / faceCount) * 1
  const radius = cylinderWidth / (2 * Math.PI)

  // Framer Motion
  const dragFactor = 0.03
  const rotation = useMotionValue(0)
  const controls = useAnimation()
  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`)

  const startInfiniteSpin = useCallback(
    (startAngle: number) => {
      controls.start({
        rotateY: [startAngle, startAngle - 360],
        transition: {
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        },
      })
    },
    [controls]
  )

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get()
      startInfiniteSpin(currentAngle)
    } else {
      controls.stop()
    }
  }, [autoplay, controls, rotation, startInfiniteSpin])

  const handleUpdate = (latest: { rotateY: number }) => {
    rotation.set(latest.rotateY)
  }

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    controls.stop()
    rotation.set(rotation.get() + info.offset.x * dragFactor)
  }

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor
    rotation.set(finalAngle)

    if (autoplay) {
      startInfiniteSpin(finalAngle)
    }
  }

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop()
    }
  }

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get()
      startInfiniteSpin(currentAngle)
    }
  }

  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      <Chooghaa className="absolute w-full h-1/3 -bottom-1 -z-10 rotate-180" />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d',
          }}
          className="flex min-h-fit cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {images.map((url, i) => (
            <div
              key={url}
              className="group absolute flex h-fit items-center justify-center !p-0 [backface-visibility:hidden]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <ScoreCard
                awayScore={0}
                awayTeam={{
                  logo: '/images/logo.png', // Using actual image URL
                  name: 'کشت و صنعت  شادگان بیجار',
                }}
                homeScore={3}
                homeTeam={{
                  logo: '/images/logo.png', // Using actual image URL
                  name: 'سپاهان مسجدسلیمان',
                }}
                className="bg-yellow-500 h-[100px] w-[300px] md:h-[150px] md:w-[350px] rounded-[15px] transition-transform duration-300 ease-out group-hover:scale-115"
                matchTime="نتیجه نهایی"
                scorer="Foden"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default RollingGallery
