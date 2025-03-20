import React from 'react'
import { CircularRotator } from './CircularRotator'
import StarSvg from './StarSvg'
import { cn } from '@/lib/utils'

type Props = { className?: string }

export const RotatingStar = (className: Props) => {
  return (
    <section className="relative">
      <CircularRotator
        duration={15}
        reverse
        size={130}
        className={cn('mix-blend-difference', className)}
        //   label="Technologies we use"
      >
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg className="" width={'30px'} height={'30px'} />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
      </CircularRotator>
    </section>
  )
}
export default RotatingStar
