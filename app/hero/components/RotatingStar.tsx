import React from 'react'
import { CircularRotator } from './CircularRotator'
import StarSvg from './StarSvg'
import { cn } from '@/lib/utils'

type Props = { className?: string }

export const RotatingStar = (className: Props) => {
  return (
    <CircularRotator
      duration={15}
      reverse
      size={120}
      className={cn('mix-blend-difference', className)}
      //   label="Technologies we use"
    >
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
    </CircularRotator>
  )
}
export default RotatingStar
