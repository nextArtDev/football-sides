import React from 'react'
import { OrbitingCircles } from './orbiting-circles'
import StarSvg from '../StarSvg'

type Props = {}

function OrbitingItems({}: Props) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <OrbitingCircles duration={50} iconSize={40}>
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
      </OrbitingCircles>
      <OrbitingCircles
        duration={150}
        iconSize={60}
        radius={100}
        reverse
        speed={1}
      >
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
      </OrbitingCircles>
    </div>
  )
}

export default OrbitingItems
